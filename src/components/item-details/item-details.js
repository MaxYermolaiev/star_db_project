import React, { Component } from 'react';
import './item-details.css';
import DisplayError from "../onError";


let Record =({label,field,item})=>{
  return(<li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
        </li>
  )};export {Record};

export default class ItemDetails extends Component {
state={
  item:null,
  spiner:false,
  image:null,
  error:false
};
componentDidMount() {this.updatePerson()}
componentDidUpdate(prevProps){
  if(this.props.itemId!==prevProps.itemId||
      this.props.getData!==prevProps.getData||
      this.props.getImage!==this.props.getImage
  )this.updatePerson()
}
updatePerson(){
  this.setState({spiner:true})

  let {itemId:id} = this.props;
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
    if (!this.state.item) {return <span>Select a item from a list</span>;}
    if (this.state.error) {return <DisplayError/>}
    let {item,image}=this.state;
    let {name} = item;

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
