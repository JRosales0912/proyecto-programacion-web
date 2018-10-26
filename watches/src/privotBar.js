import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { initializeIcons } from '@uifabric/icons';
import {WatchList} from "./watchList.js"
import {UpdateForm} from "./updateForm.js"
import {WatchHistory} from "./historia.js"


export class PivotBasic extends React.Component{
  render(){
    initializeIcons();
    return (
      <div align="center">
        <Pivot linkSize={PivotLinkSize.large}>
          <PivotItem 
            headerText="Inicio"
            linkText="I am deprecated. &quot;headerText&quot; overwrites me"
            headerButtonProps={{
              'data-order': 1,
              'data-title': 'My Files Title'
            }}
            itemIcon="Home"
          >
          <br/>
          <Label>Historia del Reloj</Label>
          <WatchHistory/> 
                  
          </PivotItem>
          <PivotItem linkText="Catalogo" itemIcon="Waffle">  
            <WatchList/>
          </PivotItem>
          <PivotItem linkText="Agregar al Catalogo" itemIcon="CircleAddition">
            <br/>
            <UpdateForm/>
          </PivotItem>
        </Pivot>
        
      </div>
    );
  }
}