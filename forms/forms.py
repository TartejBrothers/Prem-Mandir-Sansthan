from django import forms
from django.forms import ModelForm, TextInput, EmailInput, NumberInput
from .models import Database, Contact


class add_data(ModelForm):
    class Meta:
        model = Database
        fields = ["name", "email", "phone", "skills"]

        widgets = {
            "name": TextInput(
                attrs={"class": "form-control", "placeholder": "Enter your Full Name"}
            ),
            "email": EmailInput(
                attrs={"class": "form-control", "placeholder": "Enter your Email"}
            ),
            "phone": NumberInput(
                attrs={
                    "class": "form-control",
                }
            ),
            "skills": TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Enter your Skills separated by comma (,)",
                }
            ),
        }
        labels = {
            "name": "Name",
            "email": "Email",
            "phone": "Phone",
            "skills": "Skills",
        }


class add_contact(ModelForm):
    class Meta:
        model = Contact
        fields = ["name", "email", "phone", "message"]

        widgets = {
            "name": TextInput(
                attrs={"class": "form-control", "placeholder": "Enter your Full Name"}
            ),
            "email": EmailInput(
                attrs={"class": "form-control", "placeholder": "Enter your Email"}
            ),
            "phone": NumberInput(
                attrs={
                    "class": "form-control",
                }
            ),
            "message": TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Enter your Message",
                }
            ),
        }
        labels = {
            "name": "Name",
            "email": "Email",
            "phone": "Phone",
            "message": "Message",
        }
