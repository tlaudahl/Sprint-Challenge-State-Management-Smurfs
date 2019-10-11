import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import Smurf from './Smurf';

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    return (
        <div className='smurfsContainer'>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf smurf={smurf} key={smurf.id} addSmurf={props.addSmurf}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(SmurfList);