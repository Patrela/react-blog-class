import React from "react";
import '../css/Testify.css';
function Testify(props) { 
    return (
        <div className='testimonial-container'>
          <div className='testimonial-image'>
            <img src={require(`../images/blog-${props.image}.jpg`)} alt={`${props.name}`} />             
          </div>
          <div className='testimonial-text-container'>
              <p className='testimonial-name'><strong>{props.name}</strong> in {props.country}</p>
              <p className='testimonial-role'>{props.role} at <strong>{props.enterprise}</strong></p>
              <p className='testimonial-text'>{props.testimonial}</p>
          </div>        
        </div>       
      );    
 }
export default Testify;
