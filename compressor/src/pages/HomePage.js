import React from 'react'
import CompressContainer from '../containers/CompressContainer'
import '../styleCommon/style.css'

class HomePage extends React.Component{
    render(){
        return(
            <div className="mb-4">
                <div className="jumbotron bg-primary text-white rounded-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md text-center">
                                <h1>Imgage Compressor</h1>
                                <i>Grroup 12</i>
                                <p className="mt-2">Vũ Văn Mạnh <span>Nguyễn Nhật Hoàng</span> <span>Ngô Thanh Tùng</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <CompressContainer {...this.props} />
            </div>
        )
    }
}

export default HomePage;