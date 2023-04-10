import React, { Component } from "react"
import HeaderList from "../header/header"

import RandomPlanet from "../random-planet/random-planet"
import SwapiService from "../../services/swapi-service"
import './App.css'
import PeaoplePages from "../people-pages/people-pages"

     
export default class App extends Component  {
  swapiServis = new SwapiService()
  state = {
    ShowRandomPlanet: true
  }
  
  ToggleRandomPlanet = () => {
    this.setState({
      ShowRandomPlanet: !this.state.ShowRandomPlanet
    })
  }


    render() {

      const planet = this.state.ShowRandomPlanet ? <RandomPlanet /> : null

      return (
        <div>
          <HeaderList />
          
          {planet}
          <div className="btn-toggle" >
            <button type="button" className="btn btn-light" onClick={()=>this.ToggleRandomPlanet()}>ToggleRandomPlanet</button>
          </div>
          <div className="person">
            <PeaoplePages />
          </div>

        </div>
      )
  }
}

