import React, {Component} from 'react';
import "./Preloader.css"

class Preloader extends Component {
    render() {
        const color = this.props.color ;
        return (
            <div>
             <div style={{backgroundColor:color}} className={'preloader'}></div>
            </div>
        );
    }
}

export default Preloader;