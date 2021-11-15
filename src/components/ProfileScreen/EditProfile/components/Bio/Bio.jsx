/*
    Importing the necessary react components
*/
import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import "../index.css";

/**
 * Function to create the Bio component
 * @param {*} props the props passed to the function
 * @returns the bio component
 */
function Bio(props) {
    return(
        <div className="bio" style={{marginTop:"20px"}}>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label> Bio</Form.Label> </Col> 
                </Row>
               
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                        <Form.Control as="textarea" rows={5} className="wd-inputs"
                        placeholder="What would you like people to know about you?"
                                      onChange={props.handleBioChange} value={props.bio} name="bio"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        {props.bioViolation ? <Form.Text style={{color:"red"}}>{`${props.bioCharacterCount - 256} characters over the limit`}</Form.Text> :
                         <Form.Text style={{color:"rgb(125, 125, 125)"}}>{`${256 - props.bioCharacterCount}/256 characters remaining`}</Form.Text>}
                    </Col>
                </Row>
            </Form.Group>
        </div>
    )
}

export default Bio;