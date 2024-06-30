from django.shortcuts import render, redirect
from .forms import add_data, add_contact

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


def program(request):
    return render(request, "program.html")


def contact(request):
    form = add_contact(request.POST or None)
    if form.is_valid():
        form.save()
        form = add_contact()
        messages.info(request, "Data stored successfully!")
        return redirect("contact")
    context = {"form": form}
    return render(request, "contact.html", context)
