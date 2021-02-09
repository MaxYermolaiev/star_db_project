import React, {Component} from 'react';
import engine from "../../engine/engine";
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {Provider} from '../engine-context'
import {PersonList, PlanetList, StrashipList, PersonDetails, PlanetDetails, StrashipDetails} from "../sw-component";
import testEngine from "../../testEngine/testEngine";
import Row from "../row";

class ErrorBoundary extends Component {
    state = {ErrorExist: false}
    componentDidCatch(error, errorInfo) {
        this.setState({ErrorExist: !this.state.ErrorExist})
    }
    render() {return this.props.children}
}
export default class App extends Component {
    state = {
        toogleRandomPlanet: true,
        selectedPerson: 2,
        selectedShip: 12,
        selectedPlanet: 1,
        datas: new engine()
    }

    onEngineChange=()=>{
        this.setState(({datas})=>{
        let service = (datas instanceof engine)?testEngine:engine;
        return{datas:new service()}
        })
    }
    toogleRandomPlanet = () => {
        this.setState({toogleRandomPlanet: !this.state.toogleRandomPlanet}
        )
    }
    onSelectItem = (selectedPerson) => {
        console.log(selectedPerson)
        this.setState({selectedPerson})
    }

    render() {
        let tooglePlanet = this.state.toogleRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <ErrorBoundary>
                    <Provider value={this.state.datas}>
                    <Header onEngineChange={this.onEngineChange}/>
                        {tooglePlanet}
                        <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toogleRandomPlanet}>Toggle Random Planet</button>
                        <div className="stardb-app">

                            <Row left={<PersonList onSelectItem={this.onSelectItem}/>}
                                 right={<PersonDetails itemId={this.state.selectedPerson}/>}/>
                            <Row left={<PlanetList onSelectItem={this.onSelectItem}/>}
                                 right={<PlanetDetails itemId={this.state.selectedPerson}/>}/>
                            <Row left={<StrashipList onSelectItem={this.onSelectItem}/>}
                                 right={<StrashipDetails itemId={this.state.selectedPerson}/>}/>

                        </div>
                    </Provider>
            </ErrorBoundary>
    </div>
    );
    }
    }


/*

 */