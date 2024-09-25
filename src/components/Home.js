import React from 'react'


import Header from "./Header.js"
import Tournaments from "./Tournaments.js"
import FeaturedTeams from "./FeaturedTeams.js"
import Content from "./Content.js"

const Home = () => {
    

  return (
    <div>
              <Header/>
              <Tournaments/>
              <FeaturedTeams/>
              <Content/>
          
      
    </div>
  )
}

export default Home
