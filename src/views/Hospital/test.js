    import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    Row,
  } from 'reactstrap';
  import axios from 'axios';

  
class Test extends Component {
    user = this.props.match.params.id;
    pagename= "Add Device";
    state = {
        "name":"",
        "description":"",
        "status":"1000"
    }
    toggle() {
        this.setState({ name: this.state.name });
    }
    submitHandler(data1){
        if(!this.user){
            axios.post('http://52.77.201.220:3046/api/deviceCategories', data1).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }else{
            axios.put('http://52.77.201.220:3046/api/deviceCategories', data1).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }
        
    }
    componentDidMount() {
        if(this.user){
            this.pagename = "Edit Device";
            axios.get('http://52.77.201.220:3046/api/deviceCategories/'+this.user).then(response => {
                this.setState(response.data.result);
            }).catch(error => {
                console.log(error);
            });
        }
        
    }
  render() {
    return (
        <div className="Testclass">
            <Row>
                <Col xs="12" sm="12">
                    <Card>
                        <CardHeader>
                            <strong>{this.pagename}</strong>
                            <small> Form</small>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input value={this.state.name} type="text" id="name" onChange={(e)=> this.setState({name:e.target.value})}  placeholder="Enter your name" required />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="Description">Description</Label>
                                <Input value={this.state.description} onChange={(e)=> this.setState({description:e.target.value})} type="text" id="Description" placeholder="Enter your Description" required />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="ccmonth">Status</Label>
                                <Input type="select" name="ccmonth" id="ccmonth" value={this.state.status} onChange={(e)=> this.setState({status:e.target.value})}>
                                    <option value="1000">Active</option>
                                    <option value="1001">Inactive</option>
                                </Input>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <button onClick={()=>this.submitHandler(this.state)} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>
    );
  }
}

export default Test;