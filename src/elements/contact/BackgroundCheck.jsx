import React, { Component } from "react";
import axios from 'axios';

class BackgroundCheck extends Component{
    constructor(props){
        super(props);

        this.onChangeBackgroundFullName = this.onChangeBackgroundFullName.bind(this);
        this.onChangeBackgroundWorkEmail = this.onChangeBackgroundWorkEmail.bind(this);
        this.onChangeBackgroundPhone = this.onChangeBackgroundPhone.bind(this);
        this.onChangeBackgroundOrganisation = this.onChangeBackgroundOrganisation.bind(this);
        this.onChangeBackgroundJobRole = this.onChangeBackgroundJobRole.bind(this);
        this.onChangeBackgroundSafeGuard = this.onChangeBackgroundSafeGuard.bind(this);
        this.onChangeBackgroundIdentityVerification = this.onChangeBackgroundIdentityVerification.bind(this);
        this.onChangeBackgroundAddressVerification = this.onChangeBackgroundAddressVerification.bind(this);
        this.onChangeBackgroundGuarantorVerification = this.onChangeBackgroundGuarantorVerification.bind(this);
        this.onChangeBackgroundEmploymentVerification = this.onChangeBackgroundEmploymentVerification.bind(this);
        this.onChangeBackgroundHelp = this.onChangeBackgroundHelp.bind(this);
        this.onChangeBackgroundCompanySize = this.onChangeBackgroundCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            safeguard:'',
            identityverification:'',
            addressverification:'',
            guarantorverification:'',
            employmentverification:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeBackgroundFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeBackgroundWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeBackgroundPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeBackgroundOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeBackgroundJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeBackgroundSafeGuard(e) {
            this.setState({safeguard: e.target.value})
          }
        
        onChangeBackgroundIdentityVerification(e) {
            this.setState({identityverification: e.target.value})
          }
    
        onChangeBackgroundAddressVerification(e) {
            this.setState({addressverification: e.target.value})
          }

        onChangeBackgroundEmploymentVerification(e) {
            this.setState({employmentverification: e.target.value})
          }
        
        onChangeBackgroundGuarantorVerification(e) {
            this.setState({guarantorverification: e.target.value})
          }
        onChangeBackgroundHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeBackgroundCompanySize(e) {
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
            safeguard:this.state.safeguard,
            identityverification:this.state.identityverification,
            addressverification:this.state.addressverification,
            guarantorverification:this.state.guarantorverification,
            employmentverification:this.state.employmentverification,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
            axios.post('http://localhost:8000/api/checks/',learning,{
            headers: {'Content-Type' : 'application/json'}
            })
            console.log(`Schedule sent successfully!`);
            console.log(`safguard: ${this.state.safeguard}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            safeguard:'', identityverification:'',addressverification:'',guarantorverification:'',
            employmentverification:'', help:'',companysize:''})
            
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
                                            onChange={this.onChangeBackgroundFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeBackgroundWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeBackgroundPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeBackgroundOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeBackgroundJobRole}>
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
                                    <h6>What Background Check services are you interested in?</h6>
                                    <label htmlFor="item06">
                                        Safe Guard
                                        <input
                                            type="checkbox"
                                            name="safeguard"
                                            id="item06"
                                            checked={this.state.safeguard}
                                            onChange={this.onChangeBackgroundSafeGuard}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                        Identity Verification
                                        <input
                                            type="checkbox"
                                            name="identityverification"
                                            id="item07"
                                            checked={this.state.identityverification}
                                            onChange={this.onChangeBackgroundIdentityVerification}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item08">
                                        Address Verification
                                        <input
                                            type="checkbox"
                                            name="addressverification"
                                            id="item08"
                                            checked={this.state.addressverification}
                                            onChange={this.onChangeBackgroundAddressVerification}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item09">
                                        Guarantor Verification
                                        <input
                                            type="checkbox"
                                            name="guarantorverification"
                                            id="item09"
                                            checked={this.state.guarantorverification}
                                            onChange={this.onChangeBackgroundGuarantorVerification}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                        Employment Verification
                                        <input
                                            type="checkbox"
                                            name="employmentverification"
                                            id="item10"
                                            checked={this.state.employmentverification}
                                            onChange={this.onChangeBackgroundEmploymentVerification}
                                            
                                        />
                                    </label>
                                    
                                    
                                    <label htmlFor="item15">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item15"
                                            value={this.state.help}
                                            onChange={this.onChangeBackgroundHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeBackgroundCompanySize}>
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
export default BackgroundCheck;