import React from 'react';

const FunComp = (props) => {
    return(
        <div className="funcomp">
            <img src={props.imgURL} alt="asa"  width="100px"/>
            <h2>{props.title}</h2>
        </div>
    );
}
export default FunComp;