import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import axios from 'axios';

import Navbar from './Navbar'


function AllBeers() {
  const [listOfBeers, setListOfBeers] = useState([]);

  useEffect(()=> {
    async function getListOfBeers() {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setListOfBeers(response.data)
    } getListOfBeers()
  }, []);

  const addBeer = (newBeer) => {
    const AddNewBeer = newBeer.concat(newBeer)
    setListOfBeers(AddNewBeer)
  }

  return(
    <>
      <Navbar func_addBeer={addBeer} />
        <ul>
          {listOfBeers.map((beer, index) => {
            return(
              <div key= {index}
                style= {{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%'

                }}>
                <NavLink to={`beers/${beer._id}`}>{beer.name}</NavLink>
                <section style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <img src={beer.image_url} alt={beer.name} style= {{
                    maxheight: '250px',
                    maxWidth: '10%'
                  }}/>
                  <ul>
                    <li>{beer.tagline}</li>
                    <li>{beer.description}</li>
                    <li>{beer.contributed_by}</li>
                  </ul>
                </section>
              </div>
            )
          })}
        </ul>
    </>
  )

}
export default AllBeers;
