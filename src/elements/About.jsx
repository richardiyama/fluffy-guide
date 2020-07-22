import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandOne from "../elements/Brand";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import axios from 'axios';
import Team from "../blocks/team/TeamTwo";



class About extends Component {

    constructor(props) {
        super(props)
        this.state = {

            abouts: [],
            findings: [],
            teamareas: []


        };

    }

    componentDidMount() {

        this.AboutList();
        this.TeamareasList();
        this.FindingsList();

    }

    AboutList() {
        axios.get('http://eaz-roc.ng/api/abouts/').then(res => res.data)
            .then(res => {
                this.setState({
                    abouts: res.data
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    FindingsList() {
        axios.get('http://eaz-roc.ng/api/findinguss/').then(res => res.data)
            .then(res => {
                this.setState({
                    findings: res.data
                });
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })

    }

    TeamareasList() {
        axios.get('http://eaz-roc.ng/api/teamareas/').then(res => res.data)
            .then(res => {
                this.setState({
                    teamareas: res.data
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {

        return (
            <React.Fragment>
                <PageHelmet pageTitle='About' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'About'} />
                {/* End Breadcrump Area */}
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--1">
                    {this.state.abouts.map(about =>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="single-column">

                                        <p>{about.columntwo.content_one}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column">

                                        <p>{about.columntwo.content_two}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Start Columns Area  */}


                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            {this.state.abouts.map(about =>
                                <div className="row row--35 align-items-center">
                                    <div className="col-lg-5">
                                        <div className="thumbnail">
                                            <img className="w-100" src={`http://eaz-roc.ng/images/aboutones/${about.aboutone.about_image}`} alt="About Images" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="about-inner inner">
                                            <div className="section-title">
                                                <h2 className="title">{about.aboutone.title}</h2>
                                                <p className="description">{about.aboutone.content}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* End About Area  */}
                {/* Start Columns Area  */}
                <div className="rn-columns-area ptb--120 bg_color--1">
                    {this.state.abouts.map(about =>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="single-column custom-color">
                                        <h4 className="tilte">{about.columnthree.title_one}</h4>
                                        <p>{about.columnthree.content_one}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                    <div className="single-column custom-color custom-color--1">
                                        <h4 className="title">{about.columnthree.title_two}</h4>
                                        <p>{about.columnthree.content_two}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                    <div className="single-column custom-color custom-color--2">
                                        <h4 className="tilte">{about.columnthree.title_three}</h4>
                                        <p>{about.columnthree.content_three}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Start Columns Area  */}


                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Numbers that define us.</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div>
                {/* End CounterUp Area */}

                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1">
                    <div className="inner">
                        {this.state.findings.map(find =>
                            <div className="content-wrapper">

                                <div className="content">
                                    <h4 className="theme-gradient">{find.title}</h4>
                                    <p>{find.content}</p>
                                    <a className="rn-btn btn-white" href="#">Schedule Your FREE Consultation</a>
                                </div>

                            </div>
                        )}
                        <div className="thumbnail">
                            <div className="image">
                                <img src="/Gos/assets/images/about/finding-us-01.png" alt="Finding Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}

                {/* Start Team Area  */}
                <div className="rn-team-area bg_color--1 ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--25">
                                    <h2 className="title">Skilled Team</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>






                            <Team column="col-lg-3 col-md-6 col-sm-6 col-12 mt--40" teamStyle="" item="4" />
                        </div>



                    </div>
                </div>
                {/* End Team Area  */}


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
export default About