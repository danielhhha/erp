from erp_backend.handlers.login import login
from django.urls import path

urlpatterns = [
    path('user/login/', login),
]