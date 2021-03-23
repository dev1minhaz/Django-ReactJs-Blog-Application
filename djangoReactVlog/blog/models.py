from django.db import models
from django.contrib.auth.models import User

# Create your models here.


# def user_img_path(instance, filename):
#     return 'profile_pics/{0}/{1}'.format(instance.username, filename)


# def post_img_path(instance, filename):
#     return 'post_images/{0}/{1}'.format(instance.username, filename)


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="blog_images/", blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}=={self.title}"


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profile_images/",
                              default="default.png", blank=True, null=True)

    def __str__(self):
        return self.user.username
