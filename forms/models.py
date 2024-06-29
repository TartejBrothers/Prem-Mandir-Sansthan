from django.db import models


class Database(models.Model):
    name = models.TextField()
    email = models.EmailField()
    phone = models.BigIntegerField()
    skills = models.TextField()
