from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
    def create(self,validated_data):
        print("Create User method is being called.")
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)
