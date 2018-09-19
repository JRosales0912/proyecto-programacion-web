import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import {ListGhostingExample} from "./watchList.js"
import {UpdateForm} from "./updateForm.js"
import {WatchHistory} from "./historia.js"


export class PivotBasic extends React.Component{
  render(){
    
    var dict = []; // create an empty array
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

    Object.keys(localStorage).forEach(function(key){
      const item =localStorage.getItem(key);
      console.log(item);
      dict.push(item);
    });

    return (
      <div>
        <Pivot >
          <PivotItem 
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