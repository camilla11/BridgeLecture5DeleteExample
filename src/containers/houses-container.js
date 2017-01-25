import React, {Component} from 'react';
import $ from 'jquery';
import Houses from '../components/house-list'

export default class HousesContainer extends Component {
   constructor() {
    super();

    this.state = {
      houses: [],
      currentHouse: 'No Current House',
      currentOwner: '',
      form : {
      name : '',},
    }

    this.selectCurrentHouse = this.selectCurrentHouse.bind(this);
    this.deleteCurrentHouse = this.deleteCurrentHouse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // binding the this that is inside the current constructor to the this inside the selectCurrentHouse
   }

   selectCurrentHouse(houseName, houseOwner){
     this.setState({
       currentHouse:houseName,
       currentOwner:houseOwner,
     });
   }

   deleteCurrentHouse(index){
     var housesTemp = this.state.houses;
     housesTemp.splice(index, 1);
     this.setState({
       houses: housesTemp,
     });
   }


   handleSubmit(event) {
        event.preventDefault();
        const newHouseName = this.state.form.name;
        this.setState({
          houses: [...this.state.houses, {
            name: newHouseName,
          }]
        });
        this.setState({
          form : {
          name : '',},
        });

     }

    handleChange(event) {
      this.setState({
        form: {
          name: event.target.value,
        }
      });
    }

   componentDidMount(){
    $.get('http://www.anapioficeandfire.com/api/houses?pageSize=20').then(response =>{
        console.log(response);
        this.setState({
          houses:response
        });
    });
   }

   render() {
     // to pass from componentDidMount to here, we use component state
     return (
       <div>

       <form onSubmit={this.handleSubmit}>
         <label>
           Create new house:
           <input type="text" value={this.state.form.name} onChange={this.handleChange}/>
         </label>
         <input type="submit" value="Submit" />
       </form>
        <div/>
       <div>
        <span style={{color:'red', fontSize: 30}}>Current House: {this.state.currentHouse}</span>
        </div>
        <span style={{color:'blue', fontSize: 20}}>Current Owner: {this.state.currentOwner}</span>
        <Houses selectCurrentHouse={this.selectCurrentHouse}
          deleteCurrentHouse={this.deleteCurrentHouse}
          houses={this.state.houses} />
        </div>
     );
   }
 }
