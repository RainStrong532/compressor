import React from 'react';
import {DOMAIN} from '../contants';

class InputComponent extends React.Component{
    
    render(){
        const fieldNames = [
            'lastModified',
            'lastModifiedDate',
            'name',
            'type',
            'size',
        ]
        let fields = [];
        const input = this.props.input;
        if(input){
            console.log("input props: ", this.props.input.lastModifiedDate);
        }
        fields = fieldNames.map((item, key) => {
            return(
                input
                ?
                (<div className="mt-3" key ={key}>
                    <b className="col-sm-5">{item}:</b>
                    <span className="col-sm-7">{ (item === 'size') ? input[item].toString() + 'KB' : input[item].toString() }</span>
                </div>)
                :
                (<div className="mt-3" key={key}>
                    <b className="col-sm-5">{item}:</b>
                    <span className="col-sm-7">{input? input[item].toString() : ""}</span>
                </div>)
            )
        })
        return(
                <div className="card mb-4" style={{height: '50%'}}>
                    <div className="card-body">
                        <h3 className="card-title">Input (original)</h3>
                        <hr/>
                        <div className="row" style={{height: '70%'}}>
                            <div className="col-md-4 d-flex overlay" style={{backgroundColor: 'rgba(0, 0, 0, 0.01)'}}>
                                <div className="w-100 text-center">
                                    <button type="button" className="close" style={{display: 'none'}} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <a href={input? DOMAIN + input.name:""} title="Click to see more!" target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer'}}>
                                        <img className="mw-100 image" src={input? DOMAIN + input.name:""} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    {fields}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default InputComponent;