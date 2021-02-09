import ItemDetails,{Record} from '../item-details';
import Wrapper from '../HighOrderComponent/HighOrderComponent-Details';
import React from "react";

let MethodsServisePlanet=(Engine)=>{
    return {getData:Engine.getPlanet,getImage:Engine.getPlanetImg}
}
let MethodsServiseStarship=(Engine)=>{
    return {getData:Engine.getStarship,getImage:Engine.getStarshipImg}
}
let MethodsServisePerson=(Engine)=>{
    return {getData:Engine.getPerson,getImage:Engine.getPersonImg}
}
let Person=(props)=>{
    return(
        <ItemDetails{...props}>
            {<Record field="gender" label="Gender"/>}
            {<Record field="eyeColor" label="Eye Color"/>}
        </ItemDetails>
)}
let Planet=(props)=>{
    return(
        <ItemDetails{...props}>
            {<Record field="gender" label="Gender"/>}
            {<Record field="eyeColor" label="Eye Color"/>}
        </ItemDetails>
    )}
let Straship=(props)=>{
    return(
        <ItemDetails{...props}>
            {<Record field="gender" label="Gender"/>}
            {<Record field="eyeColor" label="Eye Color"/>}
        </ItemDetails>
    )}

let PlanetDetails=Wrapper(Planet,MethodsServisePlanet)
let StrashipDetails=Wrapper(Straship,MethodsServiseStarship)
let PersonDetails=Wrapper(Person,MethodsServisePerson);
export {PersonDetails,PlanetDetails,StrashipDetails}


