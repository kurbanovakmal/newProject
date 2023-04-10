import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import './iteam-list.css'
import Spiner from '../spiner/spiner'

export default class ItemList extends Component {
   
    state = {
        personlist: null,
        
    }

    componentDidMount() {
        const {getDate} = this.props
        getDate()
        .then((personlist) => {
            this.setState({
                personlist
            })

        })

    } 

  

    List (arr) {
        return arr.map((person, id) => {
            return (
                <li className='list-group-item' key={id + 1} onClick={() => this.props.personSelected(id + 1)}
                                        ><a href='#' className='li'>{person.name}</a></li>
            )
        })
    }

    

    render() {
        const {personlist} = this.state
        if (!personlist) {
            return <Spiner />;
          }
        
        const items = this.List(personlist)
        return (
            <div className='persons'>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>
        )
    }
} 