import React, { Component, Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
//import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import CallAction from "../elements/callaction/CallAction";
import Team from "../blocks/team/TeamTwo";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiCast, FiLayers, FiUsers, FiChevronUp, FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/Brand";
import axios from 'axios';
import { Link } from 'react-router-dom';
//var sliders = [];






class CorporateBusiness extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            items: [],
            homes: [],
            standardservices:[],
            counterups:[],
            teamareas:[],
            nameitems: [],
            posts: []

        };
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    componentDidMount() {
        this.SlideLists();
        this.HomeserviceLists();
        this.StandardserviceList();
        this.CounterupList();
        this.TeamareasList();
        this.NameitemsList();
        this.BrandList();
        
        
        this.PostList();
      }
      
      BrandList(){
        axios.get('http://eaz-roc.ng/api/brands/').then(res => res.data)
        .then(res => {
            this.setState({
                brands: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }

    PostList(){
        axios.get('http://eaz-roc.ng/api/posts/').then(res => res.data)
        .then(res => {
            this.setState({
                posts: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }
      NameitemsList(){
        axios.get('http://eaz-roc.ng/api/nameitems/').then(res => res.data)
        .then(res => {
            this.setState({
                nameitems: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }
      TeamareasList(){
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

      CounterupList(){
        axios.get('http://eaz-roc.ng/api/counterups/').then(res => res.data)
        .then(res => {
            this.setState({
                counterups: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
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

    
    SlideLists(){
        axios.get('http://eaz-roc.ng/api/sliders/').then(res => res.data)
        .then(res => {
            this.setState({
                items: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }

      
    HomeserviceLists(){
        axios.get('http://eaz-roc.ng/api/homes/').then(res => res.data)
        .then(res => {
            this.setState({
                homes: res.data
            });
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }

       


      
    render() {

        
     

        
        
            return (
                <Fragment>
                    <Helmet pageTitle="Global Outsourcing Limited" />

                    {/* Start Header Area  */}
                    <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                    {/* End Header Area  */}

                    {/* Start Slider Area   */}
                    <div className="slider-wrapper">
                        <div className="slider-activation">
                        
                            <Slider className="rn-slick-dot dot-light">
                               
                            {this.state.items.map(item =>
                                    
                                    <div className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image  ${item.bgImage}`}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className={`inner ${item.textPosition}`} key={item.id}>
                                                        {item.category ? <span>{item.category}</span> : ''} 
                                                        {item.title ? <h1 className="title">{item.title}</h1> : ''} 
                                                        {item.description ? <p className="description">{item.description}</p> : ''} 
                                                        {item.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={`${item.buttonLink}`}>{item.buttonText}</a></div> : ''} 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
 )}

                            </Slider>
                             
                        </div>
                    </div>
                    {/* End Slider Area   */}




                    {/* Start Featured Service Area  */}
                    <div className="rn-featured-service-area pt--90 pb--120 bg_color--5">
                        <div className="container">
                            <div className="row">

                                                               

                                {/* Start Single Service  */}
                                {this.state.homes.map(home =>
                                <div className="col-lg-3 col-md-6 col-12 mt--30" key={home.single_service.id} >
                                    <div className="section-title">
                                <h3 className="title">{home.single_service.title}</h3>
                                <p>{home.single_service.content}</p>
                                        <div className="service-btn">
                                            <a className="btn-transparent rn-btn-dark" href="#"><span className="text">Learn more</span></a>
                                        </div>
                                    </div>
                                </div>
                                 )}
                                {/* End Single Service  */}
                                {/* Start Single Service  */}
                                <div className="col-lg-9">
                                    <div className="row">
                                    {this.state.standardservices.map(standard =>
                                            <div className="col-lg-4 col-md-4 mt--30" key={standard.id}>
                                                <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                                    <div className="standard-service">
                                                        <div className="thumbnai">
                                                            <img src={`http://eaz-roc.ng/images/Standardservices/${standard.services_image}`} />
                                                        </div>
                                                        <div className="content">
                                                            <h3>{standard.title}</h3>
                                                            {standard.description}
                                                           <p><Link className="btn-transparent rn-btn-dark" to={`${standard.services_details}/${standard.id}`}><span className="text">Learn More</span></Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                                {/* End Single Service  */}

                            </div>
                        </div>
                    </div>
                    {/* End Featured Service Area  */}

                    {/* Start Counterup Area */}
                    {this.state.homes.map(home =>
                    <div className="section-title service-style--3 text-center mb--25 mb_sm--0" key={home.counter_up_area.id}>
                        <h2 className="title">{home.counter_up_area.title}</h2>
                        {home.counter_up_area.content}
                    </div>
                      )}
                    <div className="counterup-area ptb--80 bg_image bg_image--17 theme-text-white" data-black-overlay="7">
                        

                            <CounterOne />
                        
                    </div>
                    {/* End Counterup Area */}

                    {/* Start About Area  */}
                   
                    <div className="rn-about-area ptb--120 bg_color--5">
                        <div className="container">
                        {this.state.homes.map(home =>
                            <div className="row row--35 align-items-center" key={home.about_one.id}>
                                <div className="col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`http://eaz-roc.ng/images/aboutones/${home.about_one.about_image}`} alt="About Images" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h3 className="title">{home.about_one.title}</h3>
                                            <p>{home.about_one.content}</p>
                                        </div>
                                      
                                        <div className="accordion-wrapper mt--30">
                                            <Accordion01 />
                                        </div>
                                        <div className="about-button mt--50">
                                            <a className="rn-button-style--2 btn-solid" href="/Gos/about">See how it works</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    
                    </div>
                     
                    {/* End About Area  */}
                   
                    {/* Start Team Area  */}
                    <div className="rn-team-area ptb--120 bg_color--1">
                        <div className="container">
                        {this.state.teamareas.map(teamarea =>
                            <div className="row" key={teamarea.id}>
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                                        <h2 className="title">{teamarea.title}</h2>
                                        <p>{teamarea.content}</p>
                                    </div>
                                </div>
                            </div>
                            )}
                            <div className="row">
                                <Team column="col-lg-3 col-md-6 col-sm-6 col-12 mt--40" teamStyle="" item="4" />
                            </div>
                        </div>
                    </div>
                    {/* End Team Area  */}

                    {/* Start About Area  */}
                    <div className="rn-about-area ptb--120 bg_color--5">
                        <div className="container">
                        {this.state.homes.map(home =>
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="about-inner inner">
                                   
                                        <div className="section-title">
                                            <h3 className="title">{home.about_two.title}
                                        </h3>
                                            <p className="description">{home.about_two.description}</p>
                                        </div>
                                       
                                        <div className="mt--30">
                                        <h3 className="title">{home.about_two.header_title}
                                        </h3>
                                        {this.state.nameitems.map(name => 
                                            <ul key={name.id} className="list-style--1">
                                                
                                                    <li ><FiCheck /> {name.title_one}</li>
                                                    <li><FiCheck /> {name.title_two}</li>
                                                    <li><FiCheck /> {name.title_three}</li>
                                                    <li><FiCheck /> {name.title_four}</li>
                                                    <li><FiCheck /> {name.title_five}</li>
                                               
                                            </ul>
                                             )}
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="thumbnail position-relative">
                                        <img className="w-100" src={`http://eaz-roc.ng/images/aboutwos/${home.about_two.about_image}`} alt="About Images" />
                                        
                                        <button className=" position-top-center theme-color" onClick={this.openModal}><span></span></button>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    {/* End About Area  */}

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



                    {/* Start Blog Area */}
                    <div className="rn-blog-area pt--120 pb--80 bg_color--1">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center">
                                        <h2 className="title">Latest News</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--60">
                                {this.state.posts.map(post => 
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12"  key={post.id}>
                                        <div className="blog blog-style--1">
                                            <div className="thumbnail">
                                                <a href="/blog-details">
                                                    <img className="w-100" src={`http://eaz-roc.ng/images/Post/${post.blog_image}`} alt="Blog Images" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <p className="blogtype">{post.blog_area.content}</p>
                                                <h4 className="title"><a href="#">{post.blog_area.title}</a></h4>
                                                <div className="blog-btn">
                                                    <a className="rn-btn text-white" href="#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* End Blog Area */}

                    {/* Start call To Action  */}
                    <CallAction />
                    {/* End call To Action  */}

                    {/* Start Footer Style  */}
                    <Footer />
                    {/* End Footer Style  */}

                    {/* Start Back To Top */}
                    <div className="backto-top">
                        <ScrollToTop showUnder={160}>
                            <FiChevronUp />
                        </ScrollToTop>
                    </div>
                    {/* End Back To Top */}
                </Fragment >
            )
        
    }
}
export default CorporateBusiness;
