# Generated by Django 3.2.3 on 2021-05-23 15:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=40)),
                ('title', models.CharField(max_length=100)),
                ('post_id', models.IntegerField(default='', max_length=8, unique=True)),
                ('public', models.BooleanField(default=True)),
                ('body', models.TextField()),
                ('posted_on', models.DateTimeField(default=datetime.datetime(2021, 5, 23, 20, 57, 3, 344519))),
            ],
        ),
    ]
