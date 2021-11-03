# from rest_framework.routers import SimpleRouter
# from mainapp.views import UserOmHusModelViewSet

# router = SimpleRouter()

# router.register("users", UserOmHusModelViewSet)

# urlpatterns = []

# urlpatterns += router.urls


from django.urls import path
from mainapp.views import index

urlpatterns = [
    path('', index, name='index'),
]