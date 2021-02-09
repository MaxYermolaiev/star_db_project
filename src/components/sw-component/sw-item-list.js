import ItemList from "../item-list";
import React from "react";
import displayItems from "../HighOrderComponent";
import Wrapper from "../HighOrderComponent/HighOrderComponent-Details";

let withChildrenFunction=(Wrap,renderItem)=>{
    return (props)=>{
        return(<Wrap {...props}>{renderItem}</Wrap>)}
}
let MethodsAllPeoples=(Engine)=>{
    return {getData:Engine.getAllPeoples}
}
let MethodsAllStarships=(Engine)=>{
    return {getData:Engine.getAllPlanets}
}
let MethodsAllPlanets=(Engine)=>{
    return {getData:Engine.getAllStarships}
}

let PersonList= Wrapper(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)),MethodsAllPeoples)
console.log(PersonList)
let PlanetList= Wrapper(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)),MethodsAllPlanets)
let StrashipList= Wrapper(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)),MethodsAllStarships)
export  {PersonList, PlanetList, StrashipList};