import React, {Component} from "react";
import Frame from "./frame/Frame";
import RosinBarcode from "./frame/RosinBarcode";


class Frames extends Component {

    generateFrames() {

        let {frame, from, to, style, size, barcode} = this.props.formData;

        let FrameName = '';

        //console.log(style);

        if (frame === 'Rosin') {
            FrameName = RosinBarcode;
        } else {
            FrameName = Frame;
        }


        let frames = [];

        let i=from;

        for (i; i<=to; i++) {

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
