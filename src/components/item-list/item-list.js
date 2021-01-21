import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";
import ErrorButton from "../ErrorButton";
export default class ItemList extends Component {

    state = {
        itemList: null
    }
    componentDidMount() {
            let {getData} = this.props;
        getData()
            .then((itemList) => {
                    this.setState((state)=>{return{itemList:itemList}})
                }
            );
    }


    renderItems(data) {

       let temp = data.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    onClick={()=>this.props.onSelectItem(id)}
                    key={id}
                    >
                    {name}
                </li>
            );
        });
        return temp;
    }

    render() {
        let {itemList} = this.state;
        let temp = !itemList ? <Spinner/>: this.renderItems(itemList)
        return (
            <ul className="item-list list-group">
                {temp}
                <li className="list-group-item">
                <span><ErrorButton/></span>
                </li>
            </ul>
        );
    }
}
