from django.contrib import admin
from .models import Database

from import_export.admin import ImportExportModelAdmin


class DatabaseAdmin(ImportExportModelAdmin):
    list_display = ["name", "email", "phone", "skills"]


admin.site.register(Database, DatabaseAdmin)
