import React from 'react';
import PropTypes from 'prop-types'
import "./IndustryCard.css"
function Card(props){
    return(
        <div className="indcard">
            <img className="phot" src={props.image} alt={props.name} />
            <p className='n'> {props.name}</p>
        </div>
    )
}
Card.PropTypes = {
    name: PropTypes.string
}
export default Card;