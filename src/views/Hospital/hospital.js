import React, { Component } from 'react';
import {
    Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table
  } from 'reactstrap';
import axios from 'axios';

class Devices extends Component {
    state = {
        devices:[]
    };
    componentDidMount() {
        axios.get('http://52.220.190.223:3055/api/hospitals').then(response => {
            console.log(response);
            this.setState({devices:response.data});
        }).catch(error => {
            console.log(error);
        });
        
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Hospital List
                            </CardHeader>
                            <CardBody>
                            <Table hover bordered striped responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th>hospital Name</th>
                                            <th>email</th>
                                            <th>address</th>
                                            <th>speciality</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.devices.map((list,i)=>{
                                            return (
                                                <tr key={i}>
                                                    <td>{list.name}</td>
                                                    <td>{list.email}</td>
                                                    <td>{list.address}</td>
                                                    <td>{list.speciality[0].type}</td>
                                                    <td>
                                                        <Badge color="success">Active</Badge>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous tag="button"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink tag="button">2</PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Devices;