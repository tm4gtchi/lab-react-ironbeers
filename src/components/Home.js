import React from 'react';
import {NavLink} from 'react-router-dom';

function Home() {
    return(
        <div style={{marginTop:150, display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
           <div> 
            <h1> <NavLink to='/allbeers'> All Beers  </NavLink> </h1>
            <p> View Beer List</p>
          </div>

          <div>
            <h1> <NavLink to='/randombeer'> Random Beer </NavLink> </h1>
            <p> I'm feeling lucky </p>
          </div>
            
          <div> 
            <h1> <NavLink to='/newbeer'>New Beer</NavLink> </h1>
            <p> Add your beer </p>
          </div>
        </div>
    )
}

export default Home;
