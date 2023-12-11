from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView,ListAPIView
from .models import CustomUser
from .serializer import CustomUserSerializer
from rest_framework import status

from django.core.mail import send_mail
import smtplib
class GetCustomUser(APIView):
    permission_class = [IsAuthenticated]
    def get(self, request):
        try:
            queryset = CustomUser.objects.all()
            serializer = CustomUserSerializer(queryset, many=True)
           


            # send_mail(
            #     'Password Reset OTP',
            #     'Your OTP for password reset is: ',
            #     'from@example.com',
               
            #     fail_silently=False,
            # )
        except smtplib.SMTPAuthenticationError as e:
            print(">>>>>>>>>>>>>",e)
            
    

        return Response(serializer.data)

    def post(self, request):  # Fix the typo here
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




    


class RegisterUser(APIView):
    serializer_class = CustomUserSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                            