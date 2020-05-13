import React, { Component } from 'react';
//import the Link component to handle React Router
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from 'axios';
import './app.css';
// import stylesheet 
//MAKE SURE TO INSTALL USING npm install bulma
import 'bulma/css/bulma.css';

// this component will handle all elements in the vegrecipes array
class RecipeList extends Component {
    constructor(props) {
        super(props);
        // store the vegrecipes array in the state
        this.state = { vegrecipes: [] };

        //this binding is necessary to make `this` work in the callback
        //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
        this.updateRecipes = this.updateRecipes.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // fetch all recipe data from the server when the component mounts
    componentDidMount() {
        this.updateRecipes();
    }

    //
    updateRecipes() {
        // get the vegrecipes API using axios GET request to the server 
        axios.get('api/vegrecipes')
            .then(response => {
                //store the response in the state
                this.setState({ vegrecipes: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleDelete(recipeID) {
        // make a DELETE request to the server which will handle the removal of the recipe with the specific recipeId
        axios
            .delete('api/vegrecipes', {
                data: {
                    id: recipeID
                }
            })
            .then(response => {
                //if the deletion was successful then re-render the list of vegrecipes
                this.updateRecipes();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        // produce a recipe component for each recipe object
        const recipeList = this.state.vegrecipes.map(u => (
            //map through each element in the array and set to the value received from the server
            <Recipe
                key={u._id}
                id={u._id}
                title={u.title}
                image={u.picture}
                quote={u.quote}
                //you must include the handleDelete method to use in child components
                handleDelete={this.handleDelete}
            />
        ));

        //return the list of vegrecipes
        return (
            
            <div className="is-fluid">
                {/*Navigation bar*/}
                <nav className="navbar">
                    <h1 className="navbar-item title is-1 has-text-primary">Recipe Notebook</h1>
                    {/*when this button is pressed, CreateRecipe component will be rendered by using React Router*/}
                    <Link to={'/create-recipe'} className="navbar-item navbar-end">
                        <button className="button is-warning" type="button">New Recipe</button>
                    </Link>
                </nav>
                <hr />
                {/*RECIPE LIST*/}
                <div>
                    <div className="columns is-multiline">
                        {recipeList}                        
                    </div>
                </div>
                {/*FOOTER*/}
                <footer className="footer has-background-primary">
                    <div className="content has-text-centered">
                        <p className="has-text-white-bis"><strong>Created by Telma</strong> styled with Bulma.</p>
                    </div>
                </footer>
            </div>

        );
    }
}

export default RecipeList;
