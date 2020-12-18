from django.db import models

class BlogPost(models.Model):
    Title = models.CharField(max_length=150)
    Content = models.CharField(max_length=3000)
