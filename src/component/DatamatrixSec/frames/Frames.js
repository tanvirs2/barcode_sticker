import React, {Component} from "react";
import Frame from "./frame/Frame";


class Frames extends Component {

    generateFrames() {

        let {from, to, style, size, barcode} = this.props.formData;

        let frames = [];

        let i=from;

        for (i; i<to; i++) {

            frames.push(<Frame key={i} sl={i} styleNo={style} size={size} barcode={barcode}/>);

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
