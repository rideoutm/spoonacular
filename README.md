# Spoonacular Recipe Search App

To run this app locally...

1. Run `NPM i` in the terminal to download all necessary dependencies. With VS Code, the terminal can be opened with CTRL + SHIFT + `.

2. Enter `npm start` in the terminal, hit enter. A window should open in your browser at `localhost:3000/spoonacular` with the app available.

3. Please note that making MANY search requests may result in the Spoonacular API request quota being met, at which point the quota will reset back to 0 after 24 hrs.

## Technologies used

- React.js v18.2.0
- React Router v6.9
- Sass/SCSS v1.58.3
- Spoonacular API [https://spoonacular.com]

## Features

1. Dynamically generated URLs.

2. Hooks-based React SPA.

3. Entering a search term will generate a list of recipes related to the search. Each recipe is clickable and will direct to a details page, containing its name, an image of the recipe, health info, ingredients, and cooking instructions.

4. Search Input is URLencoded to prevent malicious code injection.

5. Search results can be filtered by region by checkbox.

6. The search results are stored in session storage and retrieved with useEffect. Search results will persist despite navigating to another page or browser refresh.

7. Dynamically generated pagination.

8. Fully responsive design for mobile, tablet, and desktop users.

## Bugs/Future Improvements

- Hitting the back button on the details page returns the user to the first page, instead of the last page visited with the pagination. This can likely be fixed with inputting the related values into useEffect.

- Periodically the search results can get hung up with only the pagination showing. Refreshing the page to trigger retrieving the results from session storage via useEffect shows the results. This is likely due to a timing issue between the async GET request and the component rendering. Adding a setTimeout to briefly delay setting the searchQuery state in the async getData function to allow the component to first load may solve this.

- A button to remove all checked boxes in the filter modal should be added as a "quality of life" improvement.
