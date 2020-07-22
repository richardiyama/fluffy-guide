import React, { Component } from "react";
import { PaystackConsumer } from 'react-paystack';

import axios from 'axios';


class LearningDevelopment extends Component{
    constructor(props){
        super(props);

        this.onChangeLearningFullName = this.onChangeLearningFullName.bind(this);
        this.onChangeLearningWorkEmail = this.onChangeLearningWorkEmail.bind(this);
        this.onChangeLearningPhone = this.onChangeLearningPhone.bind(this);
        this.onChangeLearningOrganisation = this.onChangeLearningOrganisation.bind(this);
        this.onChangeLearningJobRole = this.onChangeLearningJobRole.bind(this);
        this.onChangeLearningMangementLeadership = this.onChangeLearningMangementLeadership.bind(this);
        this.onChangeLearningExceptionalCustomerservice = this.onChangeLearningExceptionalCustomerservice.bind(this);
        this.onChangeLearningPerformanceManagement = this.onChangeLearningPerformanceManagement.bind(this);
        this.onChangeLearningBasicStressmanagement = this.onChangeLearningBasicStressmanagement.bind(this);
        this.onChangeLearningPersonalEffectiviness = this.onChangeLearningPersonalEffectiviness.bind(this);
        this.onChangeLearningReportWritting = this.onChangeLearningReportWritting.bind(this);
        this.onChangeLearningTeamBuilding = this.onChangeLearningTeamBuilding.bind(this);
        this.onChangeLearningPresentationSkillsForManagers = this.onChangeLearningPresentationSkillsForManagers.bind(this);
        this.onChangeLearningEffectiveDelegationForManagers = this.onChangeLearningEffectiveDelegationForManagers.bind(this);
        this.onChangeLearningHelp = this.onChangeLearningHelp.bind(this);
        this.onChangeLearningCompanySize = this.onChangeLearningCompanySize.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fullname: '',
            workemail: '',
            phone: '',
            organisation: '',
            jobrole:'',
            mangementleadership:'',
            exceptionalcustomerservice:'',
            performancemanagement:'',
            basicstressmanagement:'',
            personaleffectiviness:'',
            reportwritting:'',
            teambuilding:'',
            presentationskillsformanagers:'',
            effectivedelegationformanagers:'',
            help:'',
            companysize:'',
            getamount:0

            
        };
    }
        onChangeLearningFullName(e) {
            this.setState({fullname: e.target.value})
          }
        
        onChangeLearningWorkEmail(e) {
            this.setState({workemail: e.target.value})
          }
        
        onChangeLearningPhone(e) {
            this.setState({phone: e.target.value})
          }
    
        onChangeLearningOrganisation(e) {
            this.setState({organisation: e.target.value})
          }
        onChangeLearningJobRole(e) {
            this.setState({jobrole: e.target.value})
          }
        
        onChangeLearningMangementLeadership(e) {
            this.setState({mangementleadership: e.target.value})
          }
        
        onChangeLearningExceptionalCustomerservice(e) {
            this.setState({exceptionalcustomerservice: e.target.value})
          }
    
        onChangeLearningPerformanceManagement(e) {
            this.setState({performancemanagement: e.target.value})
          }

        onChangeLearningBasicStressmanagement(e) {
            this.setState({basicstressmanagement: e.target.value})
          }
        
        onChangeLearningPersonalEffectiviness(e) {
            this.setState({personaleffectiviness: e.target.value})
          }
        
        onChangeLearningReportWritting(e) {
            this.setState({reportwritting: e.target.value})
          }
    
        onChangeLearningTeamBuilding(e) {
            this.setState({teambuilding: e.target.value})
          }
        onChangeLearningPresentationSkillsForManagers(e) {
            this.setState({presentationskillsformanagers: e.target.value})
          }
        
        onChangeLearningEffectiveDelegationForManagers(e) {
            this.setState({effectivedelegationformanagers: e.target.value})
          }
        
        onChangeLearningHelp(e) {
            this.setState({help: e.target.value})
          }
    
        onChangeLearningCompanySize(e) {
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
            mangementleadership:this.state.mangementleadership,
            exceptionalcustomerservice:this.state.exceptionalcustomerservice,
            performancemanagement:this.state.performancemanagement,
            basicstressmanagement:this.state.basicstressmanagement,
            personaleffectiviness:this.state.personaleffectiviness,
            reportwritting:this.state.reportwritting,
            teambuilding:this.state.teambuilding,
            presentationskillsformanagers:this.state.presentationskillsformanagers,
            effectivedelegationformanagers:this.effectivedelegationformanagers,
            help:this.state.help,
            companysize:this.state.companysize
             
            };
            axios.post('http://localhost:8000/api/learning/',learning,{
            headers: {'Content-Type' : 'application/json'}
           });
            console.log(`Schedule sent successfully!`);
           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on'
           && this.state.personaleffectiviness == 'on' && this.state.reportwritting == 'on'
           && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on'
           && this.state.personaleffectiviness == 'on' && this.state.reportwritting == 'on'
           && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 130000 + 165000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on'
           && this.state.personaleffectiviness == 'on' && this.state.reportwritting == 'on'
           && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '' )
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 130000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on'
           && this.state.personaleffectiviness == 'on' && this.state.reportwritting == 'on'
           && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = (210000 + 150000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == '')
           {
            this.state.getamount = 210000 * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 100000 +200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 +200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000  + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000  + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000  + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000+ 165000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 + 100000) * 100 
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 100000 + 130000 + 165000 + 100000) * 100  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 130000 + 165000 + 100000) * 100  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 165000 + 100000) * 100  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == '' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 100000) * 100  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == '' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 130000 + 165000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 165000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == '' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 165000 + 100000) * 100  
  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == '' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 100000) * 100  
  
            
           }

           if(this.state.mangementleadership  == 'on' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == '' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (210000 + 150000 + 100000 +200000 + 150000 + 100000 + 130000 + 100000) * 100   
  
            
           }

           if(this.state.mangementleadership  == '' && this.state.exceptionalcustomerservice == 'on' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (150000 + 100000 +200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == '' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == 'on' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (100000 +200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == '' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == 'on' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (200000 + 150000 + 100000 + 130000 + 165000 + 100000) * 100 
  
            
           }

           if(this.state.mangementleadership  == '' && this.state.exceptionalcustomerservice == '' 
           && this.state.performancemanagement == '' && this.state.basicstressmanagement == '' && this.state.personaleffectiviness == 'on' 
            && this.state.reportwritting == 'on' && this.state.teambuilding == 'on' && this.state.presentationskillsformanagers == 'on' && this.state.effectivedelegationformanagers == 'on')
           {
            this.state.getamount = (150000 + 100000 + 130000 + 165000 + 100000) * 100 
  
            
           }


      
            this.setState({fullname: '', workemail: '', phone: '',organisation: '',jobrole: '',
            mangementleadership:'',exceptionalcustomerservice:'',performancemanagement:'',
            basicstressmanagement:'',personaleffectiviness:'',reportwritting:'',teambuilding:'',
            presentationskillsformanagers:'',effectivedelegationformanagers:'',help:'',companysize:''})
            
          }
    
    render(){
        const config = {
            reference: (new Date()).getTime(),
            email:`${this.state.workemail}`,
            amount: `${this.state.getamount}`,
            publicKey: 'pk_live_d668c0206ba508b13066d7894fcb16213c3f796a',
        };
        
        
        
            const componentProps = {
                ...config,
                text: 'Paystack Button Implementation',
                onSuccess: () => null,
                onClose: () => null
            };
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
                                            onChange={this.onChangeLearningFullName}
                                            placeholder="Your Full Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="workemail"
                                            id="item02"
                                            value={this.state.workemail}
                                            onChange={this.onChangeLearningWorkEmail}
                                            placeholder="Your Work email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        
                                        <input
                                            type="text"
                                            name="phone"
                                            id="item03"
                                            value={this.state.phone}
                                            onChange={this.onChangeLearningPhone}
                                            placeholder="Your Phone Number"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <input
                                            type="text"
                                            name="organisation"
                                            id="item04"
                                            value={this.state.organisation}
                                            onChange={this.onChangeLearningOrganisation}
                                            placeholder="Your Organisation"
                                        />
                                    </label>
                                    <label htmlFor="item05">
                                        Job Role
                                    <select value={this.state.jobrole} onChange={this.onChangeLearningJobRole}>
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
                                    <h6>What Learning and Development services are you interested in?</h6>
                                    <label htmlFor="item06">
                                        Management Leadership
                                        <input
                                            type="checkbox"
                                            name="mangementleadership"
                                            id="item06"
                                            checked={this.state.mangementleadership}
                                            onChange={this.onChangeLearningMangementLeadership}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item07">
                                        Exceptional Customer Service
                                        <input
                                            type="checkbox"
                                            name="exceptionalcustomerservice"
                                            id="item07"
                                            checked={this.state.exceptionalcustomerservice}
                                            onChange={this.onChangeLearningExceptionalCustomerservice}
                                            
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
                                        Basic Stress Management
                                        <input
                                            type="checkbox"
                                            name="basicstressmanagement"
                                            id="item09"
                                            checked={this.state.basicstressmanagement}
                                            onChange={this.onChangeLearningBasicStressmanagement}
                                        
                                        />
                                    </label>
                                    <label htmlFor="item10">
                                        Personal Effectiviness
                                        <input
                                            type="checkbox"
                                            name="personaleffectiviness"
                                            id="item10"
                                            checked={this.state.personaleffectiviness}
                                            onChange={this.onChangeLearningPersonalEffectiviness}
                                            
                                        />
                                    </label>
                                    
                                    <label htmlFor="item11">
                                        Report Writting
                                        <input
                                            type="checkbox"
                                            name="reportwritting"
                                            id="item11"
                                            checked={this.state.reportwritting}
                                            onChange={this.onChangeLearningReportWritting}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item12">
                                        Team Building
                                        <input
                                            type="checkbox"
                                            name="teambuilding"
                                            id="item12"
                                            checked={this.state.teambuilding}
                                            onChange={this.onChangeLearningTeamBuilding}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item13">
                                        Presentation Skills For Managers
                                        <input
                                            type="checkbox"
                                            name="presentationskillsformanagers"
                                            id="item14"
                                            checked={this.state.presentationskillsformanagers}
                                            onChange={this.onChangeLearningPresentationSkillsForManagers}
                                            
                                        />
                                    </label>

                                    <label htmlFor="item14">
                                        Effective Delegation For Managers
                                        <input
                                            type="checkbox"
                                            name="effectivedelegationformanagers"
                                            id="item14"
                                            checked={this.state.effectivedelegationformanagers}
                                            onChange={this.onChangeLearningEffectiveDelegationForManagers}
                                            
                                        />
                                    </label>
                                    <label htmlFor="item15">
                                        <input
                                            type="text"
                                            name="help"
                                            id="item15"
                                            value={this.state.help}
                                            onChange={this.onChangeLearningHelp}
                                            placeholder="How else can we be of help? *"
                                        />
                                    </label>
                                    <label htmlFor="item16">
                                        Company Size
                                    <select value={this.state.companysize} onChange={this.onChangeLearningCompanySize}>
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

                       
            <PaystackConsumer {...componentProps} >
        {({initializePayment}) =><button  onClick={() => initializePayment()}className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Schedule Now</button>}    
            </PaystackConsumer>
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
export default LearningDevelopment;