import React, {Component} from 'react';
import {StrashipList,StrashipDetails} from "../sw-component";
import Row from "../row";

class ErrorBoundary extends Component {
    state = {ErrorExist: false}
    componentDidCatch(error, errorInfo) {
        this.setState({ErrorExist: !this.state.ErrorExist})
    }
    render() {return this.props.children}
}
 class StarshipPage extends Component{
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
                            <Row left={<StrashipList onSelectItem={this.onSelectItem}/>}
                                 right={<StrashipDetails itemId={this.state.selectedPlanet}/>}/>
                        </div>
                </ErrorBoundary>
            </div>
        );
    }
}
export {StarshipPage}