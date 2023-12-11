from .views import GetCustomUser,RegisterUser
from django.urls import path,include
from django.contrib.auth import views as auth_views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    
)
urlpatterns = [
    path('login/',TokenObtainPairView.as_view(),name='login'),
    path('register/',RegisterUser().as_view(),name='register'),
    path('usermanagement/',GetCustomUser().as_view(), name='get_name'),
    path('reset_password/ ', include('django_rest_passwordreset.urls', namespace='reset_password')),
 


]