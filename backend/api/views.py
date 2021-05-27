from rest_framework.response import Response
from rest_framework import generics
from .models import Post
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializers, CreatePostSerializers
import json

# Create your views here.


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializers


class CreatePostView(APIView):
    serializer_class = CreatePostSerializers

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            author = serializer.data.get('author')
            title = serializer.data.get('title')
            body = serializer.data.get('body')
            post = Post(author=author, title=title, public=True,
                        body=body)
            post.save()
            return Response(PostSerializers(post).data, status=status.HTTP_200_OK)
        return Response({'Error': serializer.error_messages}, status=status.HTTP_403_FORBIDDEN)


class GetPostView(APIView):
    serializer_class = PostSerializers
    lookup_url_kwarg = 'post_id'

    def get(self, request, format=None):
        post_id = request.GET.get(self.lookup_url_kwarg)
        if post_id != None:
            post = Post.objects.filter(post_id=post_id)
            if len(post) > 0:
                data = PostSerializers(post[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Post Not Found': 'Invalid Post Code'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)


class SearchPostView(APIView):
    serializer_class = PostSerializers

    def get(self, request, format=None):
        query = request.GET.get('query')
        if query != None:
            posts_list = Post.objects.all()
            res = []
            for i in posts_list:
                if query.lower() in i.title.lower():
                    res.append({"author": i.author, "title": i.title,
                                "body": i.body[0: 300], "date": str(i.created_at), "post_id": i.post_id})
                else:
                    pass
            if res == []:
                return Response({"Not Found": "Your query does not match any articles"}, status=status.HTTP_404_NOT_FOUND)
            json_data = json.dumps(res)
            return Response(json_data, status=status.HTTP_200_OK)
        return Response({"Not Found": "Your query does not match any articles"}, status=status.HTTP_404_NOT_FOUND)
