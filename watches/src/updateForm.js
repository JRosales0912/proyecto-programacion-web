import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton} from 'office-ui-fabric-react/lib/Button';
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import './List.Ghosting.Example.scss';
import logo from './images/watches/logo.png';
import { Card, CardBody, CardText,CardImg, Col } from 'reactstrap';

export class UpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {Marca:"",
                  Modelo:"",
                  Tipo:"",
                  Año:"",
                  Diametro:"",
                  Imagen:""};
    this.saveObject = this.saveObject.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.cleanFields = this.cleanFields.bind(this);
    this.callAPI = this.callPOST.bind(this);
    this.getKey = this.getKey.bind(this);
  }
  
  callPOST()
  {
    fetch('/api/v1/watches/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      
    }).then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }



  saveObject(e){    
    //this.setState({id: this.state.id + 1});
    //localStorage.setItem(this.state.id.toString(),JSON.stringify(this.state));
    this.callPOST();
    //this.cleanFields();
  }

  cleanFields(){
    this.setState( {Marca:"",
                  Modelo:"",
                  Tipo:"",
                  Año:"",
                  Imagen:"",
                  Diametro:""});
  }
  saveChange(event){
    const target = event.target;
    const name = target.id;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  getKey(event){
      if(!event.target.textContent.includes("Tipo"))
      {
        this.setState({
          'Tipo' : event.target.textContent
        });
      }
  }

  render(){
    const style = {
        display: 'flex',
        justifyContent: 'center'
    } 
    const suffix = ' mm';
    const textFieldStyle = () => {
      return {
        root: {
          maxWidth: '200px',
          textAlign: 'center'
        }
      }
    };
    return (
        <div className="docs-TextFieldExample" style={style}>
        <Col sm={6}>         
        <br/>       
          <Card>
            <CardBody>
              {!this.state.Imagen && <CardImg top width={75} src={logo} />}
              {this.state.Imagen && <CardImg top width={350} src={this.state.Imagen} alt="Card image cap" />}
                <CardText>
                  <TextField id="Marca" label="Marca" value={this.state.Marca} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>        
                  <TextField id="Modelo" label="Modelo" value={this.state.Modelo} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>
                  <TextField id="Año" label="Año" value={this.state.Año} underlined onChange={this.saveChange} required={true} styles={textFieldStyle}/>        
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
                  <TextField id="Imagen" label="Imagen" value={this.state.Imagen} underlined onChange={this.saveChange} required={false} styles={textFieldStyle} />
                  <TextField id="Diametro" label="Diametro:" underlined value={this.state.Diametro} onChange={this.saveChange} styles={textFieldStyle}/>
                  
                  <br/>
                  <DefaultButton
                      primary={true}
                      text="Agregar"
                      allowDisabledFocus={true}
                      onClick={this.saveObject}
                  />
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}
