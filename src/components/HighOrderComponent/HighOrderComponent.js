import React,{Component} from "react";
import Spinner from "../spinner";
let displayItems = (View) => {
    return class extends Component {
        state = {data: null}
        componentDidMount() {this.updateRenderList()}
        componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.getData!==prevProps.getData){
                this.updateRenderList();
            }
        }

        updateRenderList(){
                this.props.getData().then((data) => {
                    this.setState({data:data})
                })
            }
        render() {
            let {data} = this.state;
            if (!data) return <Spinner/>
            return (<View {...this.props} data={data}/>)
        }
    }
}
export default displayItems;