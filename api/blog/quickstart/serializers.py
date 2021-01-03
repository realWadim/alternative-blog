from blog.quickstart.models import BlogPost
from rest_framework import serializers


class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['title', 'content','image']
