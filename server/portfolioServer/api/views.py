from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactFormEntry
from .serializer import ContactFromSerializer

@api_view(['GET'])

def get_contactFromEntry(request):
    contactFormEntries = ContactFormEntry.objects.all()
    serializedData = ContactFromSerializer(contactFormEntries, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_contactFormEntry(request):
    data = request.data
    serializer = ContactFromSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
