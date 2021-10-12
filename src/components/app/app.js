import React, {Component} from 'react';
import engine from "../../engine/engine";
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {Provider} from '../engine-context'
import testEngine from "../../testEngine/testEngine";
import {PeoplePage,PlanetPage,Login,SecretPage} from "../Pages"
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import {PersonDetails, PlanetDetails} from '../sw-component'

class ErrorBoundary extends Component {
    state = {ErrorExist: false}

    componentDidCatch(error, errorInfo) {
        this.setState({ErrorExist: !this.state.ErrorExist})
    }

    render() {
        return this.props.children
    }
}

export default class App extends Component {
    state = {
        toogleRandomPlanet: true,
        selectedPerson: 2,
        selectedShip: 12,
        selectedPlanet: 1,
        datas: new engine(),
        logined:false
    }
    onLogin=()=>{
        this.setState({logined:true})
        localStorage.setItem('logined',true)
    }
    onEngineChange = () => {
        this.setState(({datas}) => {
            let service = (datas instanceof engine) ? testEngine : engine;
            return {datas: new service()}
        })
    }
    toogleRandomPlanet = () => {
        this.setState({toogleRandomPlanet: !this.state.toogleRandomPlanet}
        )
    }
    onSelectItem = (selectedPerson) => {
        this.setState({selectedPerson})
    }

    render() {
        let tooglePlanet = this.state.toogleRandomPlanet ? <RandomPlanet updateInterval={2000}/> : null;
        let {logined} = this.state
        let local=localStorage.getItem('logined')
        return (
            <div>
                <ErrorBoundary>
                    <Provider value={this.state.datas}>
                        <Router>
                            <Header onEngineChange={this.onEngineChange}/>
                            {tooglePlanet}
                            <button className="toggle-planet btn btn-warning btn-lg"
                                    onClick={this.toogleRandomPlanet}>Toggle Random Planet
                            </button>
                            <div className="stardb-app">
                                <Switch>
                                <Route path="/" exact render={() => <h2>Wellcome</h2>}/>
                                <Route path="/Planet/:id?" exact component={PlanetPage}/>

                                <Route path="/Login" exact render={()=><Login
                                    isLoginned={logined}
                                    onlogin={this.onLogin}
                                />}/>
                                <Route path="/SecretPage" exact render={()=><SecretPage
                                isLoginned={{logined,local}}

                                />}/>

                                <Route path="/People" exact component={PeoplePage}/>
                                <Route path="/People/:id" exact render={(match) =>{
                                    let {id} = match.match.params;
                                    return(<PersonDetails itemId={id}/>)
                                }}/>
                                
                                <Redirect to='/'/>
                                </Switch>
                            </div>

                        </Router>
                    </Provider>
                </ErrorBoundary>
            </div>
        );
    }
}


/*
<StarshipPage/>
export {PersonDetails,PlanetDetails} from '../sw-component'
                                 right={<PersonDetails itemId={this.state.selectedPerson}/>}/>
 */