from rest_framework.serializers import ModelSerializer
from mainapp.models import UserOmHus

class UserOmHusSerializer(ModelSerializer):

    class Meta:
        model = UserOmHus
        fields = ['id', 'username', 'password', 'email', 'uid']