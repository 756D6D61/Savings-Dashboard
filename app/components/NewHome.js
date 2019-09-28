import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SideMenu from './NewHome/SideMenu'
import AddMoney from './NewHome/AddMoney'
import Categories from './NewHome/Categories'
import Graph from './NewHome/Graph'
import MonthlySavings from './NewHome/MonthlySavings'
import OneLine from './NewHome/OneLine'
import Welcome from './NewHome/Welcome'

class NewHome extends Component{
    render(){
        return(
            <div>
                <Row>
                <Col md={2}>
                    <SideMenu />
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={12}>
                            <Welcome />
                        </Col>
                        <Col md={4}>
                            
                            <Row>
                                <AddMoney />
                            </Row>
                            <Row>
                                <Categories />
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <OneLine />
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Graph />
                                </Col>
                                <Col md={6}>
                                    <MonthlySavings />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </div>
        )
    }
}

export default NewHome
