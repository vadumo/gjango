from rest_framework import routers
from .api import LeadViewSet, Tab2ViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/tab2', Tab2ViewSet, 'tab2')

urlpatterns = router.urls