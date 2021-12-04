import React, {Component} from 'react';
import BarcodePage from "../../barcode/BarcodePage";
//import thumbnail from "../../assets/img/codeimg.png";
import thumbnail1 from "../../assets/img/1.png";
import thumbnail2 from "../../assets/img/2.png";
import thumbnail3 from "../../assets/img/3.png";
import thumbnail4 from "../../assets/img/4.png";
import "./Frame.css"

class Frame extends Component {

    render() {

        let {size, sizeDesc, sl, barcode, topBarcode} = this.props;

        /*console.log(1);
        console.log(this.props);
        console.log(1);*/

        return <div style={{display:"inline-block"}}>
            <div style={{ marginRight:0 }} className="mt-1">
                <div className="p-2">
                    <div>
                        {/*<img src={thumbnail}/>*/}

                        <div style={{position: "relative", height:"157px"}}>
                            {/*<div style={{position: "absolute", height: "157px", background:"red", width: "382px"}}>

                            </div>*/}
                            <img src={thumbnail1} alt={''}/>

                            <div style={{position: "absolute", top: "30px", right: "49px"}}>
                                <h1>{size}</h1>
                            </div>

                            <div style={{position: "absolute", bottom: "13px", right: "30px"}}>
                                <h6>{sizeDesc}</h6>
                            </div>

                            <div style={{position: "absolute", top: "20px", left: "17px"}}>
                                <BarcodePage barcodeValue={barcode} enBarcode slNumber={sl} topBarcode={topBarcode}/>
                            </div>
                        </div>

                        <div style={{height:"132px"}}>
                            <img src={thumbnail2} alt={''}/>
                        </div>

                        <div style={{position: "relative", height:"276px"}}>
                            <img src={thumbnail3} alt={''}/>
                            <div style={{position: "absolute", top: "70px", right: "25px"}}>
                                <BarcodePage barcodeValue={barcode} enDataMatrix slNumber={sl}/>
                            </div>
                        </div>

                        <div style={{height:"165px"}}>
                            <img src={thumbnail4} alt={''}/>
                        </div>

                        {/*<div style={{ border: "2px solid black", position:"relative" }}>
                            <div className="px-3 pt-3 pb-1" style={{height:"730px", width:"382px", zIndex:5}}>



                                <small className="p-0 top-text middle-text">
                                    {String(styleNo).toUpperCase()}
                                </small>
                                <small className="p-0 top-text right-text">
                                    {String(size).toUpperCase()}
                                </small>
                                <BarcodePage barcodeValue={barcode}/>
                            </div>
                        </div>*/}

                    </div>
                </div>
            </div>


        </div>
    }
}

export default Frame;
