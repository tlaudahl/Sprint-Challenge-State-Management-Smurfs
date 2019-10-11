import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const AddSmurfForm = props => {
    var [newSmurf, setNewSmurf] = useState({});

    const onClick = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
    }

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name] : e.target.value
        })
    }




    return (
        <div>
            <form onSubmit={onClick}>
            <input type='text' label='Name' name='name' placeholder='Name' onChange={handleChange} />
            <input type='text' label='Age' name='age' placeholder='Age' onChange={handleChange} />
            <input type='text' label='Height' name='height' placeholder='Height' onChange={handleChange} />
            <button type='submit'>Add</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {

}

export default connect(null, { addSmurf })(AddSmurfForm);
