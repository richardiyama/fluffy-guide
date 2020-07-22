import React, { Component } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import axios from 'axios';


class Accordion01 extends Component {

    constructor(props) {
        super(props)
        this.state = {
        accordions:[]
    };
}

componentDidMount() {
        
    this.AccordionList();
   
  }
  
  AccordionList(){
    axios.get('http://eaz-roc.ng/api/accordions/').then(res => res.data)
    .then(res => {
        this.setState({
            accordions: res.data
        });
        
      })
      .catch((error) => {
        console.log(error);
      })
    }
    render(){
        return(
            <div className="container">
            {this.state.accordions.map(accordion =>
            <Accordion className="accodion-style--1" preExpanded={'0'} key={accordion.id}>
               
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {accordion.title_one}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>{accordion.content_one}</p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {accordion.title_two}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {accordion.content_two}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {accordion.title_three}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {accordion.content_three}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {accordion.title_four}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {accordion.content_four}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>

            </Accordion>

)}
                  </div>
           
        )
    }
}

export default Accordion01;





