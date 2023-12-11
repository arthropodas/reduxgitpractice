from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    is_superuser = models.BooleanField(default=False, null=True)
    is_staff = models.BooleanField(default=False, null=True)
    last_login = None
    date_joined = models.DateTimeField(auto_now_add=True)
    otp = models.CharField(max_length=6, null=True, blank=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=15,blank=True)
    USERNAME_FIELD = 'email'
   
    REQUIRED_FIELDS = ['']

