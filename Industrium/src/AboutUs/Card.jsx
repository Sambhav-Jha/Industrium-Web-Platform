import PropTypes from 'prop-types'
import "./Card.css"
function Card(props){
    return(
        <div className="card">
            <img className="photu" src={props.image} alt={props.name} />
            <p className='n'>Name: {props.name}</p>
            <p>Branch: {props.branch}</p>
            <p>Batch of 2027</p>
            <p>Indian Institute of Technology Jodhpur</p>
            <p>About Me: {props.description}</p>
        </div>
    )
}
Card.PropTypes = {
    name: PropTypes.string,
    branch: PropTypes.string,
    description: PropTypes.string,
}
export default Card;