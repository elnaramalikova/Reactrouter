import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import Web from "./task1/Web";
import Design from "./task1/Design";
import Graphic from "./task1/Graphic";
import Seo from "./task1/Seo";
import Support from "./task1/Support";
import Marketing from "./task1/Marketing";
import "./task1/App.scss"
import Preloader from "./Preloader";
import "./Preloader.css";
class App extends Component {
    render() {
        return (
            <>
                {/*<ul className ="tabs">*/}

                {/*    <li><Link to={'/webdesign'}>Web</Link></li>*/}
                {/*    <li><Link to={'/graphicdesign'}>Graphic</Link></li>*/}
                {/*    <li><Link to={'/onlinesupport'}>Support</Link></li>*/}
                {/*    <li><Link to={'/appdesign'}>Design</Link></li>*/}
                {/*    <li><Link to={'/onlinemarketing'}>Marketing</Link></li>*/}
                {/*    <li><Link to={'/seoservices'}>Seo</Link></li>*/}
                {/*</ul>*/}
                {/*<Route path={'/webdesign'} component={Web}/>*/}
                {/*<Route path={'/graphicdesign'} component={Graphic}/>*/}
                {/*<Route path={'/onlinesupport'} component={Support}/>*/}
                {/*<Route path={'/appdesign'} component={Design}/>*/}
                {/*<Route path={'/onlinemarketing'} component={Marketing}/>*/}
                {/*<Route path={'/seoservices'} component={Seo}/>*/}
                <Preloader/>
            </>

        );
    }
}

export default App;

















// import React, {Component} from 'react';
// import Preloader from "./Preloader";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Preloader/>
//                 <Preloader/>
//                 <Preloader/>
//             </div>
//         );
//     }
// }
//
// export default App;