import React, {Component} from "react";
import Frame from "./frame/Frame";
import RosinBarcode from "./frame/RosinBarcode";
import RosinBarcode2 from "./frame/RosinBarcode2";
import RosinBarcode3 from "./frame/RosinBarcode3";


class Frames extends Component {

    generateFrames() {

        let {frame, from, to, style, size, barcode} = this.props.formData;

        let FrameName = '';
        let counterVal = 1;

        //console.log(style);

        if (frame === 'Rosin') {
            FrameName = RosinBarcode;
        } else if (frame === 'Rosin2') {
            FrameName = RosinBarcode2;
        } else if (frame === 'Rosin3') {
            counterVal = 7;
            FrameName = RosinBarcode3;
        } else {
            FrameName = Frame;
        }


        let frames = [];

        let i=from;

        for (i; i<=to; i += counterVal) {

            frames.push(<FrameName key={i} sl={i} styleNo={style} size={size} barcode={barcode}/>);

        }

        return frames;
    }

    render() {
        return (
                <div className="mt-1">
                    {this.generateFrames()}
                </div>
            );
    }
}

export default Frames
