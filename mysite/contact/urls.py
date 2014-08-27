from django.conf.urls import patterns, include, url

urlpatterns = patterns('contact.views',
    url(r'^formulario-contato/$', 'contact', name='contact'),
    url(r'^thanks/$', 'thanks', name='thanks'),
    url(r'^list/$', 'list', name='list')
)
