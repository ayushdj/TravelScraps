import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import "../index.css";
function Website(props) {
    return(
        <div className="website" style={{marginTop:"15px"}}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Website</Form.Label> </Col>
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} ><Form.Control type="text" className="wd-inputs"

                                                                                     placeholder="www.apple.com" onChange={props.handleWebsite} value={props.website} name="location"/>
                </Col>
            </Row>
        </div>
    )
}
export default Website;