import * as React from 'react';
import logo from './images/watches/tag heuer-carrera2.jpg';
import './List.Ghosting.Example.scss';
import { Col, Thumbnail } from 'react-bootstrap';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';

export class ListObject extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleModifyClick = this.handleModifyClick.bind(this)
    console.log("constructor");
    this.state = { visible: true,
                    modify: false};
  }
  handleDeleteClick(e) {
    const key = this.props.itemKey;
    localStorage.removeItem(key);
    this.setState({visible:false})
  }
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  handleModifyClick(e){  
    console.log(" ----------------Begin-----------------------"); 
    const button = e.target;
    console.log(this.state.modify + " before if");
      if(this.state.modify)
      {
        this.setState(({modify: false}), () => {
        console.log(this.state.modify + " inner false");
        console.log(this.state);
        this.forceUpdate();
        button.innerHTML = "Modificar";})
      }
      else
      {
        this.setState(({modify: true}), () => {
        console.log(this.state.modify+ " inner true"); 
        console.log(this.state); 
        this.forceUpdate();
        button.innerHTML = "Guardar";})
      }
      console.log(this.state);
      console.log(" ----------------End-----------------------"); 
  }
  render() {
    this.item = JSON.parse(this.props.itemList);
    this.key = this.props.itemKey;
    console.log("rendering");
    const style = {
      display: this.state.visible ? "initial": "none"
    }
    const textFieldStyle = () => {
      return {
        root: {
          maxWidth: '200px',
          textAlign: 'center'
        }
      }
    };
    return (
        <Col xs={6} md={4} id={this.key} style={style}>
            <Thumbnail src={logo} alt="242x200">
            <TextField  label="Marca" underlined  readOnly={this.state.modify} value={this.item.Marca} borderless={this.state.modify} styles={textFieldStyle}/>
            <TextField  label="Modelo" underlined readOnly={this.state.modify} value={this.item.Modelo} borderless={this.state.modify} styles={textFieldStyle}/>          
            <TextField  label="Año" underlined readOnly={this.state.modify} value={this.item.Año} borderless={this.state.modify} styles={textFieldStyle}/>
            <TextField  label="Tipo" underlined readOnly={this.state.modify} value={this.item.Tipo} borderless={this.state.modify} styles={textFieldStyle}/>
            <MaskedTextField label="Diametro" underlined readOnly={this.state.modify} value={this.item.Diametro} borderless={this.state.modify} styles={textFieldStyle} mask="99 mm"/>
            <span visible="false">{this.key}</span>
            <p>
                <DefaultButton primary={true} onClick={this.handleModifyClick} checked={this.state.modify}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton onClick={this.handleDeleteClick}>Eliminar</DefaultButton>
            </p>
            </Thumbnail>
        </Col>
    );
  }
}