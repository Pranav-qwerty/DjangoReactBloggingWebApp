from rest_framework import serializers
from .models import Post


class PostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('author', 'title', 'post_id',
                  'public', 'body', 'created_at')


class CreatePostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('author', 'title', 'public', 'body')
