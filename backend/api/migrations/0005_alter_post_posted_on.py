# Generated by Django 3.2.3 on 2021-05-23 16:00

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_post_posted_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='posted_on',
            field=models.DateField(default=datetime.datetime(2021, 5, 23, 16, 0, 18, 254570, tzinfo=utc)),
        ),
    ]