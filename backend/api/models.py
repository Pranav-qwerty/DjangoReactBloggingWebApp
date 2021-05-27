from time import time
from django.db import models
import string
import random

# Create your models here.


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Post.objects.filter(post_id=code).count() == 0:
            break

    return code


class Post(models.Model):
    author = models.CharField(max_length=40)
    title = models.CharField(max_length=100)
    post_id = models.CharField(
        max_length=8, default=generate_unique_code, unique=True)
    public = models.BooleanField(null=False, default=True)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
