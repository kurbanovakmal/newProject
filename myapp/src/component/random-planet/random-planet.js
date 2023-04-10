
import React from "react";
import { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Erorindicator from "../error-indicator/error-indicator";
import Spiner from "../spiner/spiner";

import './random-planet.css'
export default class RandomPlanet extends Component {
    planets = new SwapiService()
    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount () {
        this.Update()
        this.interval = setInterval(this.Update, 5000)

    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    ErrorMessage = (err) => {
        this.setState({
            error: true,
            loading: false
            
        })
    }

    onPlanetloading = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    Update = () => {
        const id = Math.floor(Math.random()*17 +2)

        this.planets
            .getPlanet(id)
            .then(this.onPlanetloading)
            .catch(this.ErrorMessage)

        
    }

    render() {
        const {planet, loading, error} = this.state
        const hasDate = !(loading || error)
        const errorMessage = error ? <Erorindicator/> : null
        const loading1 = loading ? <Spiner/> : null
        const body = hasDate ? <PlanetView planet={planet}/> : null
        const clazz = hasDate ? 'conteniar' : 'conteniar1'
        return (
            <div className={clazz}>
                {loading1}
                {body}
                {errorMessage}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {name, populations, RotetionPeriod, Diametr, id} = planet
    return(
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h3>Planet Name: {name}</h3>
                <ul className="ist-group list-group-flush">
                    <li className="list-group-item ">populations: {populations}</li>
                    <li className="list-group-item ">RotetionPeriod: {RotetionPeriod}</li>
                    <li className="list-group-item ">Diametr: {Diametr}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}