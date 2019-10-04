import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class EditAccount extends Component{
    render(){
        return(
            <div>
                <form>
                    <Row>
                        <Col>
                            <label>
                                Name:
                            </label>
                            <input type="text" name="name" />
                        </Col>    
                    </Row>
                    <Row>
                        <Col>
                            <label>
                                Name:
                            </label>
                            <input type="text" name="name" />
                        </Col>    
                    </Row>
                    <Row>
                        <Col>
                            <label>
                                Name:
                            </label>
                            <input type="text" name="name" />
                        </Col>    
                    </Row>
                    <Row>
                        <Col>
                            <label>
                                Name:
                            </label>
                            <input type="text" name="name" />
                        </Col>    
                    </Row>
                    
                    <input type="submit" value="Submit" />
                    
                </form>
            </div>
        )
    }
}

export default EditAccount