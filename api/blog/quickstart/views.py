from blog.quickstart.models import BlogPost
from rest_framework import viewsets
from rest_framework import permissions
from blog.quickstart.serializers import BlogPostSerializer


class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all().order_by('-id')
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]
    
