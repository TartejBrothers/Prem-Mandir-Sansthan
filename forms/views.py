from django.shortcuts import render, redirect
from .forms import add_data

from django.contrib import messages


def home(request):
    form = add_data(request.POST or None)
    if form.is_valid():
        form.save()
        form = add_data()
        messages.info(request, "Data stored successfully!")
        return redirect("home")
    context = {"form": form}
    return render(request, "home.html", context)


def about(request):
    return render(request, "about.html")
