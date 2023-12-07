from .views import GetCustomUser
from django.urls import path,include
from django.contrib.auth import views as auth_views

urlpatterns = [
  
    path('usermanagement/',GetCustomUser().as_view(), name='get_name'),
    path('reset_password/ ', include('django_rest_passwordreset.urls', namespace='reset_password')),
 


]