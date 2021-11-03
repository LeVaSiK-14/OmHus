from django.db import models
from django.contrib.auth.models import AbstractUser


class UserOmHus(AbstractUser):
    uid = models.CharField(max_length=127)

    def __str__(self):
        return self.uid