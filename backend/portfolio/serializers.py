from rest_framework import serializers
from .models import Skill, Project, Experience, ContactMessage, PersonalInfo


class SkillSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Skill
        fields = ['id', 'name', 'category', 'category_display', 'icon', 'order']


class ProjectSerializer(serializers.ModelSerializer):
    technologies = SkillSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technologies', 'image', 'github_url', 'live_url', 'featured', 'order', 'created_at']


class ExperienceSerializer(serializers.ModelSerializer):
    technologies = SkillSerializer(many=True, read_only=True)
    experience_type_display = serializers.CharField(source='get_experience_type_display', read_only=True)
    
    class Meta:
        model = Experience
        fields = ['id', 'title', 'company', 'description', 'start_date', 'end_date', 'current', 'experience_type', 'experience_type_display', 'technologies', 'order']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at', 'read']


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = ['id', 'name', 'title', 'description', 'email', 'linkedin_url', 'github_url', 'leetcode_url', 'profile_image', 'about_text', 'years_experience', 'projects_completed', 'technologies_known']
