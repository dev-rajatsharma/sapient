import React,{Component} from 'react';

let style={
    mainContainer:{
        width: '30%',
        padding:'50px 15vw'
    },
    getMoney:{
        backgroundColor: 'blue',
        color: 'white',
        margin: '5px'
    },
    inputBox: {
        margin: '5px',
        padding: '5px'
    }
}

const InputForm = (props) =>{
    let {inputAmount, handleChange, handleSubmit} = props;
    return(
        <div style={style.mainContainer}>
            <h1> Welcome to ATM</h1>
                <label htmlFor='amount'>Enter the Amount</label>
                <div><input id='amount' type='text' value={inputAmount} onChange={handleChange} style={style.inputBox} /></div>
                <div><input type='submit' value='Get Money' style={style.getMoney} onClick={handleSubmit} /></div>
        </div>
    )
}

export default InputForm