import { useState } from 'react'

import {puppyList} from './data.js'

import './App.css'

import './puppy.css'

function App() {
  
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [featuredPup, setFeaturedPup] = useState(null)

  console.log(puppies)
  return 
  <>
  <div>
    {puppies.map((puppy) => {
      return <p onClick = { () => {
        setFeaturedPup(puppy)
        setFeatPupId(puppy.id)}
      } key = {puppy.id} > {puppy.name} </p>

      } )

    }

    { featuredPup && <p>{ featPupId }</p>
    {featPupId && (
      <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
    )}
    
  </div>

  </>
    }


export default App;

