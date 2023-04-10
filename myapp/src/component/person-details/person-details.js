import React, { Component } from "react";

import './person-details.css'
import SwapiService from "../../services/swapi-service";
import Spiner from "../spiner/spiner";


export default class PersonDetail extends Component {

    swapiServesPerson = new SwapiService()
    
    state = {
        person: null,
        loading: true,
    }


    componentDidMount () {
        this.UpdatePerson()
    }

    componentDidUpdate(PrevProps) {
        if(PrevProps.personId != this.props.personId) {
            this.UpdatePerson()
        }
    }
    

    UpdatePerson () {
        const { personId } = this.props
        if(!personId) {
            return 
        }
        this.setState({loading:true})
        this.swapiServesPerson
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person:person,
                    loading: false,
                })
            })

    }




    
    render () {   
        const {person, loading} = this.state
        const {personId, active, closeModal} = this.props
        if(person != null) {
            person.id = personId
        }

        const clazz = active ? 'modal' : "modal-body"
        const body = !loading ? <PersonView person={person} closeModal = {closeModal}/> : null
        const loading2 = loading ?  <Spiner/> : null 
        if(!this.state.person) {
            return (
                <div className="modal-body"></div>
            )
        }
        return (
        <div className={clazz}  >
            <div className="modal-content">
                <div className="btn-close" onClick={closeModal} >
                    <button type="button" className="btn btn-light">X</button>
                </div>
                {body}
                <div className="spiner">
                    {loading2}
                </div>
            </div>
        </div>

        )
    }
}

const PersonView = ({person}) => {
    const { name, gender, birth_year, eye_color, id} = person

  
    return(
        <React.Fragment>

            <img src={`https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`} className="img"/>
            <div className="details">
                <h3 className="h3">{ name }</h3>
                <ul className="ist-group list-group-flush detail-content">
                    <li className="list-group-item date-list">Gender { gender }</li>
                    <li className="list-group-item date-list">Birth Year { birth_year } </li>
                    <li className="list-group-item date-list">Eye Color { eye_color }</li>
                </ul>
            </div>
        </React.Fragment>
    )
}


