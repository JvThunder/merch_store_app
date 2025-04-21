# Setup from Git Clone
1. cd backend
2. python -m venv store-env
3. store-env\Scripts\activate 
# For Linux/Mac: source store-env/bin/activate
4. pip install Django
5. python manage.py createsuperuser 
6. cd src
7. python manage.py runserver

# Setup from Scratch

1. python -m venv store-env
2. store-env\Scripts\activate 
# For Linux/Mac: source store-env/bin/activate
3. pip install Django
4. django-admin startproject store_project
5. cd src
6. python manage.py startapp store_app
7. python manage.py runserver

8. Create models

```models.py
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
```

9. Create admin

```admin.py
from django.contrib import admin
from .models import Product

admin.site.register(Product)
```

10. Go to settings.py and add 'store_app' to INSTALLED_APPS
11. python manage.py makemigrations
12. python manage.py migrate
13. python manage.py createsuperuser (Make a user for admin)
14. python manage.py runserver <port_no>
15. Go to http://127.0.0.1:8000/admin/

## Add new endpoints

1. Update views.py file in store_app folder

```views.py
from django.shortcuts import render
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})
```

```store_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("store/", include('store_app.urls')),
]
```

```store_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),
]
```

```views.py
from django.shortcuts import render
from .models import Product
from django.http import JsonResponse

# Create your views here.
def product_list(request):
    products = Product.objects.all()
    
    data = {
        'products': list(products.values())
    }
    return JsonResponse(data)
```

2. python manage.py runserver
3. Go to http://127.0.0.1:8000/store/list/





