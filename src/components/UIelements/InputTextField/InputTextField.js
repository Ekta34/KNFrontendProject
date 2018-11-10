import React from 'react';
import './InputTextField.css';

class InputTextField extends React.Component {

    constructor(props){
        super(props);
        this.state = {error:""}
      }

    onChange = (e) => {
        let param = {};
        param[e.target.name] = e.target.value;
        this.props.onChange(param);
    }

    isValid = () => {
        if(this.props.value==null){
            this.setState({error:this.props.error});
            return true;
        }else{
            return false;
        }
    } 

    render(){
        return(
            <div className="inputTextFieldContainer">
                <label className="inputTextFieldLabel">{this.props.label}</label>
                <input type="text" className="inputField" />
            </div>
        );
    }
}

export default InputTextField;