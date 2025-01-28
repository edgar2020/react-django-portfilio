from django.urls import path
from .views import get_contactFromEntry
from .views import create_contactFormEntry

urlpatterns = [
    path('contactFrom/', get_contactFromEntry, name="get_ContactFormEntry"),
    path('contactFrom/create/', create_contactFormEntry, name="create_contactFormEntry")
]