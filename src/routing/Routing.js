 import React from "react";
import {Consumer} from "../engine-context";


let Wrapper = (MethodsServise)=>(Wraped) => {
    return (props) => {
        return (
            <Consumer>{(Engine) => {
                const methods = MethodsServise(Engine)
                return (<Wraped {...props} { ...methods}/>)
            }}</Consumer>
        )
    }
}
export default Wrapper;
