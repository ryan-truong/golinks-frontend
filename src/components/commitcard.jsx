import PropTypes from 'prop-types'
import { AiFillStar } from "react-icons/ai"
import { BiFork } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";

import './repocard.css'

const CommitCard = (props) => {
    return(
        <div className="card-container" >
            <div className ='name'>{props.name}</div>
            <div className ='description'>{props.description}</div>
            <div className = 'row1'>
                <BsKeyboard className = 'kb-icon'/>
                <div className = 'language'>{props.language}</div>
            </div>
            <div className = 'row'>
                <AiFillStar className = 'star-icon'/>
                <div className = 'star'>{props.star}</div>
                <BiFork className = 'fork-icon'/>
                <div className = 'fork'>{props.fork}</div>
            </div>
            <div className = 'date'>{props.date}</div>
        </div>
    )
}

export default CommitCard;

RepoCard.propTypes = {
    name: PropTypes.string,
    language: PropTypes.string,
    star: PropTypes.string,
    fork: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
}