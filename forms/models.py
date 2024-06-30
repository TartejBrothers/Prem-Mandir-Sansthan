from django.db import models


class Database(models.Model):
    name = models.TextField()
    email = models.EmailField()
    phone = models.BigIntegerField()
    skills = models.TextField()


class Contact(models.Model):
    name = models.TextField()
    email = models.EmailField()
    phone = models.BigIntegerField()
    message = models.TextField()
