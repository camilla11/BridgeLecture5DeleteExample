import React from 'react';

export default function House({
  name,
  owner,
  index,
  selectCurrentHouse,
  deleteCurrentHouse,
}) {
  // needs an arrow function here, not sure why , it needs to return something
  // so you need a function that calls the function selectCurrentHouse
  return <div onClick={()=> selectCurrentHouse(name, owner) }> {name}
  <button type="button" onClick={()=> deleteCurrentHouse(index) }>Delete</button>
   </div>;
}
