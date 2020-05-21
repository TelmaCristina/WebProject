import React from 'react';
import ReactDOM from 'react-dom';
//import the Link component to use for linking prop information
import { Link } from 'react-router-dom';
import './app.css';

// define one single recipe card component
class Recipe extends React.Component {
  render() {
    return (
      <div className="column is-one-third" style={{ padding: "20px" }}>
        <div className="card small" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-3by3">
              <img alt="Recipe" src={this.props.image} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-5 has-text-primary">{this.props.title}</p>
                <hr/>
                <p className="subtitle is-size-6">{this.props.ingredients}</p>
                {/*delete the prop with requested id from the function invoked in the parent component*/}
                <button className="button is-danger" style={{backgroundColor:'green'}} type="button" onClick={() => {this.props.handleDelete(this.props.id);}}>
                  Delete
                </button>
                {/*load the NewRecipe component via React Router and send the id over to the NewRecipe component*/}
                <Link to={`/edit-recipe/${this.props.id}`}>
                  <button className="button is-primary" style={{backgroundColor:'turquoise'}} type="button">
                  Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
