import React, { Component } from "react";
import axios from 'axios';

class FacilityManagement extends Component{
    constructor(props){
        super(props);

        this.onChangeFacilityFullName = this.onChangeFacilityFullName.bind(this);
        this.onChangeFacilityWorkEmail = this.onChangeFacilityWorkEmail.bind(this);
        this.onChangeFacilityPhone = this.onChangeFacilityPhone.bind(this);
        this.onChangeFacilityOrganisation = this.onChangeFacilityOrganisation.bind(this);
        this.onChangeFacilityJobRole = this.onChangeFacilityJobRole.bind(this);
        this.onChangeFacilityPowerAudit = this.onChangeFacilityPowerAudit.bind(this);
        this.onChangeFacilityTestingCommissioning = this.onChangeFacilityTestingCommissioning.bind(this);
        this.onChangeFacilityAssetRegisterCoding = this.onChangeFacilityAssetRegisterCoding.bind(this);
        this.onChangeFacilitySpaceOccupancy = this.onChangeFacilitySpaceOccupancy.bind(this);
        this.onChangeFacilityBuildingMaintainance = this.onChangeFacilityBuildingMaintainance.bind(this);
        this.onChangeFacilityGroundsMaintainance = this.onChangeFacilityGroundsMaintainance.bind(this);
        this.onChangeFacilityEnvironmentManagement = this.onChangeFacilityEnvironmentManagement.bind(this);
        this.onChangeFacilityCivilEngineering = this.onChangeFacilityCivilEngineering.bind(this);
        this.onChangeFacilityCleaning = this.onChangeFacilityCleaning.bind(this);
        this.onChangeFacilityConcierge = this.onChangeFacilityConcierge.bind(this);
        this.onChangeFacilityWelfareFacilities = this.onChangeFacilityWelfareFacilities.bind(this);
        this.onChangeFacilityLabourSupply = this.onChangeFacilityLabourSupply.bind(this);
        this.onChangeFacilityPhysicalGuard = this.onChangeFacilityPhysicalGuard.bind(this);
        this.onChangeFacilitySurveillanceCCTV = this.onChangeFacilitySurveillanceCCTV.bind(this);
        this.onChangeFacilityTechnicalInstallation = this.onChangeFacilityTechnicalInstallation.bind(this);
        this.onChangeFacilityEmergencyManagement = this.onChangeFacilityEmergencyManagement.bind(this);
        this.onChangeFacilityHelp = this.onChangeFacilityHelp.bind(this);
        this.onChangeFacilityCompanySize = this.onChangeFacilityCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            poweraudit:'',
            testingcommissioning:'',
            assetregistercoding:'',
            spaceoccupancy:'',
            buildingmaintainance:'',
            groundsmaintainance:'',
            environmentmanagement:'',
            facilitycivilengineering:'',
            cleaning:'',
            concierge:'',
            welfareFacilities:'',
            laboursupply:'',
            facilityphysicalguard:'',
            surveillancecctv:'',
            technicalinstallation:'',
            emergencymanagement:'',
            help:'',
            companysize:''

            
        };
    }
        onChangeFacilityFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeFacilityWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeFacilityPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeFacilityOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeFacilityJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
          onChangeFacilityPowerAudit(e) {
            this.setState({poweraudit: e.target.value})
          }
          onChangeFacilityTestingCommissioning(e) {
            this.setState({testingcommissioning: e.target.value})
          }
          onChangeFacilityAssetRegisterCoding(e) {
            this.setState({assetregistercoding: e.target.value})
          }
          onChangeFacilitySpaceOccupancy(e) {
            this.setState({spaceoccupancy: e.target.value})
          }
          onChangeFacilityBuildingMaintainance(e) {
            this.setState({buildingmaintainance: e.target.value})
          }
          onChangeFacilityGroundsMaintainance(e) {
            this.setState({groundsmaintainance: e.target.value})
          }
          onChangeFacilityEnvironmentManagement(e) {
            this.setState({environmentmanagement: e.target.value})
          }
          onChangeFacilityCivilEngineering(e) {
            this.setState({facilitycivilengineering: e.target.value})
          }
          onChangeFacilityCleaning(e) {
            this.setState({cleaning: e.target.value})
          }
          onChangeFacilityConcierge(e) {
            this.setState({concierge: e.target.value})
          }
          onChangeFacilityWelfareFacilities(e) {
            this.setState({welfareFacilities: e.target.value})
          }
          onChangeFacilityLabourSupply(e) {
            this.setState({laboursupply: e.target.value})
          }
          onChangeFacilityPhysicalGuard(e) {
            this.setState({facilityphysicalguard: e.target.value})
          }
          onChangeFacilitySurveillanceCCTV(e) {
            this.setState({surveillancecctv: e.target.value})
          }
          onChangeFacilityTechnicalInstallation(e) {
            this.setState({technicalinstallation: e.target.value})
          }
          onChangeFacilityEmergencyManagement(e) {
            this.setState({emergencymanagement: e.target.value})
          }

          onChangeFacilityHelp(e) {
            this.setState({help: e.target.value})
          }
    
         onChangeFacilityCompanySize(e) {
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
            poweraudit:this.state.poweraudit,
            testingcommissioning:this.state.testingcommissioning,
            assetregistercoding:this.state.assetregistercoding,
            spaceoccupancy:this.state.spaceoccupancy,
            buildingmaintainance:this.state.buildingmaintainance,
            groundsmaintainance:this.state.groundsmaintainance,
            environmentmanagement:this.state.environmentmanagement,
            facilitycivilengineering:this.state.facilitycivilengineering,
            cleaning:this.state.cleaning,
            concierge:this.state.concierge,
            welfareFacilities:this.state.welfareFacilities,
            laboursupply:this.state.laboursupply,
            facilityphysicalguard:this.state.facilityphysicalguard,
            surveillancecctv:this.state.surveillancecctv,
            technicalinstallation:this.state.technicalinstallation,
            emergencymanagement:this.state.emergencymanagement,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
                axios.post('http://localhost:8000/api/facilities/',learning,{
                headers: {'Content-Type' : 'application/json'}
            })
            console.log(`Schedule sent successfully!`);
            console.log(`poweraudit: ${this.state.poweraudit}`);
           
          
      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            poweraudit:'',testingcommissioning:'',assetregistercoding:'',spaceoccupancy:'',
            buildingmaintainance:'',groundsmaintainance:'',environmentmanagement:'',facilitycivilengineering:'',
            cleaning:'',concierge:'',welfareFacilities:'',laboursupply:'',facilityphysicalguard:'',
            surveillancecctv:'',technicalinstallation:'',emergencymanagement:'',help:'',companysize:''})
            
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
                                            onChange={this.onChangeFacilityFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeFacilityWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeFacilityPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeFacilityOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeFacilityJobRole}>
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
                                    <h6>What Facility Management services are you interested in?</h6>
                                    <label htmlFor="item06">
                                       Facility /Power Audit
                                        <input
                                            type="checkbox"
                                            name="poweraudit"
                                            id="item06"
                                            checked={this.state.poweraudit}
                                            onChange={this.onChangeFacilityPowerAudit}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                    Testing & Commissioning
                                        <input
                                            type="checkbox"
                                            name="testingcommissioning"
                                            id="item07"
                                            checked={this.state.testingcommissioning}
                                            onChange={this.onChangeFacilityTestingCommissioning}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item08">
                                    Asset Register/ Coding
                                        <input
                                            type="checkbox"
                                            name="assetregistercoding"
                                            id="item08"
                                            checked={this.state.assetregistercoding}
                                            onChange={this.onChangeFacilityAssetRegisterCoding}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item09">
                                    Space/Occupancy Services
                                        <input
                                            type="checkbox"
                                            name="spaceoccupancy"
                                            id="item09"
                                            checked={this.state.spaceoccupancy}
                                            onChange={this.onChangeFacilitySpaceOccupancy}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                    Building Maintenance
                                        <input
                                            type="checkbox"
                                            name="buildingmaintainance"
                                            id="item10"
                                            checked={this.state.buildingmaintainance}
                                            onChange={this.onChangeFacilityBuildingMaintainance}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item11">
                                    Grounds Maintenance
                                        <input
                                            type="checkbox"
                                            name="groundsmaintainance"
                                            id="item11"
                                            checked={this.state.groundsmaintainance}
                                            onChange={this.onChangeFacilityGroundsMaintainance}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item12">
                                    Environment Management
                                        <input
                                            type="checkbox"
                                            name="environmentmanagement"
                                            id="item12"
                                            checked={this.state.environmentmanagement}
                                            onChange={this.onChangeFacilityEnvironmentManagement}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item13">
                                    Civil Engineering
                                        <input
                                            type="checkbox"
                                            name="facilitycivilengineering"
                                            id="item14"
                                            checked={this.state.facilitycivilengineering}
                                            onChange={this.onChangeFacilityCivilEngineering}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item14">
                                    Cleaning Services
                                        <input
                                            type="checkbox"
                                            name="cleaning"
                                            id="item14"
                                            checked={this.state.cleaning}
                                            onChange={this.onChangeFacilityCleaning}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item15">
                                    Concierge
                                        <input
                                            type="checkbox"
                                            name="concierge"
                                            id="item15"
                                            checked={this.state.concierge}
                                            onChange={this.onChangeFacilityConcierge}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                    Welfare Facilities
                                        <input
                                            type="checkbox"
                                            name="cleaning"
                                            id="item16"
                                            checked={this.state.welfareFacilities}
                                            onChange={this.onChangeFacilityWelfareFacilities}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item17">
                                    Labour Supply
                                        <input
                                            type="checkbox"
                                            name="laboursupply"
                                            id="item17"
                                            checked={this.state.laboursupply}
                                            onChange={this.onChangeFacilityLabourSupply}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item18">
                                    Physical Guard
                                        <input
                                            type="checkbox"
                                            name="facilityphysicalguard"
                                            id="item18"
                                            checked={this.state.facilityphysicalguard}
                                            onChange={this.onChangeFacilityPhysicalGuard}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item19">
                                    Surveillance/ CCTV
                                        <input
                                            type="checkbox"
                                            name="surveillancecctv"
                                            id="item19"
                                            checked={this.state.surveillancecctv}
                                            onChange={this.onChangeFacilitySurveillanceCCTV}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item20">
                                    Technical Installation
                                        <input
                                            type="checkbox"
                                            name="technicalinstallation"
                                            id="item20"
                                            checked={this.state.technicalinstallation}
                                            onChange={this.onChangeFacilityTechnicalInstallation}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item21">
                                    Emergency Management
                                        <input
                                            type="checkbox"
                                            name="surveillancecctv"
                                            id="item19"
                                            checked={this.state.emergencymanagement}
                                            onChange={this.onChangeFacilityEmergencyManagement}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item22">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item15"
                                            value={this.state.help}
                                            onChange={this.onChangeFacilityHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item23">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeFacilityCompanySize}>
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
export default FacilityManagement;