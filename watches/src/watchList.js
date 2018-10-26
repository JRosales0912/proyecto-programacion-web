import * as React from 'react';
import './List.Ghosting.Example.scss';
import {Grid, Row} from 'react-bootstrap';
import { ListObject } from './listObject';
import { CardGroup } from 'reactstrap';

export class WatchList extends React.Component{
  constructor(props){
    super(props);
    this.state = { response: '',};
    this.callApi()
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const resp = await fetch('api/v1/watches/');
    const body = await resp.json();

    if (resp.status !== 200) throw Error(body.message);
    this.setState({ response: body});
  };
  render(){    
    return (
      <Grid align="center">        
        <br/>
        <Row>          
        <CardGroup>
          {
           Object.keys(this.state.response).map((itemList, i)=>(
            <ListObject itemList={this.state.response[i]} itemKey={this.state.response[i]._id}/>
            ))
          }
        </CardGroup>        
        <br/>
        </Row>
      </Grid>
    );
  }
}
