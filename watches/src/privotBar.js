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
    localStorage.setItem("99",JSON.stringify({Marca:"Rolex",
                                              Modelo:"Aquamaster",
                                              Tipo:"Casual",
                                              Año:"2019",
                                              Diametro:"42 mm"}));                                  
    localStorage.setItem("89",JSON.stringify({Marca:"Omega",
                                              Modelo:"Aquaracer",
                                              Tipo:"Formal",
                                              Año:"2015",
                                              Diametro:"46 mm"}));
    
    localStorage.setItem("909",JSON.stringify({Marca:"Bulova",
                                              Modelo:"CURV",
                                              Tipo:"Casual",
                                              Año:"2017",
                                              Diametro:"38 mm"}));
                                              
    localStorage.setItem("1010",JSON.stringify({Marca:"Rolex",
    Modelo:"Aquamaster",
    Tipo:"Casual",
    Año:"2019",
    Diametro:"42 mm"}));                                  
localStorage.setItem("88",JSON.stringify({Marca:"Omega",
    Modelo:"Aquaracer",
    Tipo:"Formal",
    Año:"2015",
    Diametro:"46 mm"}));

localStorage.setItem("77",JSON.stringify({Marca:"Bulova",
    Modelo:"CURV",
    Tipo:"Casual",
    Año:"2017",
    Diametro:"38 mm"}));

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