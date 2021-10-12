import React, {Component} from 'react';
import './item-list.css';
import ErrorButton from "../ErrorButton";
import DisplayError from "../onError"


class ErrorBoundary extends Component {
    state = {ErrorExist: false}

    componentDidCatch(error, errorInfo) {
        this.setState({ErrorExist: !this.state.ErrorExist})
    }

    render() {
        if (this.state.ErrorExist) {return <DisplayError/>}
        return this.props.children
    }
}

let ItemList = (props) => {
    let {data,onSelectItem,children:renderItem} = props;

    let transformedData = data?data.map((item) => {
        let {id} = item;
        let label = renderItem(item)
        return (
            <li className="list-group-item" onClick={() => onSelectItem(id)} key={id}>
                {label}
            </li>
        );
    }):null;

    return (
        <ErrorBoundary>
        <ul className="item-list list-group">
            {transformedData}
            <li className="list-group-item">
                <span><ErrorButton/></span>
            </li>
        </ul>
        </ErrorBoundary>
    );
}

ItemList.defaultProps={onSelectItem:()=>{}}
export default ItemList;
