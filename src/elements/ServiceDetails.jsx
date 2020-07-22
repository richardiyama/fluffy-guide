import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import CallAction from "../elements/callaction/CallAction";
import axios from 'axios';


class ServiceDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
           findings:[],
            name:'',
            service_image: '',
            content_one:'',
            content_two:'',
            title_one:'',
            list_one:'',
            list_two:'',
            list_three:'',
            list_four:'',
            list_five:'',
            service_url:'',
            content_three:'',
            content_four:'',
            title_two:'',
            list_six:'',
           list_seven:'',
           list_eight:''
        };
       
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        this.Originalservice();
        this.FindingsList();
      }
      
      FindingsList()
      {
        axios.get('http://eaz-roc.ng/api/findinguss/').then(res => res.data)
        .then(res => {
            this.setState({
            findings:res.data
            });
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          })
        
      }
    Originalservice(){
        
        axios.get('http://eaz-roc.ng/api/originalservices/'+ this.props.match.params.id).then(res => res.data)
        .then(res => {
            this.setState({
                name:res.data.servicedetail.name,
                service_image: res.data.servicedetail.service_image,
                content_one:res.data.servicedetail.content_one,
                content_two:res.data.servicedetail.content_two,
                title_one:res.data.servicedetail.title_one,
                list_one:res.data.servicedetail.list_one,
                list_two:res.data.servicedetail.list_two,
                list_three:res.data.servicedetail.list_three,
                list_four:res.data.servicedetail.list_four,
                list_five:res.data.servicedetail.list_five,
                service_url:res.data.servicedetail.service_booking_url,
                content_three:res.data.servicedetail.content_three,
                content_four:res.data.servicedetail.content_four,
                title_two:res.data.servicedetail.title_two,
                list_six:res.data.servicedetail.list_six,
               list_seven:res.data.servicedetail.list_seven,
               list_eight:res.data.servicedetail.list_eight
            
            
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
        
    }

  
    render() {
        return (
            <React.Fragment>

                {/* Start Pagehelmet  */}
                <PageHelmet pageTitle='Service Details' />
                {/* End Pagehelmet  */}

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="5">
                   
                    <div className="container">
                   
                        <div className="row">
                            <div className="col-lg-12">
                        
                                <div className="rn-page-title text-center pt--100"> 
        <h2 className="title theme-gradient">{this.state.name}</h2>
                                    <p>{this.state.title_one}</p>
                                    <div className="header-btn">
                                        <a className="rn-btn" href="/payment">
                                            <span>Schedule Your FREE Consultation</span>
                                        </a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                      

                    </div>
                    
                </div>
                {/* End Breadcrump Area */}

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


                {/* Start Page Wrapper */}
                <div className="rn-service-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="service-details-inner">
                                    <div className="inner">
                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content pb--80 align-items-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="thumb">
                                                    <img className="w-100" src={`http://eaz-roc.ng/images/Standardservices/${this.state.service_image}`} alt="Service Images" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>{this.state.content_three}</p>
                                                    <p>{this.state.content_four}</p>
                                                    <h4 className="title">{this.state.title_two}</h4>
                                                    <ul className="liststyle">
                                                        <li>{this.state.list_one}</li>
                                                        <li>{this.state.list_two}</li>
                                                        <li>{this.state.list_three}</li>
                                                        <li>{this.state.list_four}</li>
                                                        <li>{this.state.list_five}</li>
                                                    </ul>

                                                    <div className="service-btn">
                                                        <a className="btn-transparent rn-btn-dark" href="#"><span className="text">Schedule Your FREE Consultation</span></a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}

                                        {/* Start Single Area */}
                                        <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>{this.state.list_six}</p>
                                                    <p>{this.state.list_seven}</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>{this.state.list_six}</li>
                                                        <li>{this.state.list_seven}</li>
                                                        <li>{this.state.eight}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images" />
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Area */}


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
                                                        <img src="/assets/images/about/finding-us-01.png" alt="Finding Images" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Finding Us Area  */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Wrapper */}

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
export default ServiceDetails;