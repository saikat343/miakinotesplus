from django.urls import path, include
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from apiwork import views

router = routers.DefaultRouter()
router.register(r'employees', views.EmployeeView, 'employee')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
