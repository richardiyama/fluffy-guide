import React, { Component } from "react";
import axios from 'axios';

class Freelance extends Component{
    constructor(props){
        super(props);

        this.onChangeFreelanceFullName = this.onChangeFreelanceFullName.bind(this);
        this.onChangeFreelanceWorkEmail = this.onChangeFreelanceWorkEmail.bind(this);
        this.onChangeFreelancePhone = this.onChangeFreelancePhone.bind(this);
        this.onChangeFreelanceOrganisation = this.onChangeFreelanceOrganisation.bind(this);
        this.onChangeFreelanceJobRole = this.onChangeFreelanceJobRole.bind(this);
        this.onChangeFreelanceHelp = this.onChangeFreelanceHelp.bind(this);
        this.onChangeFreelanceCompanySize = this.onChangeFreelanceCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeFreelanceFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeFreelanceWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeFreelancePhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeFreelanceOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeFreelanceJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeFreelanceHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeFreelanceCompanySize(e) {
            this.setState({companysize: e.target.value})
          }
         // componentDidMount(e) {
           // this.onSubmit(e);
         // }
          onSubmit(e) {
            e.preventDefault()
             const learning = {
                fullname: this.state.fullname,
            workemail: this.state.workemail,
            phone: this.state.phone,
            organisation: this.state.organisation,
            jobrole:this.state.jobrole,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
            axios.post('http://localhost:8000/api/freelance/',learning,{
            headers: {'Content-Type' : 'application/json'}
              })
            console.log(`Schedule sent successfully!`);
            console.log(`fullname: ${this.state.fullname}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',help:'',companysize:''})
            
          }
    
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">How can we help your business?</h2>
                                <p className="description">Thank you for your interest in Global Outsourcing Services. So we can help serve you better, please take a moment to complete this form and we will get in touch with you soon.</p>
                            </div>
                            <div className="form-wrapper">
                                <form onSubmit={this.onSubmit}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="fullname"
                                            id="item01"
                                            value={this.state.fullname}
                                            onChange={this.onChangeFreelanceFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeFreelanceWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeFreelancePhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeFreelanceOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeFreelanceJobRole}>
                            <option value="C-Suite">C-Suite</option>
                            <option value="Head of HR">Head of HR</option>
                            <option selected value="">Select Job Role</option>
                            <option value="Head of Learning">Head of Learning</option>
                            <option selected value="Head of Outsourcing">Head of Outsourcing</option>
                            <option value="Head of Recruitment">Head of Recruitment</option>
                            <option selected value="HR Professional">HR Professional</option>
                            <option value="Business Manager">Business Manager</option>
                            <option selected value="Team Lead">Team Lead</option>
                            <option value="Others">Others</option>
                        </select>
                        </label>
                                   
                                    <label htmlFor="item15">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item15"
                                            value={this.state.help}
                                            onChange={this.onChangeFreelanceHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeFreelanceCompanySize}>
                            <option value="1-10 employess">1-10 employees</option>
                            <option value="11-50 employees">11-50 employees</option>
                            <option selected value="">Select Company Size</option>
                            <option value="51-200 employees">51-200 employees</option>
                            <option selected value="201-500 employees">201-500 employees</option>
                            <option value="501-1000 employees">501-1000 employees</option>
                            <option selected value="1001-5000 employees">1001-5000 employees</option>
                            <option value="5001-10,000 employees">5001-10,000 employees</option>
                            <option selected value="10,000+ employees">10,000+ employees</option>
                            
                        </select>
                        </label>

                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Schedule Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src={`${this.props.contactImages}`} alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Freelance;