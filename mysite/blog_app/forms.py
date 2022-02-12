from django import forms
from blog_app.models import Post,Comment

class PostForm(forms.ModelForm):
    class Meta():
        model = Post
        # fields = ('author','title', 'text')
        fields = ('title', 'text')

        widgets = {
            'title': forms.TextInput(attrs={'class': 'textinputclass form-control', 'style':'max-width: 300px', 'placeholder' : 'Title'}),
            'text': forms.Textarea(attrs={'class':'editable medium-editor-textarea form-control', 'style':'max-width: 800px', 'placeholder':'Text'}),
        }


class CommentForm(forms.ModelForm):
    class Meta():
        model = Comment
        fields = ('text',)

        widgets = {
            'text': forms.Textarea(attrs={'class': 'editable medium-editor-textarea form-control',  'style':'max-width: 300px', 'placeholder':'Text'})
        }