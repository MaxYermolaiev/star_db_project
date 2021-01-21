import React,{Component} from "react"
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './person-list.css';
import DisplayError from "../onError"


export default class PersonList extends Component{
    state={
        areError:false
    }
    componentDidCatch(){this.setState({areError:true})}
    render() {
        let {personId, onSelectItem}=this.props;
    if(this.state.areError){return<DisplayError/>}
        return (
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onSelectItem={onSelectItem}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={personId}/>
                    </div>
                </div>
        )
    }
}