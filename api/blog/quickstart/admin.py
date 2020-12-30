# Register your models here.
from django.contrib.admin import AdminSite
from .models import BlogPost

class MyAdminSite(AdminSite):
    login_template = 'templates/admin/login.html'





...
# Then register your models with the new admin site
site = MyAdminSite()
# Register your models here.
site.register(BlogPost)
