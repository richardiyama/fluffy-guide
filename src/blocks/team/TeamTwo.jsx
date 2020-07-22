import React, { Component} from "react";
import data from "./data";
import axios from 'axios';

class TeamTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
            teams: [],
            

        
        };
        
    }
   
    componentDidMount() {
       
        this.TeamsList()
       
      }
      TeamsList(){
        axios.get('http://eaz-roc.ng/api/teams/').then(res => res.data)
        .then(res => {
            this.setState({
                teams: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }
    render() {
    return (
        <div className="row">
            {this.state.teams.map(team => 
                <div className={`${team.column}`} key={team.id}>
                    <div className={`team ${team.teamStyle}`}>
                        <div className="thumbnail">
                            <img src={`http://eaz-roc.ng/images/Team/${team.team_image}`} alt=""/>
                        </div>
                        <div className="inner">
                       
                            <div className="content">
                                <h4 className="title">{team.title}</h4>
                                <p className="designation">{team.designation}</p>
                               
                            </div> 
                            
                                 
                            
                            
                            
                        </div>
                        
                    </div>
                    <div className="content">
                        <br/>
                        <p> {team.title}</p>
                           
                           
                           <p>  {team.designation}</p> 
</div>
                </div>
            )}
        </div>
    )
                                }
}

export default TeamTwo
