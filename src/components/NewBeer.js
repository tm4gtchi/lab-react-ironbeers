import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributor] = useState("");
  const history = useHistory()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by
    }
    await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body);
    console.log("beer added")
    history.push("/allbeers");
  }

    return( 
     <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
          <input 
          type="text"
          name="name"
          onChange={(e)=> setName(e.target.value)}
          value={name} />
          
        <label htmlFor="tagline">Tagline</label>
          <input 
          type="text" 
          name="tagline" 
          onChange={(e)=> setTagline(e.target.value)}
          value={tagline}/>

        <label htmlFor="description">Description</label>
          <input 
          type="text" 
          name="description" 
          onChange={(e)=> setDescription(e.target.value)}
          value={description}/>
        
        <label htmlFor="first_brewed">First Brewed</label>
          <input type="text"
          name="first_brewed"
          onChange={(e)=> setFirstBrewed(e.target.value)}
          value={first_brewed}/>

        <label htmlFor="brewers_tips">Brewer Tips</label>
          <input 
          type="text" 
          name="brewers_tips"
          onChange={(e)=> setBrewerTips(e.target.value)}
          value={brewers_tips}/>

        <label htmlFor="attenuation_level">Attenuation Level</label>
          <input 
          type="number" 
          name="attenuation_level"
          onChange={(e)=> setAttenuationLevel(e.target.value)}
          value={attenuation_level}/>

        <label htmlFor="contributor_name">Contributor Name</label>
          <input
          type="text"
          name="contributed_by"
          onChange={(e)=> setContributor(e.target.value)}
          value={contributed_by}/>

          <button type="submit">Add New Beer</button>
      </form>
     </>
    )
}

export default NewBeer;