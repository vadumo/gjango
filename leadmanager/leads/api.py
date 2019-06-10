from leads.models import Lead, Tab2
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer, Tab2Serializer


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer


class Tab2ViewSet(viewsets.ModelViewSet):
    queryset = Tab2.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Tab2Serializer
