from django.db import models

# Create your models here.
class ContactFormEntry(models.Model):

    # defining inputs
    personName = models.CharField(max_length=127)
    personEmail = models.CharField(max_length=127)
    personComment = models.CharField(max_length=1023)

    # 
    def __str__(self):
        return f'{self.personName}({self.personName}) says: {self.personComment}'