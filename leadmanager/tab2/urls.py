from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/tab2', LeadViewSet, 'tab2')

urlpatterns = router.urls
