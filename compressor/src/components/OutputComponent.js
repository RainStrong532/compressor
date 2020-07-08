import React from 'react';
import {DOMAIN} from '../contants';

class OutputComponent extends React.Component{
    downloadData = (url) => {
		fetch(url)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'blob.jpeg';
					a.click();
				});
				//window.location.href = response.url;
		});
	}
    render(){
        const fieldNames = [
            'lastModified',
            'lastModifiedDate',
            'name',
            'type',
            'size',
        ]
        let fields = [];
        const output = this.props.output;
        const input = this.props.input;
        if(output){
            console.log("output props: ", this.props.output);
        }
        fields = fieldNames.map((item, key) => {
            return(
                output
                ?
                (<div className="mt-3" key ={key}>
                    <b className="col-sm-5">{item}:</b>
                    <span className="col-sm-7">{ (item === 'size') ? output[item].toString() + 'KB ( '+ ((1-output.size/input.size)*100).toFixed(2)+ '% off )' : output[item].toString() }</span>
                </div>)
                :
                (<div className="mt-3" key={key}>
                    <b className="col-sm-5">{item}:</b>
                    <span className="col-sm-7">{output? output[item].toString() : ""}</span>
                </div>)
            )
        })
        let button = null;
        if(this.props.isCompressed){
            button =
            <>
            <p className="mt-2">Click on the image to see more!</p>
            <button onClick = {() => {
                this.downloadData(DOMAIN + output.name)
            }} className="btn btn-warning mt-2 d-block" title="Download image" download>Download</button>
            </>
        }
        console.log("AAAA:   ", this.props.isCompressed);
        
        return(
                <div className="card mb-4" style={{height: '50%'}}>
                    <div className="card-body">
                        <h3 className="card-title">Output</h3>
                        <hr/>
                        <div className="row" style={{height: '70%'}}>
                            <div className="col-md-4 d-flex overlay" style={{backgroundColor: this.props.isCompressed ? 'none' : 'rgba(0, 0, 0, 0.01)'}}>
                                <div className="w-100 text-center d-flex align-items-center" style={{flexDirection: 'column'}}>
                                    <button type="button" className="close" style={{display: 'none'}} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <a href={output ? DOMAIN + output.name : ""} title="Click to see more!" target="_blank" rel="noopener noreferrer">
                                        <img className="mw-100 image" src={output ? DOMAIN + output.name : ""} alt=""/>
                                    </a>
                                    {button}
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

export default OutputComponent;