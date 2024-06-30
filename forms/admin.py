from django.contrib import admin
from .models import Database, Contact

from import_export.admin import ImportExportModelAdmin


class DatabaseAdmin(ImportExportModelAdmin):
    list_display = ["name", "email", "phone", "skills"]


class ContactAdmin(ImportExportModelAdmin):
    list_display = ["name", "email", "phone", "message"]


admin.site.register(Contact, ContactAdmin)

admin.site.register(Database, DatabaseAdmin)
