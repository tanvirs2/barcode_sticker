import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";
import {Formik} from "formik";
import Frames from "./component/BarcodeSec/frames/Frames";
import DataMatrixFrames from "./component/DatamatrixSec/frames/Frames";
import ReactToPrint from 'react-to-print';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function BarcodeComp() {

    let componentRef;

    let [formData, setFormData] = useState({
        from: 1766230960,
        to: 1766230960,
        style:'WHJ55224',
        size:'xl',
        barcode: '100076572',
        printable: false
    });

    useEffect(()=>{
        if (!formData.printable) {
            if (formData.from < formData.to) {
                setFormData({...formData, printable:true})
            }
        }

    }, [formData])

    return (
        <Container>
            <Formik initialValues={formData}
                /*validate={values => {
                    const errors = {};
                    if (!values.from) {
                        errors.from = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}*/
                    onSubmit={(values, { setSubmitting }) => {

                        //console.log(values);
                        setSubmitting(false);

                        setFormData(values); //my define State
                    }}
            >
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                         isSubmitting,
                     }) => (


                        <form onSubmit={handleSubmit}>

                            <InputGroup className="my-3 ">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>From</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    type="number"
                                    name="from"
                                    onChange={handleChange} required
                                    onBlur={handleBlur}
                                    value={values.from}
                                />
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>To</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    type="number"
                                    name="to"
                                    min={formData.from}
                                    onChange={handleChange} required
                                    onBlur={handleBlur}
                                    value={values.to}
                                />
                                {formData.printable &&

                                <InputGroup.Prepend>
                                    &nbsp;
                                    <ReactToPrint
                                        trigger={() => {
                                            return <Button variant="success" type="button" disabled={isSubmitting}>Print</Button>;
                                        }}
                                        content={() => componentRef}
                                    />

                                </InputGroup.Prepend>}
                            </InputGroup>


                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text >Style</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" type="text" name="style" onChange={handleChange} required onBlur={handleBlur} value={values.style}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Size</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="size" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.size}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Barcode</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="barcode" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.barcode}/>

                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <Button type="submit" disabled={isSubmitting}>Create Barcode Sticker</Button>
                                </InputGroup.Prepend>

                            </InputGroup>

                        </form>
                    )}
            </Formik>



            <Frames formData={formData} ref={el => (componentRef = el)} />


        </Container>
    );
}

function DatamatrixComp() {

    let componentRef;

    let [formData, setFormData] = useState({
        from: 673765,
        to: 673769,
        style:'WHJ55224',
        size:'164',
        sizeDesc:'164-82-65',
        barcode: '100076572',
        topBarcode: '2620002854593',
        printable: false
    });

    useEffect(()=>{
        if (!formData.printable) {
            if (formData.from < formData.to) {
                setFormData({...formData, printable:true})
            }
        }

    }, [formData])

    return (
        <Container fluid>
            <Formik initialValues={formData}
                /*validate={values => {
                    const errors = {};
                    if (!values.from) {
                        errors.from = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}*/
                    onSubmit={(values, { setSubmitting }) => {

                        //console.log(values);
                        setSubmitting(false);

                        setFormData(values); //my define State
                    }}
            >
                {
                    ({
                         values,
                         errors,
                         touched,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                         isSubmitting,
                     }) => (


                        <form onSubmit={handleSubmit}>

                            <InputGroup className="my-3 ">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>From</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    type="number"
                                    name="from"
                                    onChange={handleChange} required
                                    onBlur={handleBlur}
                                    value={values.from}
                                />
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>To</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    type="number"
                                    name="to"
                                    min={formData.from}
                                    onChange={handleChange} required
                                    onBlur={handleBlur}
                                    value={values.to}
                                />
                                {formData.printable &&

                                <InputGroup.Prepend>
                                    &nbsp;
                                    <ReactToPrint
                                        trigger={() => {
                                            return <Button variant="success" type="button" disabled={isSubmitting}>Print</Button>;
                                        }}
                                        content={() => componentRef}
                                    />

                                </InputGroup.Prepend>}
                            </InputGroup>


                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text >Top Barcode</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" type="text" name="topBarcode" onChange={handleChange} required onBlur={handleBlur} value={values.topBarcode}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Size (Размер)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="size" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.size}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Size Description</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="sizeDesc" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.sizeDesc}/>


                            </InputGroup>

                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text >Style</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" type="text" name="style" onChange={handleChange} required onBlur={handleBlur} value={values.style}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Size</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="size" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.size}/>
                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Barcode</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" name="barcode" type="text" onChange={handleChange} required onBlur={handleBlur} value={values.barcode}/>

                                &nbsp;
                                &nbsp;
                                <InputGroup.Prepend>
                                    <Button type="submit" disabled={isSubmitting}>Create Barcode Sticker</Button>
                                </InputGroup.Prepend>

                            </InputGroup>

                        </form>
                    )}
            </Formik>



            <DataMatrixFrames formData={formData} ref={el => (componentRef = el)} />


        </Container>
    );
}

function App() {


  return (
      <Router>
          <div>
              <Container>
                  <div>
                      <Link to="/barcode">
                          <Button>Barcode</Button>
                      </Link>

                      &nbsp;

                      <Link to="/datamatrix">
                          <Button>QRcode</Button>
                      </Link>
                  </div>
              </Container>

              <Switch>
                  <Route path="/" exact>
                      <BarcodeComp/>
                  </Route>

                  <Route path="/barcode" exact>
                      <BarcodeComp/>
                  </Route>

                  <Route path="/datamatrix" exact>
                      <DatamatrixComp/>
                  </Route>

              </Switch>

          </div>
      </Router>
  );
}

export default App;
