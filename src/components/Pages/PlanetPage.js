import React,{Component} from 'react';
import { PlanetList, PlanetDetails} from "../sw-component";
import Row from "../row";
import{withRouter} from 'react-router-dom'
import {PeoplePage} from "./PeoplePage";
class ErrorBoundary extends Component {
    state = {ErrorExist: false}
    componentDidCatch(error, errorInfo) {
        this.setState({ErrorExist: !this.state.ErrorExist})
    }
    render() {return this.props.children}
}

/*
 class PlanetPage extends Component{
    state = {
        selectedPlanet: 1
    }

    onSelectItem = (selectedPlanet) => {
        this.setState({selectedPlanet})
    }

    render() {
        return (
            <div>
                <ErrorBoundary>
                        <div className="stardb-app">
                            <Row left={<PlanetList onSelectItem={this.onSelectItem}/>}
                                 right={<PlanetDetails itemId={this.state.selectedPlanet}/>}/>
                        </div>
                </ErrorBoundary>
            </div>
        );
    }
}
export {PlanetPage};
*/

let PlanetPage =({history,match})=> {


    let {id} = match.params;
        return (
            <div>
                <ErrorBoundary>
                    <div className="stardb-app">
                        <Row left={<PlanetList onSelectItem={(id)=>history.push(`Planet/${id}`)}/>}
                             right={<PlanetDetails itemId={id}/>}/>
                    </div>
                </ErrorBoundary>
            </div>
        );
}
PlanetPage = withRouter(PlanetPage);
export {PlanetPage}


