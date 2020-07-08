import React from 'react'
import FilePickerComponent from '../components/FilePickerComponent'
import OptionComponent from '../components/OptionComponent'
import InputComponent from '../components/InputComponent'
import OutputComponent from '../components/OutputComponent'
import {DOMAIN} from '../contants'
const Compressor = require('compressorjs')

class CompressContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isCompressed: false,
            strict: true,
            checkOrientation: true,
            maxWidth: 'Infinity',
            maxHeight: 'Infinity',
            minWidth: 0,
            minHeight: 0,
            width: undefined,
            height: undefined,
            quality: 0.8,
            mimeType: 'auto',
            convertSize: 0,
            input: null,
            output: null
        }
    }
    setOutput = (file) => {
        this.setState({output: file})
    }
    setCompressed = (value) => {
        this.setState({isCompressed: value})
    }
    handleFile = async(fl, parent) => {
        console.log("state: ", this.state);
        
        let file = (fl) ?fl : parent.state.input;
        if (!file || !file.name.match(/.(jpg|jpeg|png)$/gi)) {
            alert('Bạn chưa chọn ảnh hoặc ảnh chưa đúng định dạng: jpg, jpeg, png!')
            return;
        }

        // set properties
        Compressor.setDefaults(parent.state);

        //upload input image
        if(fl){
        let data = new FormData();
        data.append("avatar", file);
        await fetch(DOMAIN + "upload", {
                method: "POST",
                body: data
            })
            .then((response) => {
                console.log("response: ",response);
                
                return response.json()}
                )
            .then((res) => {
                parent.setState({input: file});
                return (res);
            })
            .catch((error) => {
               alert("Error: ", error)
                return;
            })
        }
        //upload output image

        await new Compressor(file, {
            // strict: this.state.strict,
            // checkOrientation: this.state.checkOrientation,
            // quality: this.state.quality,
            // maxWidth: this.state.maxWidth,
            // maxHeight: this.state.maxHeight,
            // minWidth: this.state.minWidth,
            // minHeight: this.state.minHeight,
            // width: this.state.width,
            // height: this.state.height,
            // convertSize: this.state.convertSize,
            // mimeType: this.state.mimeType,
            success(result) {
              const formData = new FormData();

              //convert output name file
              let names, name;
              names = result.name.split('.');
              names[names.length-1] = 'jpeg';
              name = names.join('.');
              console.log(name);
              
              formData.append('avatar', result, "blob " + name);

            // up load image compressed
            fetch(DOMAIN + 'upload', {
                method: 'POST' , 
                body: formData
            })
            .then((response) => {
                console.log("response: ",response);
                return response.json()}
                )
            .then((res) => {
                console.log("output res", res);
                parent.setState({isCompressed: true});

                //set state ouput
                let output = result;
                output.name = "blob " + name;
                parent.setState({output: result});   
                return (res);
            })
            .catch((error) => {
            alert("Error: ", error)
            return;
            })
            },
            error(err) {
            alert("Error: ",err.message);
            return;
            },
          });
        }
    render(){
        return(
            <div className="container">
                <h3>Playground</h3>
                <hr/>
                <div id="app">
                    <FilePickerComponent {...this.state}
                       handleFile = {this.handleFile}
                       parent = {this}
                    />
                    <div className="row">
                        <OptionComponent {...this.state}
                            parent  = {this}
                            handleFile = {this.handleFile}
                        />
                        <div className="col-lg-8 mb-4 pb-4">
                            <InputComponent {...this.state}
                                input={this.state.input}
                            />
                            <OutputComponent {...this.state}
                                output = {this.state.output}
                                input = {this.state.input}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompressContainer;