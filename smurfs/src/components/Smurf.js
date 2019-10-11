import React from 'react'

export default function Smurf(props) {

    return (
        <div className='smurf'>
            <h1>{props.smurf.name}</h1>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button>Delete Smurf</button>
        </div>
    )
}
