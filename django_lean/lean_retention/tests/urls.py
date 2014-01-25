from django.conf.urls import patterns, include, url
from django.http import HttpResponse


def home(request):
    return HttpResponse('Home')


urlpatterns = patterns('',
    url(r'^home', home, name='home'),
)
