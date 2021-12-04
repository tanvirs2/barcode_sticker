import React, {Component} from 'react';
import Barcode from 'react-barcode';


class BarcodePage extends Component {

    render() {
        return <div style={{position:"relative", top:"10px", zIndex: 1, overflow:"hidden"}}>
            <Barcode value={this.props.barcodeValue} height={100} margin={5} font="Roboto"/>
        </div>
    }
}

export default BarcodePage;
