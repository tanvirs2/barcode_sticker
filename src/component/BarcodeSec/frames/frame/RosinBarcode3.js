import React, {Component} from 'react';
import "./Frame.css"

class RosinBarcode3 extends Component {

    componentDidMount() {
        let topBtnArea = document.querySelector("#top-btn-box");
        topBtnArea.querySelector("div").style.padding = "0";

        //topBtnArea.style.height = "20px";
        topBtnArea.style.cssText = "height: 24px";
    }

    render() {





        let {
            sl,
            barcode,
            styleNo,
            size
        } = this.props;

        //console.log(styleNo);

        function padLeadingZeros(num, size) {

            let s = num+"";

            while (s.length < size){
                s = "0" + s
            }

            return s;
        }

        let HeaderTagMid = "h3";
        let HeaderTagSmall = "h5";

        return <div className="mx-auto" style={{display:"block", height:"15.5cm", width:"17cm", border: "2px solid black", marginBottom: '4cm'}}>
            <div style={{ marginRight:0 }} className="mt-1 mr-2">
                <div className="p-2">
                    <div>

                        <div style={{ position:"relative" }}>
                            <div className="px-3 pt-3 pb-1" style={{zIndex:5}}>


                                <div className="mt-3 text-center" style={{marginBottom: "3rem"}}>
                                    <HeaderTagMid>{ barcode+padLeadingZeros(sl, 4) }</HeaderTagMid>
                                </div>

                                <div className="px-5">
                                    <table className="mt-5 w-100">
                                        <tbody>
                                        <tr>
                                            <th>
                                                <HeaderTagSmall>Type</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>TRANSPORT BOX</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px"}}>Inner Type</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>MASTER ITEM</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <HeaderTagSmall>Supplier</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px", fontStretch:"50%"}}>Rosin Import Export Company Limited</HeaderTagSmall>
                                            </th>

                                        </tr>



                                        <tr>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px"}}>Art.</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>{styleNo}</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px"}}>Season</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>Summer 2022</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px"}}>MI Type ID</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>{barcode}</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        <tr>
                                            <th>
                                                <HeaderTagSmall style={{letterSpacing: "-1px"}}>TTL MI</HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall> &nbsp; </HeaderTagSmall>
                                            </th>
                                            <th>
                                                <HeaderTagSmall>{size}</HeaderTagSmall>
                                            </th>

                                        </tr>

                                        </tbody>
                                    </table>


                                    {/*******/}

                                    <table className="mt-5 w-75">
                                        <tbody>
                                        <tr>

                                            <th>
                                                <h1>Carton.:No</h1>
                                            </th>

                                            <th>
                                                <h1>OF</h1>
                                            </th>

                                        </tr>

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    }
}

export default RosinBarcode3;
