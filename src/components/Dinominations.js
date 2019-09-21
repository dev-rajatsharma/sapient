import React,{Component} from 'react';

let style={
    mainContainer:{
        width: '50%',
        padding:'50px 10%'
    },
}

let totalDinominations = {
    '1': 0,
    '2': 0,
    '5': 0,
    '10': 0,
    '20': 0,
    '50': 0,
    '100': 0,
    '200': 0,
    '500': 0,
    '2000': 0,
}

const Dinominations = (props) =>{
    let {inputAmount} = props;
    let getDinomination = myClosure(inputAmount);
    Object.keys(totalDinominations).reverse().forEach(item=>{
        totalDinominations[item] = getDinomination(Number(item)).denomination;
    })
    return(
        <div style={style.mainContainer}>
            <h2>You will get following amount</h2>
            {getTable(totalDinominations)}
            <h4>Total notes dispensed: {Object.values(totalDinominations).reduce((total,num)=>total+num)}</h4>
        </div>
    )
}
export default Dinominations

function myClosure(inputAmount){
    let myInput = inputAmount;
    return function getDinomination (divisor){
        let denomination = Math.floor(myInput/divisor);
        let remainder = myInput % divisor;
        myInput = remainder;
        return{
            denomination,
            remainder
        }
    }
}

function getTable(totalDinominations){
    let currencyRows = []
    for(let key in totalDinominations){
        currencyRows.push(<p>{totalDinominations[key]} notes of Rs {key}</p>)
    }
    return currencyRows
}



