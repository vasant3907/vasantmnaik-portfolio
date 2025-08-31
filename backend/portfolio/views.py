from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .models import Skill, Project, Experience, ContactMessage, PersonalInfo
from .serializers import (
    SkillSerializer, ProjectSerializer, ExperienceSerializer, 
    ContactMessageSerializer, PersonalInfoSerializer
)


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        """Get skills grouped by category"""
        skills_by_category = {}
        for skill in self.get_queryset():
            category = skill.get_category_display()
            if category not in skills_by_category:
                skills_by_category[category] = []
            skills_by_category[category].append(SkillSerializer(skill).data)
        
        return Response(skills_by_category)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Get featured projects"""
        featured_projects = Project.objects.filter(featured=True)
        serializer = self.get_serializer(featured_projects, many=True)
        return Response(serializer.data)


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def by_type(self, request):
        """Get experiences grouped by type"""
        experience_type = request.query_params.get('type', '')
        if experience_type:
            experiences = Experience.objects.filter(experience_type=experience_type)
        else:
            experiences = Experience.objects.all()
        
        serializer = self.get_serializer(experiences, many=True)
        return Response(serializer.data)


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        """Create a new contact message"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Message sent successfully!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PersonalInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PersonalInfo.objects.all()
    serializer_class = PersonalInfoSerializer
    permission_classes = [AllowAny]
    
    @action(detail=False, methods=['get'])
    def profile(self, request):
        """Get the main profile information"""
        profile = get_object_or_404(PersonalInfo, id=1)  # Assuming single profile
        serializer = self.get_serializer(profile)
        return Response(serializer.data)
