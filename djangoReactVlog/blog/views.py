from blog.permissions import IsOwnerOnly
from rest_framework import serializers, views, viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.authentication import TokenAuthentication
from .models import Post, Profile
from django.contrib.auth.models import User
from .serializers import PostSerializer, ProfileSerializer, UserSerializer
from rest_framework.response import Response


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by("-id")
    serializer_class = PostSerializer
    authentication_classes = [TokenAuthentication]

    def get_permissions(self):
        if self.action == 'list' or 'retrieve':
            permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOnly]
        else:
            permission_classes = [IsAuthenticated, IsOwnerOnly]
        return [permission() for permission in permission_classes]


class ProfileView(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def get(self, request):
        user = request.user
        pquery = Profile.objects.get(user=user)
        serializer = ProfileSerializer(pquery)
        return Response({"message": "Request is get", "userdata": serializer.data})


class RegisterView(views.APIView):
    def post(self, request):
        serializers = UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"error": False, "message": "Update successfull", "data": serializers.data})


class UserDataUpdateView(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        user = request.user
        data = request.data
        user_obj = User.objects.get(username=user)
        user_obj.first_name = data['first_name']
        user_obj.last_name = data['last_name']
        user_obj.email = data['email']
        user_obj.save()
        return Response({"message": "Profile is updated"})


class ProfileUpdate(views.APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]

    def post(self, request):
        try:
            user = request.user
            query = Profile.objects.get(user=user)
            serializer = ProfileSerializer(
                query, data=request.data, context={"request": request})
            serializer.is_valid()
            serializer.save()
            response_msg = {"error": False, "message": "Profile is updated"}
        except:
            response_msg = {"error": True, "message": "Something is wrong"}
        return Response(response_msg)
