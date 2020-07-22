import React, { Component } from "react";
import axios from 'axios';

class RecruitmentAssement extends Component{
    constructor(props){
        super(props);

        this.onChangeAssementFullName = this.onChangeAssementFullName.bind(this);
        this.onChangeAssementWorkEmail = this.onChangeAssementWorkEmail.bind(this);
        this.onChangeAssementPhone = this.onChangeAssementPhone.bind(this);
        this.onChangeAssementOrganisation = this.onChangeAssementOrganisation.bind(this);
        this.onChangeAssementJobRole = this.onChangeAssementJobRole.bind(this);
        this.onChangeAssementHelp = this.onChangeAssementHelp.bind(this);
        this.onChangeAssementCompanySize = this.onChangeAssementCompanySize.bind(this);
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
        onChangeAssementFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeAssementWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeAssementPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeAssementOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeAssementJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeAssementHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeAssementCompanySize(e) {
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
            axios.post('http://localhost:8000/api/recruitment/',learning,{
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
                                            onChange={this.onChangeAssementFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeAssementWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeAssementPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeAssementOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeAssementJobRole}>
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
                                    <label htmlFor="item06">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item06"
                                            value={this.state.help}
                                            onChange={this.onChangeAssementHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeAssementCompanySize}>
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
export default RecruitmentAssement;