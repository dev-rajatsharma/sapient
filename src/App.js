import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';
import Dinominations from './components/Dinominations';

let style={
  mainContainer:{
    display: 'flex'
  }
}

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
            inputAmount : null,
            showDinominations: false
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.inputAmount){
        this.setState({showDinominations:true})
        }
    }
    handleChange = (e) =>{
        let inputAmount = e.target.value;
        if (!inputAmount){
            this.setState({inputAmount: null})
        }else if (Number.isInteger(Number(inputAmount))){
            this.setState({inputAmount})
        }
    }

    render(){
      return (
        <div style={style.mainContainer}>
          <InputForm
            inputAmount={this.state.inputAmount}
            handleChange={this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
          {this.state.showDinominations && <Dinominations inputAmount={this.state.inputAmount}/>}
        </div>
        )
    };
}

export default App;
