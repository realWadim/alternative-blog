from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=150)
    content = models.CharField(max_length=10000)
    image = models.CharField(max_length=1000, default='https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg')