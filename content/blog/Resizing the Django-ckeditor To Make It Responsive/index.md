---
title: "Resizing the Django-ckeditor To Make It Responsive"
date: "2020-11-01"
description: "Small tip on making the responsive after installing it with Django"
---

This will be a quick one.

I've gotten around to the finer-details in building my django job board website [solists.com](https://www.solists.com), and noticed that my ckeditor plugin was forcing it's width somewhere around 900px, or the default. I did a quick search online, and it seems like this has been an old issue on various places like stackoverflow, some forums, etc, and I thought it was worth spending the few minutes it would take to explain to later users how to make the width responsive. Perhaps this post is not needed, but just in case, here it is.

First, go into your root settings file. Add something like the following.

```python
CKEDITOR_CONFIGS = {
    'default': {
        'width': '100%'
    },
}
```

This sets the iframe width to 100%, or the width of the parent div. This is the first half. If you check your rendered editor, it will have _all_ the fields. I didn't want this, but it's a quick fix. (Edit as needed)

```python
# your_app/settings.py
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'Custom',
        'toolbar_Custom': [
            ['Bold', 'Italic', 'Underline'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['Link', 'Unlink'],
            ['RemoveFormat', 'Source']
        ],
        'width': '100%'
    },
}
```

There we go. Some features trimmed, and width 100%.

Now, go into your static css folder, (If you don't have one, check the docs [here](https://docs.djangoproject.com/en/3.1/howto/static-files/))

Put in the following css code snippet

```css
/* main.css */
.django-ckeditor-widget {
  width: 100%;
}
```

This tells the parent div that it's width is also 100% _it's_ parent div.

See? A seriously easy fix, but for some of those who are just gettings started, perhaps something to stumble over. If you had trouble and ended up here, you should know that you can press right click and click inspect on an element, or f12 in chrome to open up the dev tools, and then navigate the elements until you find the css class you need to modify. Then put that class into your css file with the changes you need (using !absolute isn't always the best practice, but is sometimes needed). You can also do some live testing of code changes there, but that's not always super userful after the changes dissapear on refresh.

In any case, there you go.

Happy coding.
