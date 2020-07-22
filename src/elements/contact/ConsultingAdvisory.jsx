import React, { Component } from "react";
import axios from 'axios';

class ConsultingAdvisory extends Component{
    constructor(props){
        super(props);

        this.onChangeConsultingFullName = this.onChangeConsultingFullName.bind(this);
        this.onChangeConsultingWorkEmail = this.onChangeConsultingWorkEmail.bind(this);
        this.onChangeConsultingPhone = this.onChangeConsultingPhone.bind(this);
        this.onChangeConsultingOrganisation = this.onChangeConsultingOrganisation.bind(this);
        this.onChangeConsultingJobRole = this.onChangeConsultingJobRole.bind(this);
        this.onChangeConsultingRetreat = this.onChangeConsultingRetreat.bind(this);
        this.onChangeConsultingMPR = this.onChangeConsultingMPR.bind(this);
        this.onChangeConsultingBusinessPlan = this.onChangeConsultingBusinessPlan.bind(this);
        this.onChangeConsultingVirtualTalentHub = this.onChangeConsultingVirtualTalentHub.bind(this);
        this.onChangeConsultingBenchmarking = this.onChangeConsultingBenchmarking.bind(this);
        this.onChangeConsultingDigitalMarketing = this.onChangeConsultingDigitalMarketing.bind(this);
        this.onChangeConsultingStrategicManagement = this.onChangeConsultingStrategicManagement.bind(this);
        this.onChangeConsultingLeadershipSoftSkills = this.onChangeConsultingLeadershipSoftSkills.bind(this);
        this.onChangeConsultingCustomerService = this.onChangeConsultingCustomerService.bind(this);
        this.onChangeConsultingAccountingFinanceBanking = this.onChangeConsultingAccountingFinanceBanking.bind(this);
        this.onChangeConsultingOperationsProjectManagement = this.onChangeConsultingOperationsProjectManagement.bind(this);
        this.onChangeConsultingHrManagementTeamBonding = this.onChangeConsultingHrManagementTeamBonding.bind(this);
        this.onChangeConsultingBenefitsCompensationSurvey = this.onChangeConsultingBenefitsCompensationSurvey.bind(this);
        this.onChangeConsultingHrAudit = this.onChangeConsultingHrAudit.bind(this);
        this.onChangeConsultingIsoAudit = this.onChangeConsultingIsoAudit.bind(this);
        this.onChangeConsultingFacilityAudit = this.onChangeConsultingFacilityAudit.bind(this);
        this.onChangeConsultingFinancialAudit = this.onChangeConsultingFinancialAudit.bind(this);
        this.onChangeConsultingCreativeAlternativeBenefits = this.onChangeConsultingCreativeAlternativeBenefits.bind(this);
        this.onChangeConsultingLocalInternational = this.onChangeConsultingLocalInternational.bind(this);
        this.onChangeConsultingEductionalCredentialVerification = this.onChangeConsultingEductionalCredentialVerification.bind(this);
        this.onChangeConsultingProfessionalCertificationVerification = this.onChangeConsultingProfessionalCertificationVerification.bind(this);
        this.onChangeConsultingGuarantorVerification = this.onChangeConsultingGuarantorVerification.bind(this);
        this.onChangeConsultingKYCResidenceVerification = this.onChangeConsultingKYCResidenceVerification.bind(this);
        this.onChangeConsultingPreviousEmployerPersonal = this.onChangeConsultingPreviousEmployerPersonal.bind(this);
        this.onChangeConsultingHelp = this.onChangeConsultingHelp.bind(this);
        this.onChangeConsultingCompanySize = this.onChangeConsultingCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            retreat:'',
            mpr:'',
            businessplan:'',
            virtualtalenthub:'',
            benchmarking:'',
            digitalmarketing:'',
            strategicmanagement:'',
            leadershipsoftskills:'',
            customerservice:'',
            accountingfinancebanking:'',
            operationsprojectmanagement:'',
            hrmanagementteambonding:'',
            benefitscompensationsurvey:'',
            hraudit:'',
            isoaudit:'',
            facilityaudit:'',
            financialaudit:'',
            creativealternativebenefits:'',
            localinternational:'',
            eductionalcredentialverification:'',
            professionalcertificationverification:'',
            guarantorverification:'',
            kycresidenceverification:'',
            previousemployerpersonal:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeConsultingFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeConsultingWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeConsultingPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeConsultingOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeConsultingJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeConsultingRetreat(e) {
            this.setState({retreat: e.target.value})
          }
        
        onChangeConsultingMPR(e) {
            this.setState({mpr: e.target.value})
          }
    
        onChangeConsultingBusinessPlan(e) {
            this.setState({businessplan: e.target.value})
          }

        onChangeConsultingVirtualTalentHub(e) {
            this.setState({virtualtalenthub: e.target.value})
          }
        
        onChangeConsultingBenchmarking(e) {
            this.setState({benchmarking: e.target.value})
          }
        
        onChangeConsultingDigitalMarketing(e) {
            this.setState({digitalmarketing: e.target.value})
          }
    
        onChangeConsultingStrategicManagement(e) {
            this.setState({strategicmanagement: e.target.value})
          }
        onChangeConsultingLeadershipSoftSkills(e) {
            this.setState({leadershipsoftskills: e.target.value})
          }
        
        onChangeConsultingCustomerService(e) {
            this.setState({customerservice: e.target.value})
          }

        onChangeConsultingAccountingFinanceBanking(e) {
            this.setState({accountingfinancebanking: e.target.value})
          }
        
        onChangeConsultingOperationsProjectManagement(e) {
            this.setState({operationsprojectmanagement: e.target.value})
          }
    
        onChangeConsultingHrManagementTeamBonding(e) {
            this.setState({hrmanagementteambonding: e.target.value})
          }
        onChangeConsultingBenefitsCompensationSurvey(e) {
            this.setState({benefitscompensationsurvey: e.target.value})
          }
        
        onChangeConsultingHrAudit(e) {
            this.setState({hraudit: e.target.value})
          }
        
        onChangeConsultingIsoAudit(e) {
            this.setState({isoaudit: e.target.value})
          }
        
        onChangeConsultingFacilityAudit(e) {
            this.setState({facilityaudit: e.target.value})
          }

        onChangeConsultingFinancialAudit(e) {
            this.setState({financialaudit: e.target.value})
          }
    
        onChangeConsultingCreativeAlternativeBenefits(e) {
            this.setState({creativealternativebenefits: e.target.value})
          }
        onChangeConsultingLocalInternational(e) {
            this.setState({localinternational: e.target.value})
          }
        
        onChangeConsultingEductionalCredentialVerification(e) {
            this.setState({eductionalcredentialverification: e.target.value})
          }
        onChangeConsultingProfessionalCertificationVerification(e) {
            this.setState({professionalcertificationverification: e.target.value})
          }
        
        onChangeConsultingGuarantorVerification(e) {
            this.setState({guarantorverification: e.target.value})
          }
    
        onChangeConsultingKYCResidenceVerification(e) {
            this.setState({kycresidenceverification: e.target.value})
          }
        onChangeConsultingPreviousEmployerPersonal(e) {
            this.setState({previousemployerpersonal: e.target.value})
          }
        
       
        
        onChangeConsultingHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeConsultingCompanySize(e) {
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
            retreat:this.state.retreat,
            mpr:this.state.mpr,
            businessplan:this.state.businessplan,
            virtualtalenthub:this.state.virtualtalenthub,
            benchmarking:this.state.benchmarking,
            digitalmarketing:this.state.digitalmarketing,
            strategicmanagement:this.state.strategicmanagement,
            leadershipsoftskills:this.state.leadershipsoftskills,
            customerservice:this.state.customerservice,
            accountingfinancebanking:this.state.accountingfinancebanking,
            operationsprojectmanagement:this.state.operationsprojectmanagement,
            hrmanagementteambonding:this.state.hrmanagementteambonding,
            benefitscompensationsurvey:this.state.benefitscompensationsurvey,
            hraudit:this.state.hraudit,
            isoaudit:this.state.isoaudit,
            facilityaudit:this.state.facilityaudit,
            financialaudit:this.state.financialaudit,
            creativealternativebenefits:this.state.creativealternativebenefits,
            localinternational:this.state.localinternational,
            eductionalcredentialverification:this.state.eductionalcredentialverification,
            professionalcertificationverification:this.state.professionalcertificationverification,
            guarantorverification:this.state.guarantorverification,
            kycresidenceverification:this.state.kycresidenceverification,
            previousemployerpersonal:this.state.previousemployerpersonal,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
            axios.post('http://localhost:8000/api/consults/',learning,{
            headers: {'Content-Type' : 'application/json'}
           })
            console.log(`Schedule sent successfully!`);
            console.log(`retreat: ${this.state.retreat}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            retreat:'',mpr:'',businessplan:'',virtualtalenthub:'',benchmarking:'',digitalmarketing:'',
            strategicmanagement:'',leadershipsoftskills:'',customerservice:'',accountingfinancebanking:'',
            operationsprojectmanagement:'',hrmanagementteambonding:'',benefitscompensationsurvey:'',
            hraudit:'',isoaudit:'',facilityaudit:'',financialaudit:'',creativealternativebenefits:'',localinternational:'',
            eductionalcredentialverification:'',professionalcertificationverification:'',guarantorverification:'',
            kycresidenceverification:'',previousemployerpersonal:'',help:'',companysize:''})
            
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
                                            onChange={this.onChangeConsultingFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeConsultingWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeConsultingPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeConsultingOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeConsultingJobRole}>
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
                                    <h6>What Consulting And Advisory services are you interested in?</h6>
                                    <label htmlFor="item06">
                                         Retreat
                                        <input
                                            type="checkbox"
                                            name="retreat"
                                            id="item06"
                                            checked={this.state.retreat}
                                            onChange={this.onChangeConsultingRetreat}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                          MPR
                                        <input
                                            type="checkbox"
                                            name="mpr"
                                            id="item07"
                                            checked={this.state.mpr}
                                            onChange={this.onChangeConsultingMPR}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item08">
                                           Business Plan
                                        <input
                                            type="checkbox"
                                            name="businessplan"
                                            id="item08"
                                            checked={this.state.businessplan}
                                            onChange={this.onChangeConsultingBusinessPlan}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item09">
                                           Virtual Talent Hub
                                        <input
                                            type="checkbox"
                                            name="virtualtalenthub"
                                            id="item09"
                                            checked={this.state.virtualtalenthub}
                                            onChange={this.onChangeConsultingVirtualTalentHub}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                            Benchmarking
                                        <input
                                            type="checkbox"
                                            name="benchmarking"
                                            id="item10"
                                            checked={this.state.benchmarking}
                                            onChange={this.onChangeConsultingBenchmarking}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item11">
                                            Digital Marketing
                                        <input
                                            type="checkbox"
                                            name="digitalmarketing"
                                            id="item11"
                                            checked={this.state.digitalmarketing}
                                            onChange={this.onChangeConsultingDigitalMarketing}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item12">
                                             Strategic Management
                                        <input
                                            type="checkbox"
                                            name="strategicmanagement"
                                            id="item12"
                                            checked={this.state.strategicmanagement}
                                            onChange={this.onChangeConsultingStrategicManagement}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item13">
                                              Leadership & Soft Skills
                                        <input
                                            type="checkbox"
                                            name="leadershipsoftskills"
                                            id="item14"
                                            checked={this.state.leadershipsoftskills}
                                            onChange={this.onChangeConsultingLeadershipSoftSkills}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item14">
                                               Customer Service
                                        <input
                                            type="checkbox"
                                            name="customerservice"
                                            id="item14"
                                            checked={this.state.customerservice}
                                            onChange={this.onChangeConsultingCustomerService}
                                            
                                        />
                                        </label>
                                         <label htmlFor="item15">
                                               Accounting, Finance & Banking
                                        <input
                                            type="checkbox"
                                            name="accountingfinancebanking"
                                            id="item15"
                                            checked={this.state.accountingfinancebanking}
                                            onChange={this.onChangeConsultingAccountingFinanceBanking}
                                            
                                        />
                                        </label>
                                         <label htmlFor="item16">
                                                 Operations & Project Management
                                        <input
                                            type="checkbox"
                                            name="operationsprojectmanagement"
                                            id="item16"
                                            checked={this.state.operationsprojectmanagement}
                                            onChange={this.onChangeConsultingCustomerService}
                                            
                                        />
                                        </label>
                                         <label htmlFor="item17">
                                                   HR Management Team Bonding

                                        <input
                                            type="checkbox"
                                            name="hrmanagementteambonding"
                                            id="item17"
                                            checked={this.state.hrmanagementteambonding}
                                            onChange={this.onChangeConsultingHrManagementTeamBonding}
                                            
                                        />
                                        </label>
                                         <label htmlFor="item18">
                                                    Benefits & Compensation Survey
                                        <input
                                            type="checkbox"
                                            name="benefitscompensationsurvey"
                                            id="item18"
                                            checked={this.state.benefitscompensationsurvey}
                                            onChange={this.onChangeConsultingBenefitsCompensationSurvey}
                                            
                                        />
                                        </label>
                                         <label htmlFor="item19">
                                                       HR Audit
                                        <input
                                            type="checkbox"
                                            name="customerservice"
                                            id="item19"
                                            checked={this.state.hraudit}
                                            onChange={this.onChangeConsultingHrAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item20">
                                                       ISO Audit
                                        <input
                                            type="checkbox"
                                            name="isoaudit"
                                            id="item20"
                                            checked={this.state.isoaudit}
                                            onChange={this.onChangeConsultingIsoAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item21">
                                                        Facility Audit
                                        <input
                                            type="checkbox"
                                            name="facilityaudit"
                                            id="item21"
                                            checked={this.state.facilityaudit}
                                            onChange={this.onChangeConsultingFacilityAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item22">
                                                         Financial Audit
                                        <input
                                            type="checkbox"
                                            name="financialaudit"
                                            id="item22"
                                            checked={this.state.financialaudit}
                                            onChange={this.onChangeConsultingFinancialAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item23">
                                                          Creative Alternative Benefits
                                        <input
                                            type="checkbox"
                                            name="creativealternativebenefits"
                                            id="item23"
                                            checked={this.state.creativealternativebenefits}
                                            onChange={this.onChangeConsultingCreativeAlternativeBenefits}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item24">
                                                          Local/ International
                                        <input
                                            type="checkbox"
                                            name="localinternational"
                                            id="item24"
                                            checked={this.state.localinternational}
                                            onChange={this.onChangeConsultingHrAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item25">
                                                          Educational/ Credential Verification
                                        <input
                                            type="checkbox"
                                            name="eductionalcredentialverification"
                                            id="item25"
                                            checked={this.state.eductionalcredentialverification}
                                            onChange={this.onChangeConsultingEductionalCredentialVerification}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item26">
                                                           Professional Certification Verification
                                        <input
                                            type="checkbox"
                                            name="professionalcertificationverification"
                                            id="item26"
                                            checked={this.state.professionalcertificationverification}
                                            onChange={this.onChangeConsultingProfessionalCertificationVerification}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item27">
                                                            Guarantor Verification
                                        <input
                                            type="checkbox"
                                            name="guarantorverification"
                                            id="item27"
                                            checked={this.state.guarantorverification}
                                            onChange={this.onChangeConsultingGuarantorVerification}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item28">
                                                             KYC/Residence Verification
                                        <input
                                            type="checkbox"
                                            name="kycresidenceverification"
                                            id="item28"
                                            checked={this.state.kycresidenceverification}
                                            onChange={this.onChangeConsultingKYCResidenceVerification}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item29">
                                                              Previous Employer/Personal
                                        <input
                                            type="checkbox"
                                            name="previousemployerpersonal"
                                            id="item29"
                                            checked={this.state.previousemployerpersonal}
                                            onChange={this.onChangeConsultingPreviousEmployerPersonal}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item30">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item30"
                                            value={this.state.help}
                                            onChange={this.onChangeConsultingHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item31">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeConsultingCompanySize}>
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
export default ConsultingAdvisory;