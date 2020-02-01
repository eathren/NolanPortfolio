---
title: "TDD - Test Driven Development"
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


### Test Driven Development? 

TDD is not a new idea. However, right now in the age of agile, 1 and 2 week sprints, it is an idea that doesn't seem like it gets to be used much. 

Most software design I've encountered (in my own little realm) seems to follow the agile theories. A rapid environment, at it's premise centered around keeping the customer in contact with the a fast, working product that goes through continuous integrations until it reaches a polished final piece (ideally). 

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