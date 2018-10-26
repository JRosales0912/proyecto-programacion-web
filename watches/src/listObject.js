import * as React from 'react';
import logo from './images/watches/logo.png';
import './List.Ghosting.Example.scss';
import { Col} from 'react-bootstrap';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import { Label } from 'office-ui-fabric-react';
import { Card,CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

export class ListObject extends React.Component{
  
  constructor(props){
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleModifyClick = this.handleModifyClick.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.getKey = this.getKey.bind(this);
    this.state = { visible: true,
                    modify: false,
                    Marca:"",
                    Modelo:"",
                    Tipo:"",
                    Año:"",
                    Diametro:"",
                    Imagen:"",
                    id: 0,};
  }

  callPUT(id, data)
  {
    console.log(id);
    console.log(data);
    fetch('/api/v1/watches/'+id, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), // data can be `string` or {object}!
      
    }).then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  saveObject(e){
    const watch = {Marca:this.state.Marca,
                    Modelo:this.state.Modelo,
                    Tipo:this.state.Tipo,
                    Año:this.state.Año,
                    Diametro:this.state.Diametro,
                    Imagen:this.state.Imagen};
    this.callPUT(this.state.id,watch);  
    console.log('call put')
  }

  saveChange(event){
    try
    {
      const target = event.target;
      const name = target.id;
      const value = target.value;

      this.setState({
        [name]: value
      });
    }
    catch(e){ }
  }

  getKey(event){
    if(!event.target.textContent.includes("Tipo"))
    {
      this.setState({
        'Tipo': event.target.textContent
      });
    }
  }

  callDELETE(id)
  {
    fetch('/api/v1/watches/'+id, {method: 'DELETE'})
    .then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  handleDeleteClick(e) {
    const key = this.props.itemKey;
    this.callDELETE(key);
    console.log(key+ '   key');
    this.setState({visible:false})
  }

  handleModifyClick(e){  
    const button = e.target;
      if(this.state.modify)
      {
        this.setState(({modify: false}), () => {
        this.forceUpdate();
        this.saveChange();
        this.saveObject();
        button.innerHTML = "Modificar";})
      }
      else
      {
        this.setState(({modify: true}), () => {
        this.forceUpdate();
        button.innerHTML = "Guardar";})
      } 
  }
  componentWillMount() {
    this.item = this.props.itemList;
    this.key = this.props.itemKey;
    this.setState({Marca:this.item.Marca,
                  Modelo:this.item.Modelo,
                  Tipo:this.item.Tipo,
                  Año:this.item.Año,
                  Diametro:this.item.Diametro,
                  Imagen:this.item.Imagen,
                  id: this.item._id});
  }

  render() {
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
      <Col xs={6} md={4}id={this.key} style={style} >
        <Card>           
            {!this.state.Imagen && <CardImg top width={350} top height={450} src={logo}/>}
            {this.state.Imagen && <CardImg top width={350} top height={450} src={this.state.Imagen} alt="Card image cap" />}
            <CardBody>
            <CardTitle>{this.state.modify && <TextField  id="Marca" label="Marca:" underlined value={this.state.Marca} onChange={this.saveChange} styles={textFieldStyle}/>}
            {!this.state.modify && <Label>Marca {this.state.Marca}</Label>}
            </CardTitle>
            <CardText>
            {this.state.modify && <TextField  id="Modelo" label="Modelo:" underlined value={this.state.Modelo} onChange={this.saveChange} styles={textFieldStyle}/> }        
            {!this.state.modify && <Label>Modelo {this.state.Modelo}</Label>}
            {this.state.modify && <TextField  id="Año" label="Año:" underlined value={this.state.Año} onChange={this.saveChange} styles={textFieldStyle}/>}
            {!this.state.modify && <Label>Año {this.state.Año}</Label>}
            {
              this.state.modify && 
              <Dropdown
                      id="Tipo" 
                      onChange={this.getKey} 
                      required={true} 
                      styles={textFieldStyle}
                      selectedKey={this.state.Tipo ? this.state.Tipo.key : undefined}
                      placeHolder="Tipo"
                      options={[
                        { key: 'F', text: 'Formal' },
                        { key: 'C', text: 'Casual' },
                        { key: 'S', text: 'Sport' },
                      ]}
                    />
            }
            {!this.state.modify && <Label>Tipo {this.state.Tipo}</Label>}
            {this.state.modify && <TextField id="Diametro" label="Diametro:" underlined value={this.state.Diametro} onChange={this.saveChange} styles={textFieldStyle}/>}
            {!this.state.modify && <Label>Diametro {this.state.Diametro}</Label>}
            {this.state.modify && <TextField id="Imagen" label="Imagen:" underlined value={this.state.Imagen} onChange={this.saveChange} styles={textFieldStyle}/>}
            </CardText>
            <p>
                <DefaultButton primary={true} onClick={this.handleModifyClick} checked={this.state.modify}>Modificar</DefaultButton>
                &nbsp;
                <DefaultButton onClick={this.handleDeleteClick}>Eliminar</DefaultButton>
            </p>
            </CardBody>
        </Card>
        </Col>
    );
  }
}