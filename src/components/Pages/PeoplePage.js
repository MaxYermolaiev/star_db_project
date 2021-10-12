import React from 'react';
import {PersonList} from "../sw-component";
import {withRouter} from 'react-router-dom';

let PeoplePage = ({history}) => {
    let onSelectItem =  (itemId)=>{history.push(`/People/${itemId}`)}
    return (
        <div>
            <div className="stardb-app">
                <PersonList onSelectItem={onSelectItem}/>}
            </div>

        </div>
    );

}
 PeoplePage = withRouter(PeoplePage);
export {PeoplePage}