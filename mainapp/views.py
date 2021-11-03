from rest_framework.viewsets import ModelViewSet
from mainapp.serializers import UserOmHusSerializer
from mainapp.models import UserOmHus
from django.shortcuts import render

import requests


url = 'http://94.234.163.14/tstweb/hs/tid/getdata'
username = "Site"
password = '1049'



def index(request):
    template_name = './index.html'
    data = requests.get(url, auth=(username, password))

    context = {
        'data': data.text,
    }
    return render(request, template_name, context=context)
