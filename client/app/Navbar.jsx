import React from 'react';
import {render} from 'react-dom';

class Navbar extends React.Component{ // WIP, please disregard
    constructor(props){
        super(props);
        
        this.imgPath = "img/"
    }
    
    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top navbar-custom">
                    <div className="container">
                        
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-navigation" aria-expanded="false">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand nav-item-custom" href="index.html"><img src={this.imgPath + "gg_logo_small.png"}></img>Home</a>
                        </div>
                
                        
                        <div className="collapse navbar-collapse" id="primary-navigation">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="recruitment.html" className="nav-item-custom">Apply</a></li>
                                <li><a href="#" className="nav-item-custom">Gallery</a></li>
                                <li><a href="#" className="nav-item-custom">Resources</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    
}

export default Navbar;