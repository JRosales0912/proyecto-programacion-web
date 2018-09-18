import * as React from 'react';
import logo from './images/watches/tag heuer-carrera2.jpg';
import {
  FocusZone,
  FocusZoneDirection
} from 'office-ui-fabric-react/lib/FocusZone';
import './List.Ghosting.Example.scss';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class ListGhostingExample extends React.Component{

  render() {
    const { items } = this.props;
    return (
      <Grid>        
        <br/>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={logo} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <DefaultButton primary={true}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton>Eliminar</DefaultButton>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={logo} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <DefaultButton primary={true}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton>Eliminar</DefaultButton>
                </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={logo} alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <DefaultButton primary={true}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton>Eliminar</DefaultButton>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
