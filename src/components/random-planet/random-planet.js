import React, {Component} from 'react';
import engine from "../../engine/engine";
import './random-planet.css';
import Spinner from '../spinner';
import DisplayError from '../onError';
import PageView from './PageView'

export default class RandomPlanet extends Component {
    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        let timer = setInterval(this.updatePlanet, 8000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    Engine = new engine();
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, error: false}
        );
    };
    onError = (err) => {
        this.setState({error: true, loading: false})
    }

    updatePlanet = () => {
        const id = this.randomInteger(0, 10);
        this.Engine
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }


    render() {

        let {planet, loading, error} = this.state;
        let hasData = !(loading || error);
        let spinner = (loading) ? <Spinner/> : null;
        let data = (hasData) ? <PageView planet={planet}/> : null;
        let errorMesage = (error) ? <DisplayError/> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {data}
                {errorMesage}
            </div>
        );
    }
}
