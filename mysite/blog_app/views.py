from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.views.generic import TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView
from blog_app.models import Post,Comment
from django.urls import reverse_lazy
from blog_app.forms import PostForm, CommentForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login

# Create your views here.

def registerUser(request):
    registered = False

    if request.method == 'POST':
        user_form = UserCreationForm(data = request.POST)

        if user_form.is_valid():

            user = user_form.save(commit=False)

            user.username = user.username.lower()
            user.save()
            new_user = authenticate (username=user_form.cleaned_data['username'],
                                        password= user_form.cleaned_data['password1'],)
            login(request,new_user)
            registered=True
        else:
            print(user_form.errors)

    else:
        user_form = UserCreationForm()

    return render(request, 'registration/login_registration.html',
                                        {'user_form': user_form,
                                         'registered': registered})

class AboutView(TemplateView):
    template_name = 'blog_app/about.html'

class PostListView(ListView):
    model = Post

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            object_list = self.model.objects.filter(title__icontains= query)
        else:
            object_list = self.model.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
        return object_list

class PostDetailView(DetailView):
    model = Post

class CreatePostView(LoginRequiredMixin, CreateView):
    login_url='/login/'
    redirect_field_name = 'blog_app/post_detail.html'

    form_class = PostForm
    
    def form_valid(self, form):
        form.instance.author = self.request.user
        return super(CreatePostView, self).form_valid(form)

    model = Post

class PostUpdateView(LoginRequiredMixin, UpdateView):
    login_url='/login/'
    redirect_field_name = 'blog_app/post_detail.html'

    form_class = PostForm

    model = Post

class PostDeleteView(LoginRequiredMixin,DeleteView):
    model = Post
    success_url = reverse_lazy('post_list')

class DraftListView(LoginRequiredMixin,ListView):
    login_url = '/login/'
    context_object_name = 'post_draft_list'
    template_name = 'blog_app/post_draft_list.html'
    redirect_field_name = 'blog_app/post_draft_list.html'

    model = Post

    def get_queryset(self):
        return Post.objects.filter(published_date__isnull=True).order_by('created_date')


#######################################
## Functions that require a pk match ##
#######################################

@login_required
def post_publish(request,pk):
    post = get_object_or_404(Post, pk=pk)
    post.publish()
    return redirect('post_detail', pk=pk)


@login_required
def add_comment_to_post(request,pk):
    post= get_object_or_404(Post, pk=pk)

    if request.method == 'POST':
        form= CommentForm(request.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user.username
            print(comment.author)
            comment.post = post
            comment.save()
            return redirect('post_detail', pk= post.pk)
    else:
        form = CommentForm()
            
    return render(request,'blog_app/comment_form.html', {'form': form})


@login_required
def comment_approve(request,pk):
    comment = get_object_or_404(Comment, pk=pk)
    comment.approve()
    return redirect('post_detail', pk=comment.post.pk)

@login_required
def comment_remove(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    post_pk = comment.post.pk
    comment.delete()
    return redirect('post_detail', pk=post_pk)
