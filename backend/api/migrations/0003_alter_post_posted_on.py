# Generated by Django 3.2.3 on 2021-05-23 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210523_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='posted_on',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
