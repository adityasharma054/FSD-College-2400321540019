import React from 'react'
const Student = (props) => {
    return (
        <div style={{border: '2px solid red', height: '450px', width: '400px'}}>
            <h3>
                Student Record
            </h3>
            <h3>
                {props.name}
            </h3>
                 <img src={props.image} alt="Student" style={{width: '40%', height: 'auto'}} />
            <h3>
                Roll no: {props.rollNo}
            </h3>
            <h3>Class: {props.class}</h3>
        </div>
    )
}
export default Student;