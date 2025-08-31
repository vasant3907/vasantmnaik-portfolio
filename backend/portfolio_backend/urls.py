"""
URL configuration for portfolio_backend project.
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.views.static import serve
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    path('static/<path:path>', serve, {'document_root': settings.STATIC_ROOT}),
]

# Serve React app for all non-API routes
if not settings.DEBUG:
    urlpatterns += [
        re_path(r'^(?!api/|admin/|static/).*$', TemplateView.as_view(template_name='index.html')),
    ]
else:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
