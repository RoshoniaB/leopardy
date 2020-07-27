# Feedback

Congrats on satisfying the project requirements! Here's some feedback for you:

## Code Quality

Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

- Code is generally well-formatted, well-named, and contains few style / quality issues. Take a look at the way I've refactored some of your code, and feel free to reach out to me directly if anything does not make sense. Also, make sure to remove any unused code (e.g., `console.log`) from your HTML/JS/CSS files!

- In terms of code organization, I'd recommend first listing out all your selectors at the top of the script, followed by any `.addEventListener` calls, then the callback function definitions, and finally any function invocations that happen when the script is loaded.

## Technical Requirements

How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

- Your game renders in the browser with no major errors and separates concerns into distinct HTML, CSS, and JavaScript files. I was impressed that you called an API to get questions for your trivia game!

## Creativity and Interface

Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

- The design is minimalist and clean. I thought the overall design was neat. As a next step, consider making your game display a winning message when the total score is above a certain value. Consider supporting multiple players in your game.

- Consider making your app mobile-responsive!

## Functionality

Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

- The application works with few errors or bugs. The `I got it right` button does not work for the `$200`, `$300`, `$400`, and `$500` questions, because the click handlers are not set up correctly, which means the player will always see a `$100` question regardless of which price category is selected. Take a look at the click handlers I removed from your `js` file, as they are technically not being applied to the page. 

## Presentation

Is there adequate documentation? Is the repository well organized and free of clutter?

- Your readme contains relevant information about the application, but the wireframes appear to be missing. To make it even more informative, consider adding the live url for your game and other sections such as wireframes and installation instructions. See these examples: https://github.com/esin87/travelogue or https://github.com/esin87/StarTrek_TNG_Trivia_Game

## Additional Feedback

- Take a look at some of my inline comments on your code. You can find my comments by searching for "Hou comment:".
