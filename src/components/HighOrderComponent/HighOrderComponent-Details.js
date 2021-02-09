import React,{Component} from "react";
import Spinner from "../spinner";
let displayItems = (View,getData) => {
    return class extends Component {
        state = {data: null}
        componentDidMount() {
            getData().then((data) => {
                    this.setState({data:data})
            })}
        render() {
            let {data} = this.state;
            if (!data) return <Spinner/>
            return (<View {...this.props} data={data}/>)
        }
    }
}
export default displayItems;