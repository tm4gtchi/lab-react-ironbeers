import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    name: '',
    image_url: '',
    tagline: '',
    brewdate: '',
    a_level: '',
    description: '',
    by: ''
  }

  async componentDidMount() {
    const randomIndex = Math.floor(Math.random() * (48 - 1 ) + 1);
    let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    console.log(response.data[randomIndex]);
    console.log(response.data[randomIndex].name);
    this.setState({
      name: response.data[randomIndex].name,
      image_url: response.data[randomIndex].image_url,
      tagline: response.data[randomIndex].tagline,
      brewdate: response.data[randomIndex].first_brewed,
      a_level: response.data[randomIndex].attenuation_level,
      description: response.data[randomIndex].description,
      by: response.data[randomIndex].contributed_by,

    })
  }
  render() {
    const { 
      image_url, 
      name, 
      tagline, 
      brewdate, 
      a_level, 
      description,
      by
      } = this.state
    return (
      <>
      <div style={{
        display:'flex',
        margin: '2rem',
        flexDirection: 'column'
      }}>
        <h3>{name}</h3>
        <h5>-- "{tagline}"</h5>
      <section style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <img src={image_url} alt={name} style={{
          maxHeight: '200px'
        }}/>
        <ul>
          <li>Brew date: {brewdate}</li>
          <li>Attenuation Level: {a_level}</li>
          <li>Description: {description}</li>
          <li>Brewer: {by}</li>
        </ul>
      </section>
      </div>
      </>
    )
  }
}

export default RandomBeer;