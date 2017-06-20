import React from 'react';

class Navbar extends React.Component{ // WIP, please disregard
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <nav class="navbar navbar-inverse navbar-fixed-top navbar-custom">
                    <div class="container">
                        //Brand and toggle get grouped for better mobile display
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-navigation" aria-expanded="false">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand nav-item-custom" href="index.html"><img src="../img/gg_logo_small.png"></img>Home</a>
                        </div>
                
                        //Collect the nav links, forms, and other content for toggling
                        <div class="collapse navbar-collapse" id="primary-navigation">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="recruitment.html" class="nav-item-custom">Apply</a></li>
                                <li><a href="#" class="nav-item-custom">Gallery</a></li>
                                <li><a href="#" class="nav-item-custom">Resources</a></li>
                            </ul>
                        </div>//.navbar-collapse
                    </div>//.container-fluid
                </nav>
            </div>
        );
    }
    
}