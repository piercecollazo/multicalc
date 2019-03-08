# MultiCalc

Have you ever wanted your calculator to be able to perform the same operation on multiple numbers at once? Of course you haven't! But it's a great exercise in array manipulation and handling user input, so... that's what we're doing with this exercise.

### Instructions

There are an awful lot of helpful comments in the code, so this is just an overview.

* Unlike in The Input Game, the html behavior is entirely tied to the array behavior. So to start with, this app won't do anything at all. On the plus side, that means that anything that happens happens because of _you_ this time.
* You'll have to manage two separate things: taking in input to change what's in your list of numbers, and taking in input to perform a calculation that changes each number in that list. While that sounds like a lot, the math calculations can use very similar code if you do it right, and everything is broken down into separate functions and general areas of the code.
* The single biggest change from before is that every single selector has been removed from the `querySelector` functions. You'll have to be the one to connect the JavaScript to the HTML! Most of them are (I believe!) well-named enough to figure it out, and most of them are ids. However, a couple of them are tag names instead. Remember when filling them out that `document.querySelector` takes the _same exact_ selectors that you'd use in CSS.

Good luck!

### Hints
Much of this is in the code comments, but:

* You should go through the code in approximately top-to-down order, with the possible exception of skipping the somewhat tricky `removeFromList` function until later.
* Watch out for the data type of whatever the user enters in the input field. Is it a number or a string? When is it which, and why? How can you out which you're working with?
* We've done some odd things here, like declare most of our variables with `let`. We usually have a reason for doing something odd.
* If you can't see why we might have done something odd, we're probably... umm... testing you? To see if you can... correct what we're just _pretending_ is a mistake?
* Yeah, let's go with that.
* The `HTML Management` section probably doesn't need to be changed (aside from filling in the selectors), but you're welcome to play with it and change it if you think it will help. And you'll definitely have to figure out how to actually use it from the other parts of your code!


### Stretch Goals
* Add your own button! It should do something to every element in the array, but what that could be is totally up to you. For a bad example (because the idea should be your own!), you could have it subtract 3 from every element.
* You're looping through the array a number of times in this app. Is there a way to have only one loop in this entire codebase? Spoiler alert: there is! You'll have to make your own function into which you can pass the thing you  want to do to each item on the list. This is pretty advanced stuff for where we are now, so don't get discouraged if this seems very challenging. Feel free to do some heavy research on this one, but I would greatly prefer we avoid any use of the built-in array methods for doing this, like `.forEach` and `.map`.