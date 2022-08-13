import React from "react";

export const Tile = ({data}) => {
  const dataList = Object.values(data);
  return (
    <div className="tile-container">
      {
        dataList.map((value, index)=>{
          if(index === 0){
            return <p className="tile-title" key={index} >{value}</p>
          }else{
            return <p className="tile" key={index} >{value}</p>
          }
        })
      }
    </div>
  );
};
