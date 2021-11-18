import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import "../index.css";

function Location(props) {
    return(
        <div className="location" style={{marginTop:"20px"}}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Location</Form.Label> </Col> 
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} ><Form.Control type="text" className="wd-inputs"
                    placeholder="e.g. San Francisco, CA" onChange={props.handleLocationChange} value={props.location} name="location"/>
                </Col>
            </Row>
        </div>
    )
}
export default Location;