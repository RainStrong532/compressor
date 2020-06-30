import React from 'react';

class OptionComponent extends React.Component{
    render(){
        return(
            <div className="col-lg-4 mb-4">
                <div className="card" style={{height: '100%'}}>
                    <div className="card-body">
                        <h3 className="card-title">Options</h3>
                        <hr/>
                        <fieldset className="form-group">
                            <div className="form-check form-check-inline">
                                <input type="checkbox" checked={true} name="strict" className="form-check-input" id="inputStrict"
                                    onChange = {() => {
                                        this.props.parent.setState({strict: !this.props.strict})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                                <label className="form-check-label" htmlFor="inputStrict">strict</label>
                            </div>
                        </fieldset>
                        <fieldset className="form-group">
                            <div className="form-check form-check-inline">
                                <input type="checkbox" checked={true} name="checkOrientation" className="form-check-input" id="inputCheckOrientation"
                                    onChange = {() => {
                                        this.props.parent.setState({checkOrientation: !this.props.checkOrientation})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                                <label className="form-check-label" htmlFor="inputCheckOrientation">checkOrientation</label>
                            </div>
                        </fieldset>
                        <div className="form-group row">
                            <label htmlFor="inputMaxWidth" className="col-sm-5 col-form-label">maxWidth</label>
                            <div className="col-sm-7">
                                <input type="number" name="maxWidth" className="form-control" id="inputMaxWidth" placeholder="Infinity"
                                     onChange = {(e) => {
                                        this.props.parent.setState({maxWidth: parseFloat(e.target.value)})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputMaxHeight" className="col-sm-5 col-form-label">maxHeight</label>
                            <div className="col-sm-7">
                                <input type="number" name="maxHeight" className="form-control" id="inputMaxHeight" placeholder="Infinity"
                                    onChange = {(e) => {
                                        this.props.parent.setState({maxHeight: parseFloat(e.target.value)})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputMinWidth" className="col-sm-5 col-form-label">minWidth</label>
                            <div className="col-sm-7">
                                <input type="number" name="minWidth" className="form-control" id="inputMinWidth" placeholder="0"
                                    onChange = {(e) => {
                                        this.props.parent.setState({minWidth: parseFloat(e.target.value)})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputMinHeight" className="col-sm-5 col-form-label">minHeight</label>
                            <div className="col-sm-7">
                                <input type="number" name="minHeight" className="form-control" id="inputMinHeight" placeholder="0"
                                onChange = {(e) => {
                                    this.props.parent.setState({minHeight: parseFloat(e.target.value)})
                                    this.props.handleFile(undefined, this.props.parent)
                                }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputWidth" className="col-sm-5 col-form-label">width</label>
                            <div className="col-sm-7">
                                <input type="number" name="width" className="form-control" id="inputWidth" placeholder="undefined"
                                     onChange = {(e) => {
                                        this.props.parent.setState({width: parseFloat(e.target.value)})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputHeight" className="col-sm-5 col-form-label">height</label>
                            <div className="col-sm-7">
                                <input type="number" name="height" className="form-control" id="inputHeight" placeholder="undefined"
                                onChange = {(e) => {
                                    this.props.parent.setState({height: parseFloat(e.target.value)})
                                    this.props.handleFile(undefined, this.props.parent)
                                }}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputQuality" className="col-sm-5 col-form-label">quality</label>
                            <div className="col-sm-7">
                                <select className="form-control" name="quality" value={this.props.parent.state.quality} id="inputQuality"
                                 onChange = {(e) => {
                                     console.log(e.target.value, "value");
                                     
                                    this.props.parent.setState({quality: parseFloat(e.target.value)})
                                    this.props.handleFile(undefined, this.props.parent)
                                }}
                                >
                                    <option value="0">0</option>
                                    <option value="0.1">0.1</option>
                                    <option value="0.2">0.2</option>
                                    <option value="0.3">0.3</option>
                                    <option value="0.4">0.4</option>
                                    <option value="0.5">0.5</option>
                                    <option value="0.6">0.6</option>
                                    <option value="0.7">0.7</option>
                                    <option value="0.8">0.8</option>
                                    <option value="0.9">0.9</option>
                                    <option value="1">1</option>
                                    <option value="">NaN</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputMimeType" className="col-sm-5 col-form-label">mimeType</label>
                            <div className="col-sm-7">
                                <input type="text" name="mimeType" className="form-control" id="inputMimeType" placeholder="auto" value="auto"
                                    onChange = {(e) => {
                                        this.props.parent.setState({mimeType: e.target.value})
                                        this.props.handleFile(undefined, this.props.parent)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-0">
                            <label htmlFor="inputConvertSize" className="col-sm-5 col-form-label">convertSize</label>
                            <div className="col-sm-7">
                                <input type="number" name="convertSize" className="form-control" id="inputConvertSize" 
                                onChange = {(e) => {
                                    this.props.parent.setState({convertSize: parseFloat(e.target.value)})
                                    this.props.handleFile(undefined, this.props.parent)
                                }}
                                value = {this.props.parent.state.convertSize}
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default OptionComponent;