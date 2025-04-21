## Frontend

1. cd frontend
2. npm install
3. npm start

## Backend

1. cd backend
2. python -m venv store-env
3. store-env\Scripts\activate 
# For Linux/Mac: source store-env/bin/activate
4. pip install Django django-cors-headers
5. cd src
6. python manage.py makemigrations
7. python manage.py migrate
8. python manage.py createsuperuser 
9. python manage.py runserver

