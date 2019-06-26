Login
=====

A deployed version of this login can be found at https://ianwalston.github.io/login/

## index.html

The index contains a form with labeled inputs for username and password and a submit button.
The form contains an action and method attributes as a fall back in case javascript is not enabled in the browser.
Otherwise, this default behavior is prevented by the login.js.

## login.js

I have added some additional functionality to this form to display my javascript skills.

This javascript file will handle form submission.
It checks to see if the username and password are correct.

If correct
- if it's the user's first successful submission, an alert appears
- the form will rotate 1 and 1/7th turns, and lose 20% opacity.
- if the user's screen is not small, the body top and right padding will increase by 128px
- Upon 7 correct submissions, the form will return to its original state
- submit.mp3 is played

If incorrect
- if it's the user's first incorrect submission, an element is added to the document with a "forgot password" link
- on the first 8 submissions, the text size of the "forgot password" link increases by 3px
- on the first two incorrect submissions, an alert shows
- if the user makes more than two incorrect submissions, a confirm appears that can take the user to the "forgot password" url

## style.css

This css file has been autoprefixed for browser support and performs the following functions:
- Hover styles are highlight the clickable areas of the form
- Active and focus styles indicate the user's focus
- The transition property is used to animate style changes from login.js
- All clickable elements are at least 64px by 64px
- If the user's screen is smaller than 512px, the layout changes to accommodate this
- Gradients are used to create the illusion of a light source beyond the upper right corner of the document

## submit.mp3

This sound was taken from this youtube video: https://www.youtube.com/watch?v=KL--RrbjrF0