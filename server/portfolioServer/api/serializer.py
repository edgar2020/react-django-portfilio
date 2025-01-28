from rest_framework import serializers
from .models import ContactFormEntry

class ContactFromSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormEntry
        fields = '__all__'