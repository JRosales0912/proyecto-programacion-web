import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {  Col, Thumbnail } from 'react-bootstrap';
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
    this.cleanFields = this.cleanFields.bind(this);
  }
  
  saveObject(e){    
    this.setState({id: this.state.id + 1});
    localStorage.setItem(this.state.id.toString(),JSON.stringify(this.state));
    this.cleanFields();
  }

  cleanFields(){
    this.setState( {Marca:"",
                  Modelo:"",
                  Tipo:"",
                  Año:"",
                  Diametro:"99 mm"});
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
    
    const textFieldStyle = () => {
      return {
        root: {
          maxWidth: '200px',
          textAlign: 'center'
        }
      }
    };
    
    //<MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
    return (
        <div className="docs-TextFieldExample" style={style}>
        <Col sm={6}>         
        <br/>       
        <Thumbnail src={logo} alt="242x200">
        <TextField id="Marca" label="Marca" value={this.state.Marca} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>        
        <TextField id="Modelo" label="Modelo" value={this.state.Modelo} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>
        <TextField id="Año" label="Año" value={this.state.Año} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>        
        <TextField id="Tipo" label="Tipo" value={this.state.Tipo} underlined onChange={this.saveChange} required={true} styles={textFieldStyle} />
        <MaskedTextField id="Diametro" value={this.state.Diametro} defaultValue="" label="Diametro" onChange={this.saveChange} underlined mask="99 mm"styles={textFieldStyle}/> 
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
