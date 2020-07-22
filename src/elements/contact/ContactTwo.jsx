import React, { Component } from "react";
import axios from 'axios';

class ContactTwo extends Component{
    constructor(props){
        super(props);

        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
        this.onChangeContactSubject = this.onChangeContactSubject.bind(this);
        this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            subject: '',
            bodymessage: '',
        };
    }

    onChangeContactName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeContactEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeContactSubject(e) {
        this.setState({subject: e.target.value})
      }

      onChangeContactMessage(e) {
        this.setState({bodymessage: e.target.value})
      }

      onSubmit(e) {
        e.preventDefault()
         const contact = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            bodymessage: this.state.bodymessage
         
        };
        axios.post('http://localhost:8000/api/contacts/',contact,{
          headers: {'Content-Type' : 'application/json'}
        })
        console.log(`Message successfully sent!`);
        console.log(`name: ${this.state.name}`);
       
      
  
        this.setState({name: '', email: '', subject: '',bodymessage: ''})
        
      }
      
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Us.</h2>
                                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.onSubmit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={this.onChangeContactName}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={this.onChangeContactEmail}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={this.onChangeContactSubject}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="bodymessage"
                                            value={this.state.bodymessage}
                                            onChange={this.onChangeContactMessage}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/Gos/assets/images/about/about.JPG" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;