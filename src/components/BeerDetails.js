import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function BeerDetails({ match }){
  const [beerDetails, setBeerDetails] = useState({});

  useEffect(() => {
    async function getBeerDetails() {
      const beerId = match.params.id;
      const beerFromAPI = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        console.log(beerFromAPI.data);
        setBeerDetails(beerFromAPI.data);
    } getBeerDetails();
  }, [])

    return(
      <>
      <Navbar />
      <div style={{marginTop:100, display:'flex', flexDirection:'column', alignItems:'center', alignContent:'center'}}>
      <img src={beerDetails.image} alt="beer" style={{width:'50px', height:'120px'}}/>
        <h2> {beerDetails.name} </h2>
        <h3> {beerDetails.tagline}</h3>
        <p> <strong> Created by:</strong> {beerDetails.contributed_by}</p>
        <p> <strong> Attenuation Level:</strong> {beerDetails.attenuation_level}</p>
        <p> <strong> First brewed:</strong> {beerDetails.first_brewed}</p>
        <p style={{maxWidth:400}} > {beerDetails.description}</p>
      </div>
            </>
        )
}


export default BeerDetails;

    // async componentDidMount() {
    //     const beerId = this.props.match.params.id;
    //     const beerFromAPI = await axios.get(
    //         `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    //     );
    //     console.log(beerFromAPI.data);
    //     this.setState({
    //         image: beerFromAPI.data.image_url,
    //         name: beerFromAPI.data.name,
    //         tagline: beerFromAPI.data.tagline,
    //         first_brewed: beerFromAPI.data.first_brewed,
    //         attenuation_level: beerFromAPI.data.attenuation_level,
    //         description: beerFromAPI.data.description,
    //         contributed_by: beerFromAPI.data.contributed_by
    //     })
    //     }    