from blog.views import PostView, ProfileView, RegisterView, UserDataUpdateView, ProfileUpdate
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls.conf import include
from rest_framework.authtoken.views import obtain_auth_token

from rest_framework import routers

route = routers.DefaultRouter()
route.register("", PostView, basename="postview")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('profile/', ProfileView.as_view()),
    path('login/', obtain_auth_token),
    path("register/", RegisterView.as_view()),
    path('userdataupdate/', UserDataUpdateView.as_view()),
    path('profileupdate/', ProfileUpdate.as_view()),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)
