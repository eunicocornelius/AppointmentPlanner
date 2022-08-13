import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({data}) => {
  return (
    <div>
      {
        data.map((value,index)=>{
          return <Tile data={value} key={index}/>
        })
      }
    </div>
  );
};
