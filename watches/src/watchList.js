import * as React from 'react';
import './List.Ghosting.Example.scss';
import {Grid, Row} from 'react-bootstrap';
import { ListObject } from './listObject';

export const WatchList = (props) => 
{
    return (
      <Grid align="center">        
        <br/>
        <Row>
          {
            Object.keys(localStorage).map((itemList, i)=>(
              <ListObject itemList={localStorage.getItem(itemList)} itemKey={itemList}/>
            ))
          }
        </Row>
      </Grid>
    );
}
