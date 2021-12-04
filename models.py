from django.db import models

# Create your models here.


class Employee(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    contact = models.CharField(max_length=500)
    address = models.TextField()

    def __str__(self):
        return self.full_name
