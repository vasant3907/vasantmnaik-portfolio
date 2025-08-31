from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'skills', views.SkillViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'experiences', views.ExperienceViewSet)
router.register(r'contact', views.ContactMessageViewSet)
router.register(r'profile', views.PersonalInfoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
