from rest_framework import serializers
from leads.models import Lead, Tab2

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'


class Tab2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Tab2
        fields = '__all__'