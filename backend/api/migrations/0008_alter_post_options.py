# Generated by Django 3.2.3 on 2021-05-23 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_post_posted_on'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-posted_on']},
        ),
    ]
