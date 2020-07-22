import React, { Component } from "react";
import axios from 'axios';

class HrOutsourcing extends Component{
    constructor(props){
        super(props);

        this.onChangeHrFullName = this.onChangeHrFullName.bind(this);
        this.onChangeHrWorkEmail = this.onChangeHrWorkEmail.bind(this);
        this.onChangeHrPhone = this.onChangeHrPhone.bind(this);
        this.onChangeHrOrganisation = this.onChangeHrOrganisation.bind(this);
        this.onChangeHrJobRole = this.onChangeHrJobRole.bind(this);
        this.onChangeHrAudit = this.onChangeHrAudit.bind(this);
        this.onChangeHrOrganizationalAnalysis = this.onChangeHrOrganizationalAnalysis.bind(this);
        this.onChangeHrPayrollServices = this.onChangeHrPayrollServices.bind(this);
        this.onChangeHrPreEmploymentServices = this.onChangeHrPreEmploymentServices.bind(this);
        this.onChangeHrInductionOnboarding = this.onChangeHrInductionOnboarding.bind(this);
        this.onChangeHrTemporaryPermanentStaffing = this.onChangeHrTemporaryPermanentStaffing.bind(this);
        this.onChangeHrDedicatedHRProfessional = this.onChangeHrDedicatedHRProfessional.bind(this);
        this.onChangeHrCommunications = this.onChangeHrCommunications.bind(this);
        this.onChangeHrLegalComplianceRecordKeeping = this.onChangeHrLegalComplianceRecordKeeping.bind(this);
        this.onChangeHrHealthSafetySecurity = this.onChangeHrHealthSafetySecurity.bind(this);
        this.onChangeHrCustomizedTraining = this.onChangeHrCustomizedTraining.bind(this);
        this.onChangeHrLeadershipTraining = this.onChangeHrLeadershipTraining.bind(this);
        this.onChangeHrTeamBuilding = this.onChangeHrTeamBuilding.bind(this);
        this.onChangeHrSuccessionPlanning = this.onChangeHrSuccessionPlanning.bind(this);
        this.onChangeHr360ReviewFeedback = this.onChangeHr360ReviewFeedback.bind(this);
        this.onChangeHrPerformanceManagement = this.onChangeHrPerformanceManagement.bind(this);
        this.onChangeHrRetentionStrategies = this.onChangeHrRetentionStrategies.bind(this);
        this.onChangeHrWorkplaceInvestigations = this.onChangeHrWorkplaceInvestigations.bind(this);
        this.onChangeHrCoachingMentorship = this.onChangeHrCoachingMentorship.bind(this);
        this.onChangeHrBenefitsCompensation  = this.onChangeHrBenefitsCompensation.bind(this);
        this.onChangeHrHelp = this.onChangeHrHelp.bind(this);
        this.onChangeHrCompanySize = this.onChangeHrCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            hraudit:'',
            organizationalanalysis:'',
            payrollservices:'',
            preemploymentservices:'',
            inductiononboarding:'',
            temporarypermanentstaffing:'',
            dedicatedhrprofessional:'',
            communications:'',
            legalcompliancerecordkeeping:'',
            healthsafetysecurity:'',
            customizedtraining:'',
            leadershiptraining:'',
            teambuilding:'',
            successionplanning:'',
            hr360ReviewFeedback:'',
            performancemanagement:'',
            retentionstrategies:'',
            workplaceinvestigations:'',
            coachingmentorship:'',
            benefitscompensation:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeHrFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeHrWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeHrPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeHrOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeHrJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
          onChangeHrAudit(e) {
            this.setState({hraudit: e.target.value})
          }
          onChangeHrOrganizationalAnalysis(e) {
            this.setState({organizationalanalysis: e.target.value})
          }
          onChangeHrPayrollServices(e) {
            this.setState({payrollservices: e.target.value})
          }
          onChangeHrPreEmploymentServices(e) {
            this.setState({preemploymentservices: e.target.value})
          }
          onChangeHrInductionOnboarding(e) {
            this.setState({inductiononboarding: e.target.value})
          }
          onChangeHrTemporaryPermanentStaffing(e) {
            this.setState({temporarypermanentstaffing: e.target.value})
          }
          onChangeHrDedicatedHRProfessional(e) {
            this.setState({dedicatedhrprofessional: e.target.value})
          }
          onChangeHrCommunications(e) {
            this.setState({communications: e.target.value})
          }
          onChangeHrLegalComplianceRecordKeeping(e) {
            this.setState({legalcompliancerecordkeeping: e.target.value})
          }
          onChangeHrHealthSafetySecurity(e) {
            this.setState({healthsafetysecurity: e.target.value})
          }
          onChangeHrCustomizedTraining(e) {
            this.setState({customizedtraining: e.target.value})
          }
          onChangeHrLeadershipTraining(e) {
            this.setState({leadershiptraining: e.target.value})
          }
          onChangeHrTeamBuilding(e) {
            this.setState({teambuilding: e.target.value})
          }
          onChangeHrSuccessionPlanning(e) {
            this.setState({successionplanning: e.target.value})
          }
          onChangeHr360ReviewFeedback(e) {
            this.setState({hr360ReviewFeedback: e.target.value})
          }
          onChangeHrPerformanceManagement(e) {
            this.setState({performancemanagement: e.target.value})
          }
          onChangeHrRetentionStrategies(e) {
            this.setState({retentionstrategies: e.target.value})
          }
          onChangeHrWorkplaceInvestigations(e) {
            this.setState({workplaceinvestigations: e.target.value})
          }
          onChangeHrCoachingMentorship(e) {
            this.setState({coachingmentorship: e.target.value})
          }

          onChangeHrBenefitsCompensation(e) {
            this.setState({benefitscompensation: e.target.value})
          }
        onChangeHrHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeHrCompanySize(e) {
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
            hraudit:this.state.hraudit,
            organizationalanalysis:this.state.organizationalanalysis,
            payrollservices:this.state.payrollservices,
            preemploymentservices:this.state.preemploymentservices,
            inductiononboarding:this.state.inductiononboarding,
            temporarypermanentstaffing:this.state.temporarypermanentstaffing,
            dedicatedhrprofessional:this.state.dedicatedhrprofessional,
            communications:this.state.communications,
            legalcompliancerecordkeeping:this.state.legalcompliancerecordkeeping,
            healthsafetysecurity:this.state.healthsafetysecurity,
            customizedtraining:this.state.customizedtraining,
            leadershiptraining:this.state.leadershiptraining,
            teambuilding:this.state.teambuilding,
            successionplanning:this.state.successionplanning,
            hr360ReviewFeedback:this.state.hr360ReviewFeedback,
            performancemanagement:this.state.performancemanagement,
            retentionstrategies:this.state.retentionstrategies,
            workplaceinvestigations:this.state.workplaceinvestigations,
            coachingmentorship:this.state.coachingmentorship,
            benefitscompensation:this.state.benefitscompensation,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
             axios.post('http://localhost:8000/api/hr/',learning,{
             headers: {'Content-Type' : 'application/json'}
           })
            console.log(`Schedule sent successfully!`);
            console.log(`hraudit: ${this.state.hraudit}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            hraudit:'',organizationalanalysis:'',payrollservices:'',preemploymentservices:'',inductiononboarding:'',
            temporarypermanentstaffing:'',dedicatedhrprofessional:'',communications:'',
            legalcompliancerecordkeeping:'',healthsafetysecurity:'',customizedtraining:'',
            leadershiptraining:'',teambuilding:'',successionplanning:'',hr360ReviewFeedback:'',
            performancemanagement:'',retentionstrategies:'',workplaceinvestigations:'',benefitscompensation:'',
            coachingmentorship:'',help:'',companysize:''})
            
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
                                            onChange={this.onChangeHrFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeHrWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeHrPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeHrOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeHrJobRole}>
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
                                    <h6>What Hr Outsourcing services are you interested in?</h6>
                                    <label htmlFor="item06">
                                    HR Audit
                                        <input
                                            type="checkbox"
                                            name="hraudit"
                                            id="item06"
                                            checked={this.state.hraudit}
                                            onChange={this.onChangeHrAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                    Organizational Analysis
                                        <input
                                            type="checkbox"
                                            name="organizationalanalysis"
                                            id="item07"
                                            checked={this.state.organizationalanalysis}
                                            onChange={this.onChangeHrOrganizationalAnalysis}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item08">
                                    Payroll Services
                                        <input
                                            type="checkbox"
                                            name="payrollservices"
                                            id="item08"
                                            checked={this.state.payrollservices}
                                            onChange={this.onChangeHrPayrollServices}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item09">
                                    Pre -Employment Services
                                        <input
                                            type="checkbox"
                                            name="basicstressmanagement"
                                            id="item09"
                                            checked={this.state.preemploymentservices}
                                            onChange={this.onChangeHrPreEmploymentServices}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                    Induction & Onboarding
                                        <input
                                            type="checkbox"
                                            name="inductiononboarding"
                                            id="item10"
                                            checked={this.state.inductiononboarding}
                                            onChange={this.onChangeHrInductionOnboarding}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item11">
                                    Temporary/Permanent Staffing
                                        <input
                                            type="checkbox"
                                            name="temporarypermanentstaffing"
                                            id="item11"
                                            checked={this.state.temporarypermanentstaffing}
                                            onChange={this.onChangeHrTemporaryPermanentStaffing}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item12">
                                    Dedicated HR Professional
                                        <input
                                            type="checkbox"
                                            name="dedicatedhrprofessional"
                                            id="item12"
                                            checked={this.state.dedicatedhrprofessional}
                                            onChange={this.onChangeHrDedicatedHRProfessional}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item13">
                                    Communications
                                        <input
                                            type="checkbox"
                                            name="communications"
                                            id="item13"
                                            checked={this.state.communications}
                                            onChange={this.onChangeHrCommunications}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item14">
                                    Legal Compliance/Record Keeping
                                        <input
                                            type="checkbox"
                                            name="legalcompliancerecordkeeping"
                                            id="item14"
                                            checked={this.state.legalcompliancerecordkeeping}
                                            onChange={this.onChangeHrLegalComplianceRecordKeeping}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item15">
                                    Health, Safety & Security
                                        <input
                                            type="checkbox"
                                            name="healthsafetysecurity"
                                            id="item15"
                                            checked={this.state.healthsafetysecurity}
                                            onChange={this.onChangeHrHealthSafetySecurity}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item16">
                                    Customized Training
                                        <input
                                            type="checkbox"
                                            name="customizedtraining"
                                            id="item16"
                                            checked={this.state.customizedtraining}
                                            onChange={this.onChangeHrCustomizedTraining}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item17">
                                    Legal Compliance/Record Keeping
                                        <input
                                            type="checkbox"
                                            name="legalcompliancerecordkeeping"
                                            id="item17"
                                            checked={this.state.legalcompliancerecordkeeping}
                                            onChange={this.onChangeHrLegalComplianceRecordKeeping}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item18">
                                    Leadership Training
                                        <input
                                            type="checkbox"
                                            name="leadershiptraining"
                                            id="item18"
                                            checked={this.state.leadershiptraining}
                                            onChange={this.onChangeHrLeadershipTraining}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item19">
                                    Team Building
                                        <input
                                            type="checkbox"
                                            name="teambuilding"
                                            id="item19"
                                            checked={this.state.teambuilding}
                                            onChange={this.onChangeHrTeamBuilding}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item20">
                                    Succession Planning
                                        <input
                                            type="checkbox"
                                            name="successionplanning"
                                            id="item20"
                                            checked={this.state.successionplanning}
                                            onChange={this.onChangeHrSuccessionPlanning}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item21">
                                    360 Review/Feedback
                                        <input
                                            type="checkbox"
                                            name="hr360ReviewFeedback"
                                            id="item21"
                                            checked={this.state.hr360ReviewFeedback}
                                            onChange={this.onChangeHr360ReviewFeedback}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item22">
                                    Performance Management
                                        <input
                                            type="checkbox"
                                            name="performancemanagement"
                                            id="item22"
                                            checked={this.state.performancemanagement}
                                            onChange={this.onChangeHrPerformanceManagement}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item23">
                                    Retention Strategies
                                        <input
                                            type="checkbox"
                                            name="retentionstrategies"
                                            id="item23"
                                            checked={this.state.retentionstrategies}
                                            onChange={this.onChangeHrRetentionStrategies}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item24">
                                    Workplace Investigations
                                        <input
                                            type="checkbox"
                                            name="workplaceinvestigations"
                                            id="item24"
                                            checked={this.state.workplaceinvestigations}
                                            onChange={this.onChangeHrWorkplaceInvestigations}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item25">
                                    Coaching/Mentorship
                                        <input
                                            type="checkbox"
                                            name="coachingmentorship"
                                            id="item25"
                                            checked={this.state.coachingmentorship}
                                            onChange={this.onChangeHrCoachingMentorship}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item26">
                                    Benefits & Compensation
                                        <input
                                            type="checkbox"
                                            name="benefitscompensation"
                                            id="item26"
                                            checked={this.state.benefitscompensation}
                                            onChange={this.onChangeHrBenefitsCompensation}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item15">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item15"
                                            value={this.state.help}
                                            onChange={this.onChangeHrHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeHrCompanySize}>
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
export default HrOutsourcing;