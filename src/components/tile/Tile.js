import React from "react";

export const Tile = (objectArray) => {

  console.log(objectArray)

  const object = objectArray.contact

  console.log(object + ' single contact object ')

  
  let objectValues = Object.values(object);

  let titleDisplay = objectValues.map((e, i) => (
    <p key={i}>{e}</p>
  ))

;

  // <div className="tile-container">
  //     <p className="tile-tile"><b>{contactName}</b></p>
  //     <p className="tile">{contactPhone}</p>
  //     <p className="tile">{contactEmail}</p>
  //   </div>


  return (
    <div className="tile-container">
      <p className="tile-tile">Header</p>
      {titleDisplay}
    </div>
    
  );
};
