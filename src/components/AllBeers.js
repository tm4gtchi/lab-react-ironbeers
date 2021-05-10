import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends React.Component {
  state = {
    listOfBeers: []
  }

  async componentDidMount() {
    let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    this.setState({
      listOfBeers: response.data
    })
  }

  addBeer = (newBeer) => {
    this.setState({
      listOfBeers: this.state.newBeer.concat(newBeer),
    })
  }

  render() {
    return(
      <>
        <ul>
          {this.state.listOfBeers.map((beer, index) => {
            return(
              <div key= {index}
                style= {{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%'

                }}>
                  <h3>{beer.name}</h3>
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
}

export default AllBeers;