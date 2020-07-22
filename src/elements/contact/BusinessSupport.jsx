import React, { Component } from "react";
import axios from 'axios';

class BusinessSupport extends Component{
    constructor(props){
        super(props);

        this.onChangeSupportFullName = this.onChangeSupportFullName.bind(this);
        this.onChangeSupportWorkEmail = this.onChangeSupportWorkEmail.bind(this);
        this.onChangeSupportPhone = this.onChangeSupportPhone.bind(this);
        this.onChangeSupportOrganisation = this.onChangeSupportOrganisation.bind(this);
        this.onChangeSupportJobRole = this.onChangeSupportJobRole.bind(this);
        this.onChangeSupportSoftwareDevelopmentDatamanagement = this.onChangeSupportSoftwareDevelopmentDatamanagement.bind(this);
        this.onChangeSupportProcurementSupplies = this.onChangeSupportProcurementSupplies.bind(this);
        this.onChangeSupportHrPartner = this.onChangeSupportHrPartner.bind(this);
        this.onChangeSupportEmergencyResponse = this.onChangeSupportEmergencyResponse.bind(this);
        this.onChangeSupportDigitilizationofCrimeDatabase = this.onChangeSupportDigitilizationofCrimeDatabase.bind(this);
        this.onChangeSupportCapitalItemConsumables = this.onChangeSupportCapitalItemConsumables.bind(this);
        this.onChangeSupportPrintingStationery = this.onChangeSupportPrintingStationery.bind(this);
        this.onChangeSupportSubContractorPrequalification = this.onChangeSupportSubContractorPrequalification.bind(this);
        this.onChangeSupportContractorPerformanceEvaluation = this.onChangeSupportContractorPerformanceEvaluation.bind(this);
        this.onChangeSupportAuditPayroll =this.onChangeSupportAuditPayroll.bind(this);
        this.onChangeSupportInsuranceHmoHealthCareBenefits = this.onChangeSupportInsuranceHmoHealthCareBenefits.bind(this);
        this.onChangeSupportCompanySecretariatLeal = this.onChangeSupportCompanySecretariatLeal.bind(this);
        this.onChangeSupportBusinessPlan = this.onChangeSupportBusinessPlan.bind(this);
        this.onChangeSupportOnlineBusinessSupportPlatform = this.onChangeSupportOnlineBusinessSupportPlatform.bind(this);
        this.onChangeSupportHelp = this.onChangeSupportHelp.bind(this);
        this.onChangeSupportCompanySize = this.onChangeSupportCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            softwaredevelopmentdatamanagement:'',
            procurementsupplies:'',
            hrpartner:'',
            emergencyresponse:'',
            digitilizationofcrimedatabase:'',
            capitalitemconsumables:'',
            printingstationery:'',
            subcontractorprequalification:'',
            contractorperformanceevaluation:'',
            auditpayroll:'',
            insurancehmohealthcarebenefits:'',
            companysecretariatleal:'',
            businessplan:'',
            businesssuportplatform:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeSupportFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeSupportWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeSupportPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeSupportOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeSupportJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeSupportSoftwareDevelopmentDatamanagement(e) {
            this.setState({softwaredevelopmentdatamanagement: e.target.value})
          }
        
        onChangeSupportProcurementSupplies(e) {
            this.setState({procurementsupplies: e.target.value})
          }
    
        onChangeSupportHrPartner(e) {
            this.setState({hrpartner: e.target.value})
          }

        onChangeSupportEmergencyResponse(e) {
            this.setState({emergencyresponse: e.target.value})
          }
        
        onChangeSupportDigitilizationofCrimeDatabase(e) {
            this.setState({digitilizationofcrimedatabase: e.target.value})
          }
        
        onChangeSupportCapitalItemConsumables(e) {
            this.setState({capitalitemconsumables: e.target.value})
          }
    
        onChangeSupportPrintingStationery(e) {
            this.setState({printingstationery: e.target.value})
          }
        
        onChangeSupportSubContractorPrequalification(e) {
            this.setState({subcontractorprequalification: e.target.value})
          }
        onChangeSupportContractorPerformanceEvaluation(e){
            this.setState({contractorperformanceevaluation: e.target.value})
        }

        onChangeSupportAuditPayroll(e) {
            this.setState({auditpayroll: e.target.value})
          }
        onChangeLearningPresentationSkillsForManagers(e) {
            this.setState({presentationskillsformanagers: e.target.value})
          }
        
        onChangeSupportInsuranceHmoHealthCareBenefits(e) {
            this.setState({insurancehmohealthcarebenefits: e.target.value})
          }
        onChangeSupportContractorPerformanceEvaluation(e){
            this.setState({contractorperformanceevaluation: e.target.value})
        }

        onChangeSupportCompanySecretariatLeal(e) {
            this.setState({companysecretariatleal: e.target.value})
          }
        onChangeSupportBusinessPlan(e) {
            this.setState({presentationskillsformanagers: e.target.value})
          }
        
        onChangeSupportOnlineBusinessSupportPlatform(e) {
            this.setState({businesssuportplatform: e.target.value})
          }
        
        onChangeSupportHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeSupportCompanySize(e) {
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
            softwaredevelopmentdatamanagement:this.state.softwaredevelopmentdatamanagement,
            procurementsupplies:this.state.procurementsupplies,
            hrpartner:this.state.hrpartner,
            emergencyresponse:this.state.emergencyresponse,
            digitilizationofcrimedatabase:this.state.digitilizationofcrimedatabase,
            capitalitemconsumables:this.state.capitalitemconsumables,
            printingstationery:this.printingstationery,
            subcontractorprequalification:this.subcontractorprequalification,
            contractorperformanceevaluation:this.contractorperformanceevaluation,
            auditpayroll:this.state.auditpayroll,
            insurancehmohealthcarebenefits:this.state.insurancehmohealthcarebenefits,
            companysecretariatleal:this.state.companysecretariatleal,
            businessplan:this.state.businessplan,
            businesssuportplatform:this.state.businesssuportplatform,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
                axios.post('http://localhost:8000/api/supports/',learning,{
                headers: {'Content-Type' : 'application/json'}
             })
            console.log(`Schedule sent successfully!`);
            console.log(`softwaredevelopmentdatamanagement: ${this.state.softwaredevelopmentdatamanagement}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            softwaredevelopmentdatamanagement:'',procurementsupplies:'',hrpartner:'',emergencyresponse:'',
            digitilizationofcrimedatabase:'',capitalitemconsumables:'',printingstationery:'',subcontractorprequalification:'',
            contractorperformanceevaluation:'',auditpayroll:'',insurancehmohealthcarebenefits:'',companysecretariatleal:'',
            businessplan:'',businesssuportplatform:'',help:'',companysize:''})
            
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
                                            onChange={this.onChangeSupportFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeSupportWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeSupportPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeSupportOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeSupportJobRole}>
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
                                    <h6>What Business Support services are you interested in?</h6>
                                    <label htmlFor="item06">
                                        Software Development/Data Management
                                        <input
                                            type="checkbox"
                                            name="softwaredevelopmentdatamanagement"
                                            id="item06"
                                            checked={this.state.softwaredevelopmentdatamanagement}
                                            onChange={this.onChangeSupportSoftwareDevelopmentDatamanagement}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                        Procurement And Supplies
                                        <input
                                            type="checkbox"
                                            name="exceptionalcustomerservice"
                                            id="item07"
                                            checked={this.state.procurementsupplies}
                                            onChange={this.onChangeSupportProcurementSupplies}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item08">
                                        Performance Management
                                        <input
                                            type="checkbox"
                                            name="performancemanagement"
                                            id="item08"
                                            checked={this.state.performancemanagement}
                                            onChange={this.onChangeLearningPerformanceManagement}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item09">
                                        Hr Partner
                                        <input
                                            type="checkbox"
                                            name="hrpartner"
                                            id="item09"
                                            checked={this.state.hrpartner}
                                            onChange={this.onChangeSupportHrPartner}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                        Emergency Response
                                        <input
                                            type="checkbox"
                                            name="personaleffectiviness"
                                            id="item10"
                                            checked={this.state.emergencyresponse}
                                            onChange={this.onChangeSupportEmergencyResponse}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item11">
                                        Digitilization Of Crime Database And App
                                        <input
                                            type="checkbox"
                                            name="digitilizationofcrimedatabase"
                                            id="item11"
                                            checked={this.state.digitilizationofcrimedatabase}
                                            onChange={this.onChangeSupportDigitilizationofCrimeDatabase}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item12">
                                        Capital Items/Consumables
                                        <input
                                            type="checkbox"
                                            name="teambuilding"
                                            id="item12"
                                            checked={this.state.capitalitemconsumables}
                                            onChange={this.onChangeSupportCapitalItemConsumables}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item13">
                                        Printing And Stationery
                                        <input
                                            type="checkbox"
                                            name="presentationskillsformanagers"
                                            id="item14"
                                            checked={this.state.printingstationery}
                                            onChange={this.onChangeSupportPrintingStationery}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item14">
                                        Audit/Payroll
                                        <input
                                            type="checkbox"
                                            name="auditpayroll"
                                            id="item14"
                                            checked={this.state.auditpayroll}
                                            onChange={this.onChangeSupportAuditPayroll}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item15">
                                        Insurance/Hmo/Health Care Benefits
                                        <input
                                            type="checkbox"
                                            name="insurancehmohealthcarebenefits"
                                            id="item15"
                                            checked={this.state.insurancehmohealthcarebenefits}
                                            onChange={this.onChangeSupportInsuranceHmoHealthCareBenefits}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item16">
                                        Company Secretariat/ Leal
                                        <input
                                            type="checkbox"
                                            name="companysecretariatleal"
                                            id="item16"
                                            checked={this.state.companysecretariatleal}
                                            onChange={this.onChangeSupportCompanySecretariatLeal}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item17">
                                        Business Plan
                                        <input
                                            type="checkbox"
                                            name="businessplan"
                                            id="item17"
                                            checked={this.state.businessplan}
                                            onChange={this.onChangeSupportBusinessPlan}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item18">
                                        Online Business Support Platform
                                        <input
                                            type="checkbox"
                                            name="businesssuportplatform"
                                            id="item18"
                                            checked={this.state.businesssuportplatform}
                                            onChange={this.onChangeSupportOnlineBusinessSupportPlatform}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item19">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item19"
                                            value={this.state.help}
                                            onChange={this.onChangeSupportHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item20">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeSupportCompanySize}>
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
export default BusinessSupport;