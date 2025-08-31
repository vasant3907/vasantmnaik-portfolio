from django.db import models


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming & Frameworks'),
        ('database', 'Databases'),
        ('concepts', 'Core Concepts'),
        ('tools', 'Tools'),
        ('soft_skills', 'Soft Skills'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    icon = models.CharField(max_length=50, blank=True, help_text="FontAwesome icon class")
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['category', 'order', 'name']
    
    def __str__(self):
        return f"{self.get_category_display()}: {self.name}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.ManyToManyField(Skill, related_name='projects')
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-featured', 'order', '-created_at']
    
    def __str__(self):
        return self.title


class Experience(models.Model):
    EXPERIENCE_TYPE_CHOICES = [
        ('work', 'Work Experience'),
        ('education', 'Education'),
        ('internship', 'Internship'),
    ]
    
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    current = models.BooleanField(default=False)
    experience_type = models.CharField(max_length=20, choices=EXPERIENCE_TYPE_CHOICES)
    technologies = models.ManyToManyField(Skill, related_name='experiences', blank=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-start_date', 'order']
    
    def __str__(self):
        return f"{self.title} at {self.company}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Message from {self.name}: {self.subject}"


class PersonalInfo(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    email = models.EmailField()
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    leetcode_url = models.URLField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    about_text = models.TextField()
    years_experience = models.IntegerField(default=0)
    projects_completed = models.IntegerField(default=0)
    technologies_known = models.IntegerField(default=0)
    
    class Meta:
        verbose_name_plural = "Personal Info"
    
    def __str__(self):
        return self.name
