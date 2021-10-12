import React, {Component} from "react"
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import './person-list.css';
import DisplayError from "../onError"

class ErrBoundary extends Component{
    state = {
        areError: false
    }
    componentDidCatch(error, errorInfo) {
    this.setState({areError:true})
    }

    render() {
        if (this.state.areError) {
            return <DisplayError/>
        }

    return this.props.children;
}
}
export default class PersonList extends Component {

    frame = ({left, right}) => {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                      {right}
                </div>
            </div>)
    }


    render() {
        let {personId, onSelectItem, getData, renderItem} = this.props;

        let item = (<ItemList onSelectItem={onSelectItem}
                              getData={getData}
                              renderItem={renderItem}/>)
        let secondItem = (<PersonDetails personId={personId}/>)

        return (
            <ErrBoundary>
            <this.frame left={item} right={secondItem}/>
            </ErrBoundary>
            )
    }
}