from django.shortcuts import render
from search.models import Search_Table

def home(request):
    result = Search_Table.objects.all()
    return render(request, "index.html", context={'result':result})
