import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }

  handleChange = (event) => {
    let { name, value  } = event.target;
    this.setState ({
      [name]: value
    })
  }


 handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
    this.props.history.push('/');
  }
  render() {
    const { name, 
      tagline, 
      description, 
      first_brewed, 
      brewers_tips, 
      attenuation_level, 
      contributed_by } = this.state
    return( 
     <>
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name">Name</label>
          <input 
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name} />
          
        <label htmlFor="tagline">Tagline</label>
          <input 
          type="text" 
          name="tagline" 
          onChange={this.handleChange}
          value={tagline}/>

        <label htmlFor="description">Description</label>
          <input 
          type="text" 
          name="description" 
          onChange={this.handleChange}
          value={description}/>
        
        <label htmlFor="first_brewed">First Brewed</label>
          <input type="text"
          name="first_brewed"
          onChange={this.handleChange}
          value={first_brewed}/>

        <label htmlFor="brewers_tips">Brewer Tips</label>
          <input 
          type="text" 
          name="brewers_tips"
          onChange={this.handleChange}
          value={brewers_tips}/>

        <label htmlFor="attenuation_level">Attenuation Level</label>
          <input 
          type="number" 
          name="attenuation_level"
          onChange={this.handleChange}
          value={attenuation_level}/>

        <label htmlFor="contributor_name">Contributor Name</label>
          <input
          type="text"
          name="contributed_by"
          onChange={this.handleChange}
          value={contributed_by}/>

          <button type="submit">Add New Beer</button>
      </form>
     </>
    )
  }
}

export default NewBeer;