Login
=====

## index.html

The index contains a form with labled inputs for username and password and a submit button.
The form contains an action and method attribute as a fall back in case javascript is not enabled in the browser.
Otherwise, this default behavior is prevented by the login.js.

## login.js

I have added some functionality to this form that would not make sense for a real login form. I did this as a way to demonstrate my javascript skills. 

This javascript file will handle form submission.
It checks to see if the username and password are correct.

If correct
- if it's the user's first successful submission, an alert appears
- the form will rotate 1 and 1/7th turns, and lose 20% opacity.
- if the user's screen is not small, the body top and right padding will increase by 128px
- Upon 7 correct submissions, the form will return to it's original state

If incorrect
- if it's the user's first incorrect submission, an element is added to the document with a "forgot password" link
- on the first 8 submissions, the text size of the "forgot password" link increases by 3px
- on the first two incorrect submissions, an alert shows

