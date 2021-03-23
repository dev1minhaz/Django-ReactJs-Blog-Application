from rest_framework import permissions

class IsOwnerOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        print(obj.user.username)
        return obj.user.username == request.user.username