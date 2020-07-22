// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";


// Home layout
//import Demo from './page-demo/Demo';
//import MainDemo from './home/MainDemo';
//import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
//import DigitalAgency from './home/DigitalAgency';
//import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
//import Business from './home/Business';
//import StudioAgency from './home/StudioAgency';
//import PortfolioLanding from './home/PortfolioLanding';
//import CreativeLanding from './home/CreativeLanding';
//import HomeParticles from './home/HomeParticles';
//import CreativePortfolio from './home/CreativePortfolio';
//import DesignerPortfolio from './home/DesignerPortfolio';
//import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';
import App from './component/common/App';
// Dark Home Layout 
//import DarkMainDemo from './dark/MainDemo';
//import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout
import Service from "./elements/Service";
import ServiceTwo from "./elements/ServiceTwo";
import ServiceThree from "./elements/ServiceThree";
import ServiceFour from "./elements/ServiceFour";
import ServiceFive from "./elements/ServiceFive";
import ServiceSix from "./elements/ServiceSix";
import ServiceSeven from "./elements/ServiceSeven";
import ServiceEight from "./elements/ServiceEight";
import ServiceNine from "./elements/ServiceNine";
import ServiceTen from "./elements/ServiceTen";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
//import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import LearningDevelopmentScheduleForm from "./blocks/LearningDevelopmentScheduleForm";
import BackgroundCheckScheduleForm from "./blocks/BackgroundCheckScheduleForm";
import BusinessLogisticsScheduleForm from "./blocks/BusinessLogisticsScheduleForm";
import BusinessSupportScheduleForm from "./blocks/BusinessSupportScheduleForm";
import EmergencyResponseScheduleForm from "./blocks/EmergencyResponseScheduleForm";
import FreelanceScheduleForm from "./blocks/FreelanceScheduleForm";
import HrOutsourcingScheduleForm from "./blocks/HrOutsourcingScheduleForm";
import RecuitmentAssementScheduleForm from "./blocks/RecuitmentAssementScheduleForm";
import FacilityManagementScheduleForm from "./blocks/FacilityManagementScheduleForm";
import ConsultingAdvisoryScheduleForm from "./blocks/ConsultingAdvisoryScheduleForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
import axios from 'axios';


class Root extends Component{

    constructor(props) {
        super(props)
        this.state = {
            standardservices:[]

        };
        
    }
   
    componentDidMount() {
       
        this.StandardserviceList();
      
      }
      
      StandardserviceList(){
        axios.get('http://eaz-roc.ng/api/standardservices/').then(res => res.data)
        .then(res => {
            this.setState({
                standardservices: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }

    render(){
        return(
            <BrowserRouter basename={'/Gos'}>
                <Switch>
            
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>

                    
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    
                    
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness}/>


                    {/* Element Layot */}
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/business_support/:id`} component={Service}/>
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/business-logistics/:id`} component={ServiceTwo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/consulting-services/:id`} component={ServiceThree}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/hr_outsourcing/:id`} component={ServiceFour}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/facility-management/:id`} component={ServiceFive}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/learning_and_development/:id`} component={ServiceSix}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/background_checks/:id`} component={ServiceSeven}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/recruitment_and_assessment/:id`} component={ServiceEight}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/emergency_response/:id`} component={ServiceNine}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/freelance_services/:id`} component={ServiceTen}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details/:id`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_learning_development`} component={LearningDevelopmentScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_business_logistics`} component={BusinessLogisticsScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_business_supports`} component={BusinessSupportScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_facility_management`} component={FacilityManagementScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_hr_outsourcing`} component={HrOutsourcingScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_freelance`} component={FreelanceScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_recuitment`} component={RecuitmentAssementScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_background`} component={BackgroundCheckScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_emergency_response`} component={EmergencyResponseScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/schedule_consulting_advisory`} component={ConsultingAdvisoryScheduleForm}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}/>


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/app`} component={App}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
//serviceWorker.unregister();