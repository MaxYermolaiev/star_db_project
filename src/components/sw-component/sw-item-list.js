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
    return {getData:Engine.getAllStarships}
}
let MethodsAllPlanets=(Engine)=>{
    return {getData:Engine.getAllPlanets}
}

let PersonList= Wrapper(MethodsAllPeoples)(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)))
let PlanetList= Wrapper(MethodsAllPlanets)(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)))
let StrashipList= Wrapper(MethodsAllStarships)(displayItems(withChildrenFunction(ItemList,({name}) => <span>{name}</span>)))
export  {PersonList, PlanetList, StrashipList};