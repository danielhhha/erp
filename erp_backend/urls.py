from erp_backend.handlers.login import userLogin
from django.urls import path

urlpatterns = [
    path('user/login/', userLogin),
]