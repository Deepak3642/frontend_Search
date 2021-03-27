from django.db import models

# Create your models here.
class Search_Table(models.Model):
    Username = models.CharField(max_length=50)
    Date = models.DateField()
    Text = models.CharField(max_length=250)

    class Meta:
        ordering = ['-Date',]

    def __str__(self):
        return self.Username + ' ' + self.Text
