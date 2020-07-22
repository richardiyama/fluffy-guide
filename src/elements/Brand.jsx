import React, { Component } from "react";
import axios from 'axios';

class Brand extends Component{

    constructor(props) {
        super(props)
        this.state = {
            brands: []
           

        };
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    componentDidMount() {
        this.BrandList();
       
      }
      
      BrandList(){
        axios.get('http://eaz-roc.ng/api/brands/').then(res => res.data)
        .then(res => {
            this.setState({
                brands: res.data
            });
            
          })
          .catch((error) => {
            console.log(error);
          })
    }
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                  
                <ul className={`brand-list ${branstyle}`} >
                {this.state.brands.map(brand =>
                    <li key={brand.id}>
                        <img src={`http://eaz-roc.ng/images/brand/${brand.brand_image}`} alt="Logo Images"/>
                    </li>
                   
                   )}
                </ul>
              
            </React.Fragment>
        )
    }
}
export default Brand;