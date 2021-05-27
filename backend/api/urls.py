from django.urls import path
from . import views

urlpatterns = [
    path('post', views.PostView.as_view()),
    path('create-post', views.CreatePostView.as_view()),
    path("get-post", views.GetPostView.as_view()),
    path("search-post", views.SearchPostView.as_view()),
]
