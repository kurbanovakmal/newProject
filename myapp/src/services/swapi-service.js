import { Component } from "react"


export default class SwapiService extends Component {

    _apiBase = 'https://swapi.dev/api/'
    _apiBase2 = 'https://starwars-visualguide.com/assets/img/planets/'
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`)
  
      if(!res.ok) {
        throw new Error(`Could not fetch  ${url}` + 
        `received ${res.status}`)
      }
      return await res.json()
    }


  
    getAllpeople = async () => {
      const res = await this.getResource('/people/')
      return res.results
  
    }
    getPerson = async (id) => {
      const res = this.getResource(`/people/${id}/`)
      return res
    }
  
    getAllStarships = async () => {
      const res = await this.getResource('/starships/') 
      return res.results

    }
    getStarships = async (id) => {
      const res = this.getResource(`/starships/${id}/`)
      return res
    }
  
    getAllPlanets = async () => {
      const res = await this.getResource('/planets/')
      return res.results.map(this.TransforPlanet)
  
    }
    getPlanet = async (id) => {
      const res = await this.getResource(`/planets/${id}/`)
      return this.TransforPlanet(res)
    }
    _regExp = (item) => {
      const id = /\/([0-9]*)\/$/
      return item.url.match(id)[1]
    }

    TransforPlanet = (planet) => {
      return {
        id: this._regExp(planet),
        name: planet.name,
        populations: planet.population,
        RotetionPeriod: planet.rotation_period,
        Diametr: planet.diameter
      }
    }
  
  }







  
  

  

