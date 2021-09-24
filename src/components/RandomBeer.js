import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function RandomBeer() {

  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    async function getRandomBeer() {
      const randomIndex = Math.floor(Math.random() * (48 - 1 ) + 1);
      let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
      setRandomBeer(response.data[randomIndex])
    } getRandomBeer();
  }, [])

  return(
    <>
    <Navbar />
      <div style={{
        display:'flex',
        margin: '2rem',
        flexDirection: 'column'
      }}>
        <h3>{randomBeer.name}</h3>
        <h5>-- "{randomBeer.tagline}"</h5>
      <section style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <img src={randomBeer.image_url} alt={randomBeer.name} style={{
          maxHeight: '200px'
        }}/>
        <ul>
          <li>Brew date: {randomBeer.brewdate}</li>
          <li>Attenuation Level: {randomBeer.a_level}</li>
          <li>Description: {randomBeer.description}</li>
          <li>Brewer: {randomBeer.by}</li>
        </ul>
      </section>
      </div>
      </>
  )
  
}

export default RandomBeer;

  // state = {
  //   name: '',
  //   image_url: '',
  //   tagline: '',
  //   brewdate: '',
  //   a_level: '',
  //   description: '',
  //   by: ''
  // }

  //   async componentDidMount() {
  //   const randomIndex = Math.floor(Math.random() * (48 - 1 ) + 1);
  //   let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
  //   console.log(response.data[randomIndex]);
  //   console.log(response.data[randomIndex].name);
  //   this.setState({
  //     name: response.data[randomIndex].name,
  //     image_url: response.data[randomIndex].image_url,
  //     tagline: response.data[randomIndex].tagline,
  //     brewdate: response.data[randomIndex].first_brewed,
  //     a_level: response.data[randomIndex].attenuation_level,
  //     description: response.data[randomIndex].description,
  //     by: response.data[randomIndex].contributed_by,

  //   })
  // }