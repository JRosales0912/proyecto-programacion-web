import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import {  Col, Form, FormGroup, ControlLabel, Thumbnail } from 'react-bootstrap';
import './List.Ghosting.Example.scss';
import logo from './images/watches/tag heuer-carrera2.jpg';

export class UpdateForm extends React.Component{
  render(){
    const style = {
        display: 'flex',
        justifyContent: 'center'
    }  
    //<MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
    return (
        <div className="docs-TextFieldExample" style={style}>
        <br/>
        <Col sm={6}> 
        
        <br/>       
        <Thumbnail src={logo} alt="242x200">
        <TextField label="Marca" underlined required={true} />        
        <TextField label="Modelo" underlined required={true} />
        <TextField label="Año" underlined required={true} />        
        <TextField label="Tipo" underlined required={true} />
        <MaskedTextField label="Diametro"  underlined mask="99 mm" />
        <br/>
        <DefaultButton
            primary={true}
            text="Agregar"
            allowDisabledFocus={true}
          />
        </Thumbnail>
        </Col>
      </div>
    );
  }
}
