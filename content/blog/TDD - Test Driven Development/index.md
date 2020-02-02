---
title: "TDD - Test Driven Development and Modern Agile "
date: "2020-01-31"
description: "An argument and short exploration of Test Driven Development in modern Python3 and JavaScript."
tags: 
    - developer
    - tests
    - software
    - test driven development
    - javascript
    - python
    - python3
    - react 
    - django
    - drf
    - django rest framework
    
---


### TDD is not a new idea. 

Credited to have been invented by Kent Beck back in the 1950's, test-driven development is the idea of making a test before you write the code related to the task at hand. However, right now in the age of agile teams, two week sprints, and quite frankly whip-lash as developers bounce between projects, it is an idea that doesn't seem like it gets to see the light of day very often. 

#### It doesn't help that in the frontend, creating tests feels really... futile. 

When I get the chance to do do some back-end code, TDD is just delightful. It allows decomposition, compartimentalization, and assurance that when something should work, it is immediately obvious whether it does or not. 

However, most of my work takes place in the frontend. When one thing I've learned is that honestly, the user interface doesn't last that long. And if it doesn't last as long, and a slew of new features need to be up by friday (or Saturday... or maybe Monday. Who am I kidding. Probably Monday.), there just isn't time to write snapshot tests, especially before I write the visual component or state itself. 



Most software design I've encountered (in my own little realm) seems to follow the agile practices. A rapid environment, at it's premise centered around keeping the customer in contact with the a fast, working product that goes through continuous integrations until it reaches a polished final piece (ideally). 

TDD, by comparison, works by taking a very small piece of the project, and then generally writing the test for whatever you hope to build. After the test is built, the feature is then built. 

For example, recently I was working in Django Rest Framework for a micro-business pet project and wanted to change the default login from username to email. I could have set up the required model, manager, form, and serializer changes and then manually tested the changes each time from my attached development frontend, or in a tool like PostMan. Or.... I could create a test file and add 

```python3
def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            email='normal@user.com', password='foo')
        self.assertEqual(user.email, 'normal@user.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        try:
            # username is None for the AbstractUser option
            # username does not exist for the AbstractBaseUser option
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            User.objects.create_user(email='', password="foo")


```

and check to see if it works by simply typing 'python manage.py test'.



<!-- A positive and negative of this is the new-ish ideas of Continuous Integration & Continuous Developmet -->