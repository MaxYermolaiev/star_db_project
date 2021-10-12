import React from 'react';


let Login = ({isLoginned,onlogin}) => {


    return (
        <div>
            <div className="jumbotron">
<button className="btn btn-primary" onClick={onlogin}>Login</button>
            </div>

        </div>
    );

}

export {Login}