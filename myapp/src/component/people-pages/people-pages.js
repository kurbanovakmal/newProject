import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import PersonDetail from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

export default class PeaoplePages extends Component {

    swapiService = new SwapiService()
    
    state = {
        selectedPerson: null,
        active: true

    }

    // componentDidMount() {
    //     this.selectedPerson()
    // }


    onselectedPerson = (selectedPerson) => {
        this.setState({
            selectedPerson,
            active:true
        })
    }

    closeModal = () => {
        this.setState({active: false})
        console.log('1')

    }

    render() {
  
        return (
            <React.Fragment>
                <ItemList personSelected = {this.onselectedPerson}
                            getDate = {this.swapiService.getAllpeople} />
                <PersonDetail personId = {this.state.selectedPerson}
                              active = {this.state.active}
                              closeModal = {this.closeModal} />
            </React.Fragment >
        )
    }
}