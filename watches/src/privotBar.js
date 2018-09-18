import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import {ListGhostingExample} from "./watchList.js"
import {UpdateForm} from "./updateForm.js"
import {WatchHistory} from "./historia.js"


export class PivotBasic extends React.Component{
  render(){
    
    var dict = []; // create an empty array

    dict.push( {name:"myfirstWatch", index:5});
    
    dict.push( {name:"seiko", index:8});
    
    dict.push( {name:"ffff", index:3});
    
    dict.push( {name:"d", index:11});

    return (
      <div>
        <Pivot >
          <PivotItem 
          className="ms-font-su"
            headerText="Inicio"
            linkText="I am deprecated. &quot;headerText&quot; overwrites me"
            headerButtonProps={{
              'data-order': 1,
              'data-title': 'My Files Title'
            }}
          >
          <br/>
          <Label>Historia del Reloj</Label>
          <WatchHistory/> 
                  
          </PivotItem>
          <PivotItem linkText="Catalogo">  
            <ListGhostingExample items={dict}/>
          </PivotItem>
          <PivotItem linkText="Agregar al Catalogo">
            <br/>
            <UpdateForm/>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}