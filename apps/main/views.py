from django.shortcuts import render, redirect, HttpResponse
# from .models import User, Appointment
import bcrypt, time
from datetime import datetime, date
from django.contrib import messages

def index(request):

    return render(request, 'main/index.html')
