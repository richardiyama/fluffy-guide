import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import CallAction from "./callaction/CallAction";
import axios from 'axios';
import { Link } from "react-router-dom";
import BrandOne from "../elements/Brand";



class ServiceNine extends Component {

    constructor(props) {
        super(props)

        this.state = {


            title: '',
            description: '',
            standards: [],
            content_one: '',
            content_two: ''






        };

    }


    componentDidMount() {

        this.Standardservice();


    }

    Standardservice() {

        axios.get('http://eaz-roc.ng/api/standardservices/' + this.props.match.params.id).then(res => res.data)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    description: res.data.description,
                    standards: res.data.services,
                    content_one: res.data.column.content_one,
                    content_two: res.data.column.content_two



                });

            })
            .catch((error) => {
                console.log(error);
            })

    }


    render() {
        const { title, parent } = this.props;
        return (

            <React.Fragment>
                <PageHelmet pageTitle={this.state.title} />
                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="breadcrumb-area rn-bg-color ptb--120 pg_image businesssupport">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 className="title">{this.state.title}</h2>
                                    <ul className="page-list">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Home</Link></li>
                                        {parent ? <li className="breadcrumb-item">{parent}</li> : ''}
                                        <li className="breadcrumb-item active">{title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Breadcrump Area */}

                {/* Start Service Area */}

                <div className="service-area ptb--120 bg_color--5">

                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>{this.state.title}</h2>
                                    <p>{this.state.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Start Columns Area  */}
                        <div className="rn-columns-area ptb--120 bg_color--1">
                            <div className="container">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="single-column">

                                            <p>{this.state.content_one}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                        <div className="single-column">

                                            <p>{this.state.content_two}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* Start Columns Area  */}

                        <div className="section-title text-center mb--30">
                            <h2></h2>

                        </div>

                        <div className="row service-one-wrapper">



                            {this.state.standards.map(serve =>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={serve.id}>

                                    <div className="service service__style--2">
                                        <div className="icon">
                                            <FiCast />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{serve.title}</h3>
                                            <p>{serve.description}</p>
                                            <a className="btn-transparent rn-btn-dark" href="#"><span className="text">Schedule A Consultation Now</span></a>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className="about-button mt--50  col-md-6">
                                <a className="rn-button-style--2 btn-solid" href="/schedule_emergency_response">Schedule A Consultation</a>
                            </div>
                    </div>
                </div>
                {/* End Service Area */}

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

                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}



                {/* Start Footer Style  */}
                <Footer />
                {/* End Footer Style  */}


            </React.Fragment>
        )
    }
}
export default ServiceNine;