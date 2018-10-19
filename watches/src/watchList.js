import * as React from 'react';
import './List.Ghosting.Example.scss';
import {Grid, Row} from 'react-bootstrap';
import { ListObject } from './listObject';
import { CardGroup } from 'reactstrap';

export const WatchList = (props) => 
{
    return (
      <Grid align="center">        
        <br/>
        <Row>          
        <CardGroup>
          {
            Object.keys(localStorage).map((itemList, i)=>(
              <ListObject itemList={localStorage.getItem(itemList)} itemKey={itemList}/>
            ))
          }
        </CardGroup>        
        <br/>
        </Row>
      </Grid>
    );
}
