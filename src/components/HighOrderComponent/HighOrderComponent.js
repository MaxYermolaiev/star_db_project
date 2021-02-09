import React, { Component } from 'react';
import engine from "../../engine/engine";
import './item-details.css';
import ErrorButton from "../ErrorButton";
import DisplayError from "../onError";

/*id,
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity
}*/
let Record =({label,field,item})=>{
  return(
        <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
        </li>
  )
}
export {
    Record
};
export default class ItemDetails extends Component {
state={
  item:null,
  spiner:false,
  image:null,
  error:false
};

componentDidMount() {
this.updatePerson()
}
componentDidUpdate(prevProps){
  if(this.props.id!==prevProps.id)
    this.updatePerson()
}
  updatePerson(){
  this.setState({spiner:true})
  let {id} = this.props;
  if (!id){this.setState({spiner:false});return}
    this.props.getData(id)
       .then((item)=>{
         this.setState({item,spiner:false,image:this.props.getImage(id)})
       });
}
componentDidCatch(error, errorInfo) {
  this.setState({error:!this.state.error})
}

  render() {

//`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  //if(!this.state.person||this.state.spiner){
  //  return <Spinner/>
  //}
    if (!this.state.item) {
      return <span>Select a item from a list</span>;
    }
    if (this.state.error) {
      return <DisplayError/>
    }
    let {item,image}=this.state;
    let {name,gender,birthYear,
      eyeColor} = item;

    return (
      <div className="person-details card">
        <img className="person-image"
             alt="img"
          src={image} />

        <div className="card-body">
          <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(this.props.children,(child)=>{
                        return React.cloneElement(child,{item})
                       })
                    }

            </ul>
        </div>
      </div>
    )
  }
}
/*
 <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
            <li className="list-group-item">
              <span><ErrorButton/></span>
            </li>
          </ul>
 */