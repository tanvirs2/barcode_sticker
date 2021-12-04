import React, {Component} from 'react';
import BarcodePage from "../../barcode/BarcodePage";
import "./Frame.css"

class RosinBarcode extends Component {

    render() {

        let {
            //sl,
            barcode
        } = this.props;

        return <div style={{display:"inline-block"}}>
            <div style={{ marginRight:0 }} className="mt-1 mr-2">
                <div className="p-2">
                    <div>

                        <div style={{ border: "2px solid black", position:"relative" }}>
                            <div className="px-3 pt-3 pb-1" style={{height:"510px", zIndex:5}}>



                                <BarcodePage barcodeValue={barcode}/>

                                <table className="mt-5 w-100">
                                    <tbody>
                                        <tr>
                                            <th>
                                                <h2>Type</h2>
                                            </th>
                                            <th>
                                                <h2> : </h2>
                                            </th>
                                            <th>
                                                <h3>Master Item For E-Shop</h3>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <h2>Supplier</h2>
                                            </th>
                                            <th>
                                                <h2> : </h2>
                                            </th>
                                            <th>
                                                <h3 style={{letterSpacing: "-2px", fontStretch:"50%"}}>Rosin Import Export Company Limited</h3>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <h3 style={{letterSpacing: "-2px"}}>Season Years</h3>
                                            </th>
                                            <th>
                                                <h2> : </h2>
                                            </th>
                                            <th>
                                                <h3>Summer 2022</h3>
                                            </th>

                                        </tr>


                                    </tbody>
                                </table>



                                {/*******/}

                                <table border={1} className="text-center">
                                    <tbody>
                                        <tr>
                                            <td className="p-3"><h4>Article</h4></td>
                                            <td className="p-3"><h4>Color</h4></td>
                                            <td rowSpan={2}>
                                                <table className="child-tbl">
                                                    <tr>
                                                        <td colSpan={7} className="border-top-0 text-center"><h4>Size</h4></td>
                                                        <td className="border-top-0 text-center"><h4>Total</h4></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center"><h6>128</h6></td>
                                                        <td className="text-center"><h6>134</h6></td>
                                                        <td className="text-center"><h6>140</h6></td>
                                                        <td className="text-center"><h6>146</h6></td>
                                                        <td className="text-center"><h6>152</h6></td>
                                                        <td className="text-center"><h6>158</h6></td>
                                                        <td className="text-center"><h6>164</h6></td>
                                                        <td className="text-center border-bottom-0" rowSpan={2}><h4>11</h4></td>
                                                    </tr>

                                                    <tr>
                                                        <td><h6>2</h6></td>
                                                        <td><h6>2</h6></td>
                                                        <td><h6>2</h6></td>
                                                        <td><h6>2</h6></td>
                                                        <td><h6>1</h6></td>
                                                        <td><h6>1</h6></td>
                                                        <td><h6>1</h6></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><h6>S22FF3-0J31kg-33</h6></td>
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
