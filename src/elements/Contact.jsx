import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandOne from "../elements/Brand";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
          
        };
       
    }
    
    componentDidMount() {
        this.ContactLists();
       
      }
      

    ContactLists(){
        axios.get('http://localhost:8000/api/contactuss/').then(res => res.data)
        .then(res => {
            this.setState({
                items: res.data
            });
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            {this.state.items.map(item =>
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">{item.breadcrumbarea.title}</h2>
                                    <p>{item.breadcrumbarea.content}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                      {this.state.items.map(item =>
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">{item.contacttoparea.phone_title}</h4>
                                        <p><a href="tel:+234 810 736 8146">{item.contacttoparea.phone_number_one}</a></p>
                                        <p><a href="tel:+856 325 652 984">{item.contacttoparea.phone_number_two}</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">{item.contacttoparea.email_title}</h4>
                                        <p><a href="mailto:admin@gmail.com">{item.contacttoparea.email_one}</a></p>
                                        <p><a href="mailto:example@gmail.com">{item.contacttoparea.email_two}</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                        )}
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <ContactTwo />
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  */}
                {this.state.items.map(item => 
                <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={item.maparea.map_latitude}
                                lng={item.maparea.map_longitude}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                )}
                {/* End Contact Map  */}


              
                {/* Start Brand Area  */}
                <div className="rn-brand-area ptb--120 bg_color--1">
                    <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                        <h3 className="title">SOME OF OUR BUSINESS PARTNERS</h3>

                    </div>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                                <BrandOne branstyle="branstyle--2" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* End Brand Area  */}


                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* Start Footer Style  */}
                <Footer />
                {/* End Footer Style  */}

            </React.Fragment>
        )
    }
}
export default Contact