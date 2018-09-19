import * as React from 'react';
import logo from './images/watches/tag heuer-carrera2.jpg';
import {
  FocusZone,
  FocusZoneDirection
} from 'office-ui-fabric-react/lib/FocusZone';
import './List.Ghosting.Example.scss';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export class ListObject extends React.Component{


  render() {
    this.item = JSON.parse(this.props.itemList);
    console.log(this.item);    
    console.log(this.item.Marca);
    return (
        <Col xs={6} md={4}>
            <Thumbnail src={logo} alt="242x200">
            <h3>{this.item.Marca}</h3>
            <p>{this.item.Modelo}</p>
            <p>{this.item.Año}</p>
            <p>{this.item.Tipo}</p>
            <p>{this.item.Diametro}</p>
            <p>
                <DefaultButton primary={true}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton>Eliminar</DefaultButton>
            </p>
            </Thumbnail>
        </Col>
    );
  }
}