import React, {Component} from "react";
import Frame from "./frame/Frame";


class Frames extends Component {

    generateFrames() {

        /*console.log(1);
        console.log(this.props.formData);
        console.log(1);*/

        let {from, to, style, size, sizeDesc, barcode, topBarcode} = this.props.formData;

        let frames = [];

        let i=from;

        for (i; i<to; i++) {

            frames.push(<Frame key={i} sl={i} styleNo={style} size={size} sizeDesc={sizeDesc} barcode={barcode} topBarcode={topBarcode}/>);

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
