import React, {Component} from 'react';
import BarcodePage from "../../barcode/BarcodePage";
import "./Frame.css"

class RosinBarcode extends Component {

    render() {

        let {
            sl,
            barcode,
            styleNo
        } = this.props;

        //console.log(styleNo);

        function padLeadingZeros(num, size) {

            var s = num+"";

            while (s.length < size){
                s = "0" + s
            }

            return s;
        }

        return <div className="mx-auto" style={{display:"block", width:"517px",}}>
            <div style={{ marginRight:0 }} className="mt-1 mr-2">
                <div className="p-2">
                    <div>

                        <div style={{ border: "2px solid black", position:"relative" }}>
                            <div className="px-3 pt-3 pb-1" style={{height:"450px", width:"490px", zIndex:5}}>


                                <div className="ml-4">
                                    <BarcodePage barcodeValue={barcode+padLeadingZeros(sl, 6)}/>
                                </div>

                                <table className="mt-5 w-100">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h5>Type</h5>
                                            </th>
                                            <th>
                                                <h5> : </h5>
                                            </th>
                                            <th>
                                                <h5>{styleNo}</h5>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <h5>Supplier</h5>
                                            </th>
                                            <th>
                                                <h5> : </h5>
                                            </th>
                                            <th>
                                                <h5 style={{letterSpacing: "-1px", fontStretch:"50%"}}>Rosin Import Export Company Limited</h5>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <h5 style={{letterSpacing: "-1px"}}>Season Years</h5>
                                            </th>
                                            <th>
                                                <h5> : </h5>
                                            </th>
                                            <th>
                                                <h5>Summer 2022</h5>
                                            </th>

                                        </tr>


                                    </tbody>
                                </table>


                                {/*******/}

                                <table border={1} className="mt-4 mx-auto text-center">
                                    <tbody>
                                        <tr>
                                            <td className="p-3"><h5>Article</h5></td>
                                            <td className="p-3"><h5>Color</h5></td>
                                            <td rowSpan={2} className="p-0">
                                                <table border="1">
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={7} className="border-top-0 text-center"><h5>Size</h5></td>
                                                            <td className="border-top-0 text-center"><h5>Total</h5></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-center"><h6>128</h6></td>
                                                            <td className="text-center"><h6>134</h6></td>
                                                            <td className="text-center"><h6>140</h6></td>
                                                            <td className="text-center"><h6>146</h6></td>
                                                            <td className="text-center"><h6>152</h6></td>
                                                            <td className="text-center"><h6>158</h6></td>
                                                            <td className="text-center"><h6>164</h6></td>
                                                            <td className="text-center border-bottom-0" rowSpan={2}><h5>11</h5></td>
                                                        </tr>

                                                        <tr>
                                                            <td className="border-bottom-0 text-center"><h6>2</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>2</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>2</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>2</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>1</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>1</h6></td>
                                                            <td className="border-bottom-0 text-center"><h6>1</h6></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h6>S22FF3-0J31tg-33</h6></td>
                                            <td><h6>Yellow</h6></td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    }
}

export default RosinBarcode;
