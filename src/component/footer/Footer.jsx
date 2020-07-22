import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import axios from 'axios';

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class Footer extends Component{

    constructor(props) {
        super(props)
        this.state = {
        
            footers: []
           

        };
    
    }

    componentDidMount() {
        this.FooterList();
      }
      
      FooterList(){
        axios.get('http://eaz-roc.ng/api/footers/').then(res => res.data)
        .then(res => {
            this.setState({
                footers: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }

    
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        
                            
                            
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row align-items-end row--0">
                                        {/* Start Single Widget  */}
                                        {this.state.footers.map(foot =>
                                        <div className="col-lg-4 col-sm-6 col-12">
                                            <div className="footer-link">
                                        <h4>{foot.widgettwo.title}</h4>
                                                <ul className="ft-link">
                                        <li><a href="#">{foot.widgettwo.link_title_one}</a></li>
                                        <li><a href="#">{foot.widgettwo.link_title_two}</a></li>
                                        <li><a href="#">{foot.widgettwo.link_title_three}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        )}
                                        {/* End Single Widget  */}

                                        
                                        {/* Start Single Widget  */}
                                        {this.state.footers.map(foot =>
                                        <div className="col-lg-4 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                        <li><a href="mailto:admin@example.com">{foot.widgets.admin_email}</a></li>
                                        <li><a href="mailto:hr@example.com">{foot.widgets.email}</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>

                                        )}
                                        {/* End Single Widget  */}

                                         {/* Start Single Widget  */}
                                         {this.state.footers.map(foot =>
                                         <div className="col-lg-4 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>{foot.widgetthree.title}</h4>
                                                <ul className="ft-link">
                                         <li><a href="#">{foot.widgetthree.link_title_one}</a></li>
                                                    <li><a href="#">{foot.widgetthree.link_title_two}</a></li>
                                                    <li><a href="#">{foot.widgetthree.link_title_three}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                         )}
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2020 Global Outsourcing Limited. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;