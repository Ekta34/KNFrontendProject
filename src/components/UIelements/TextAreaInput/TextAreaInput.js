import React from 'react'
import './TextAreaInput.scss'
import Textarea from 'react-textarea-autosize';

class TextAreaInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {error:""}
    }

    onChange = (e) => {
        let params = {};
        params[e.target.name] = e.target.value;
        this.props.onChange(params);   
    }

    render(){
        return(
            <div className="textAreaContainer">
                <div className="textAreaLabel">{this.props.label}</div>
                
                    <Textarea   minRows={this.props.minRows}
                                maxRows={this.props.maxRows}
                                className="textAreaBox"
                    />
                </div>
        )
    }
}

export default TextAreaInput