# Generated by Django 3.2.3 on 2021-05-23 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_post_posted_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='posted_on',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]