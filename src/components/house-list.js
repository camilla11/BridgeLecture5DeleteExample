import React from 'react';
import House from './house-info';

export default function HouseList({
  selectCurrentHouse,
  deleteCurrentHouse,
  houses,
}){
  return (
    <div>
      {houses.map((house,index) => <House key={index}      
        name={house.name} owner={house.currentLord}
        index ={index}
        selectCurrentHouse={selectCurrentHouse}
        deleteCurrentHouse={deleteCurrentHouse}
        />) }
    </div>
  )
}
