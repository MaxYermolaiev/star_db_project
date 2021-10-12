import React from 'react';
import {Redirect} from 'react-router-dom'


let SecretPage = ({isLoginned,local}) => {
console.log(isLoginned,local)
    if (isLoginned||local) {
        return (
            <div>
                <div className="jumbotron text-center">
                    Page full of secrets
                </div>
            </div>
        );
    }
    return <Redirect to="/Login"/>


}

export {SecretPage}