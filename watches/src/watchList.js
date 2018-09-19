import * as React from 'react';
import logo from './images/watches/tag heuer-carrera2.jpg';
import {
  FocusZone,
  FocusZoneDirection
} from 'office-ui-fabric-react/lib/FocusZone';
import './List.Ghosting.Example.scss';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ListObject } from './listObject';

export class ListGhostingExample extends React.Component{

  
  render() {
    const { items } = this.props;
    
    return (
      <Grid>        
        <br/>
        <Row>
          {
            Object.keys(localStorage).map((itemList, i)=>(
              <ListObject itemList={localStorage.getItem(itemList)}/>
            ))
          }
        </Row>
      </Grid>
    );
  }
}
