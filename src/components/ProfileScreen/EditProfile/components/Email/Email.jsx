/*
    Importing the necessary react components
*/
import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import "../index.css";

/**
 * Function to create the email component
 * @param {*} props the props we pass to the function 
 * @returns the emaiil component
 */
function Email(props) {
    
    return(
        <div className="email">
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>
                        Email Address<span style={{color:"red", fontSize:"18px"}}>*</span></Form.Label></Col>
                </Row>    
                
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Control type="email" placeholder="name@example.com" className="wd-inputs" required={true}
                                      name="email" onChange={props.handleEmailChange} value={props.emailAddress}/>
                        <Form.Text style={{color:"rgb(125, 125, 125)"}}>
                            We'll never share your email with anyone else.</Form.Text>
                    </Col>
                </Row>

                {props.emailViolation ?
                    <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <span style={{color:"red", fontSize:"15px", marginLeft:"10px"}}>
                        *Invalid Email Address</span></Col>
                    </Row> : null
                }
            </Form.Group>
        </div>
        
    )
}

export default Email;