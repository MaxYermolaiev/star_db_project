import React,{Component} from 'react';
import engine from "../../engine/engine";
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from "../ErrorButton";
import './app.css';
import PersonList from "../person-list"
import ItemList from "../item-list";
import PersonDetails from '../person-details';
export default class  App extends Component{
    Engine = new engine();
    state={
        toogleRandomPlanet:true,
        selectedPerson:5,
    }
    toogleRandomPlanet=()=>{
        this.setState({toogleRandomPlanet:!this.state.toogleRandomPlanet}
        )
    }
    onSelectItem=(selectedPerson,type)=>{
        this.setState({selectedPerson})

}

    render() {

        let tooglePlanet= this.state.toogleRandomPlanet ? <RandomPlanet/>:null;
        return ( <div>
            <Header />
            {tooglePlanet}
            <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toogleRandomPlanet}>
                toogleRandomPlanet
            </button>
            <ErrorButton/>
           <PersonList
               getData={this.Engine.getAllPeoples()}
           />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.Engine.getAllPlanets} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.Engine.getAllStarships} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        </div>);
    }
}
