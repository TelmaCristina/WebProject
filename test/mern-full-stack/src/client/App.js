import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateRecipe from './CreateRecipe';
import EditRecipe from './EditRecipe';
import RecipeList from './RecipeList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={RecipeList}/>
        {/*pass the id through the EditRecipe component*/}
        <Route path="/edit-recipe/:id" component={EditRecipe}/>
        {/*set the path to create a new recipe to CreateRecipe component*/}
        <Route path="/create-recipe" component={CreateRecipe}/>
      </div>
    </HashRouter>
  );
};

export default App;
