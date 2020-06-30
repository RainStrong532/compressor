import React from 'react'
import {FileDrop } from 'react-file-drop'

class FilePickerComponent extends React.Component{
    render(){
        console.log(this.props);
        
        return(
            <FileDrop onDrop = {(file, event) => {
                console.log("Dropping...", file, event);
                    this.props.handleFile(file[0], this.props.parent)
            }}>
            <div className="card bg-light mb-4" id="drop-area" change="change" dragover="dragover" drop="drop">
                <div className="card-body">
                    <div className="p-5 text-center">Drop image here or <label className="text-primary">browse... <input type="file" className="sr-only" id="file" accept="image/*" ref="input" onChange={
                        (e) => {
                            this.props.handleFile(e.target.files[0], this.props.parent)
                        }
                    }/></label></div>
                </div>
            </div>
            </FileDrop>
        )
    }
}

export default FilePickerComponent;