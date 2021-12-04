import React, {Component} from 'react';
import BarcodePage from "../../barcode/BarcodePage";
import "./Frame.css"

class Frame extends Component {

    render() {

        let {styleNo, size, sl, barcode} = this.props;

        return <div style={{display:"inline-block"}}>
            <div style={{ marginRight:0 }} className="mt-1 mr-2">
                <div className="p-2">
                    <div>

                        <div style={{ borderRadius: "15px", border: "2px solid black", position:"relative" }}>
                            <div className="px-3 pt-3 pb-1" style={{height:"110px", zIndex:5}}>
                                <small className="p-0 top-text left-text">
                                    {String(sl).toUpperCase()}
                                </small>
                                <small className="p-0 top-text middle-text">
                                    {String(styleNo).toUpperCase()}
                                </small>
                                <small className="p-0 top-text right-text">
                                    {String(size).toUpperCase()}
                                </small>
                                <BarcodePage barcodeValue={barcode}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    }
}

export default Frame;
