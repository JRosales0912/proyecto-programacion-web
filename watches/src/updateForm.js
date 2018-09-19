import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import {  Col, Form, FormGroup, ControlLabel, Thumbnail } from 'react-bootstrap';
import './List.Ghosting.Example.scss';
import logo from './images/watches/tag heuer-carrera2.jpg';

export class UpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {Marca:"",
                  Modelo:"",
                  Tipo:"",
                  Año:"",
                  Diametro:"",
                  id: 0,};
    this.saveObject = this.saveObject.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }
  
  saveObject(e){    
    this.state.id = this.state.id + 1;
    localStorage.setItem(this.state.id.toString(),JSON.stringify(this.state));
  }

  saveChange(event){
    const target = event.target;
    const name = target.id;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }
  render(){
    const style = {
        display: 'flex',
        justifyContent: 'center'
    } 
    
    //<MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
    return (
        <div className="docs-TextFieldExample" style={style}>
        <Col sm={6}>         
        <br/>       
        <Thumbnail src={logo} alt="242x200">
        <TextField id="Marca" label="Marca" underlined onChange={this.saveChange} required={true} />        
        <TextField id="Modelo" label="Modelo" underlined onChange={this.saveChange} required={true} />
        <TextField id="Año" label="Año" underlined onChange={this.saveChange} required={true} />        
        <TextField id="Tipo" label="Tipo" underlined onChange={this.saveChange} required={true} />
        <MaskedTextField id="Diametro" label="Diametro" onChange={this.saveChange} underlined mask="99 mm" />
        <br/>
        <DefaultButton
            primary={true}
            text="Agregar"
            allowDisabledFocus={true}
            onClick={this.saveObject}
        />
        </Thumbnail>
        </Col>
      </div>
    );
  }
}
