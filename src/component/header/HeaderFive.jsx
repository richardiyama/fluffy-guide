import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import axios from 'axios';


class HeaderFive extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
           
            standardservices:[],
            headers:[]
           
           

        };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    componentDidMount() {
       
        this.StandardserviceList();
        this.HeaderList();
       
      }

      HeaderList(){
        axios.get('http://localhost:8000/api/headers/').then(res => res.data)
        .then(res => {
            this.setState({
                headers: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }

      StandardserviceList(){
        axios.get('http://localhost:8000/api/standardservices/').then(res => res.data)
        .then(res => {
            this.setState({
                standardservices: res.data
            });
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }

    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        
        const { logo, color , headerPosition } = this.props;
        let logoUrl;
                       {this.state.headers.map(header => 
          logoUrl =  <img key={header.id} src={`http://eaz-roc.ng/images/header/${header.logo_image}`} alt="logo" />)}
      /*  }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Trydo" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Trydo" />;
        }else if(logo === 'all-dark'){
            logoUrl = <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo" />;
        } else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Trydo" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Trydo" />;
        }*/
        
        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="header-left">
                                    <div className="logo">
                                        <a href="/">
                                            {logoUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-9 col-md-8 col-6" >
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu">
                                        <li><Link to="/about" >About</Link></li>
                                        
                                            <li className="has-droupdown"><Link to="/#" >Service</Link>
                                            
                                                <ul className="submenu" >
                                                {this.state.standardservices.map(standard =>
                                                    <li key={standard.id} ><Link to={`${standard.services_details}/${standard.id}`}>{standard.title} </Link></li>
                                                    )}
                                                </ul>
                                               
                                            </li>
                                            
                                            
                                           
                                            
                                            <li><Link to="/contact" >Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="header-btn">
                                        <a className="rn-btn" href="#">
                                            <span>Schedule A Consultation Now</span>
                                        </a>
                                    </div>
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderFive;