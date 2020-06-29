import React from 'react';
import {Route} from "react-router";

const Content = props => {
    const routes = props.pathItems.map((pI, ind) => {
        if(pI.toLowerCase() === 'home') {
            return <Route path={'/'} exact render={() => <h1>{pI}</h1>}/>
        } else {
            return <Route path={`/${pI.toLowerCase()}`} render={() => <h1>{pI}</h1>}/>
        }
    });

    return (
        <div>
            {routes}
            {/*  3 routes:
       - home
       - contacts
       - items*/}
        </div>
    );
};

export default Content;
