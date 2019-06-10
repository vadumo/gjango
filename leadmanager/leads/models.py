from django.db import models


class Tab2(models.Model):
    group_name = models.CharField(max_length=100)
    descriptions = models.CharField(max_length=100)

    def __str__(self):
        return "%s the place" % self.group_name


class Lead(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)
    group = models.OneToOneField(Tab2, on_delete=models.PROTECT, unique=True, null=True)