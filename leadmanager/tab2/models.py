from django.db import models


class Lead(models.Model):
    group_name = models.CharField(max_length=100)
    descriptions = models.CharField(max_length=100)
