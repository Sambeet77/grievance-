import React from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 class App extends React.Component {
  render() {
    return (
      <><h1>MY GRIEVANCE COMPLAINTS</h1><Form className='sachin'>
       <FormGroup className='Grievance'>
          <Label for="exampleDate">Date    </Label>
          <Input className='hell' type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>

        <FormGroup className='Grievance'>
          <Label for="exampleSelect">Grievance category</Label>
          <Input className='hell' type="select" name="select" id="exampleSelect">
            <option>-SELECT CATEGORY- </option>
            <option>PLUMBING GRIEVANCE</option>
            <option>CARPENTRY GRIEVANCE</option>
            <option>ELECTRIC MAINTENANCE GRIEVANCE</option>
            <option>CONSTRUCTION GRIEVANCE</option>
            <option>GENERAL MAINTENANCE GRIEVANCE</option>
          </Input>
        </FormGroup>

        <FormGroup className='Grievance'>
          <Label for="exampleText">Enter Description</Label>
          <Input className='hell' type="textarea" name="text" id="exampleText" placeholder='ENTER GRIEVANCE DESCRIPTION' />
        </FormGroup>
        <FormGroup className='Grievance'>
          <Label for="exampleFile">File</Label>
          <Input className='abcd' type="file" name="file" id="exampleFile" />
          <FormText color="muted">

          </FormText>
        </FormGroup>

        <Button className='hello'>Submit</Button>
      </Form>
      <h1>MY GRIEVANCE LIST</h1>
      </>
    );
  }
}

export default App;
