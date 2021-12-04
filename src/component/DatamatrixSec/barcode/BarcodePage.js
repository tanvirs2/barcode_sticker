import React, {Component} from 'react';
import Barcode from 'react-barcode';
import bwipjs from 'bwip-js';


class BarcodePage extends Component {

    componentDidMount() {

        let {slNumber} = this.props;

        //console.log(this.props)

        try {
            // The return value is the canvas element

            bwipjs.toCanvas('datamatrix'+slNumber, {
                bcid:        'datamatrix',       // Barcode type
                text:        '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',    // Text to encode
                scale:       2,               // 3x scaling factor
                height:      23,              // Bar height, in millimeters
                includetext: true,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            });

        } catch (e) {
            // `e` may be a string or Error object
        }
    }

    render() {
        let {slNumber, topBarcode} = this.props

        return (
            <div className="App">
                {
                    this.props.enBarcode ? <div><Barcode value={topBarcode} displayValue={false} format={"EAN13"} height={73} margin={5}/> <div style={{fontSize:"22px"}}><b>{topBarcode}</b></div> </div>  : ''
                }

                {
                    this.props.enDataMatrix ? (
                        <div>
                            <canvas id={"datamatrix" + this.props.slNumber}></canvas>
                            <br/>
                            <br/>
                            <div style={{fontSize:"15px", position: "absolute", top: "140px", right: "19px"}}>

                                <div style={{fontSize:"11px"}}><b>21-00{slNumber}</b></div>

                                <b>21-00{slNumber}</b>
                            </div>
                        </div>) : ''
                }

            </div>
        );
    }
}

export default BarcodePage;
