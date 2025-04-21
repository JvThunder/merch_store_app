from django.shortcuts import render
from .models import Product
from django.http import JsonResponse
import json

def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        print(list(products.values()))

        data = {
            'products': list(products.values())
        }
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def add_product(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        Product.objects.create(
            name        = data['name'],
            price       = data['price'],
            description = data['description']
        )
        return JsonResponse({'message': 'Product added successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
