import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class NewBeer extends React.Component {
  render() {
    return( 
     <>
      <form to="/newbeer" method="POST">
        <label htmlFor="name">Name</label>
          <input type="text" placeholder="name" />
          
        <label htmlFor="tagline">Tagline</label>
          <input type="text" placeholder="tagline" />
        
        <label htmlFor="first brewed">First Brewed</label>
          <input type="text" placeholder="first brewed"/>

        <label htmlFor="Tips">Brewer Tips</label>
          <input type="text" placeholder="brewer tips"/>

        <label htmlFor="a_level">Attenuation Level</label>
          <input type="number" placeholder="attenuation level"/>

        <label htmlFor="contributor name">Contributor Name</label>
          <input type="text" placeholder="contributor name"/>

          <button type="submit">Add New Beer</button>
      </form>
     </>
    )
  }
}

export default NewBeer;