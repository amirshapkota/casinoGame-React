import React from 'react'
import "./widget.scss"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

export const Widget = ({ type }) => {

  let data;

  switch(type){
    case "crash":
      data={
        image:"./images/crash.jpg",
      };
      break;

    case "dice":
      data={
        image:"./images/dice.jpg",
      };
      break;

    case "mines":
      data={
        image:"./images/mines.jpg",
      };
      break;

    case "towers":
      data={
        image:"./images/towers.jpg",
      };
      break;
      
      default:
        break;
  }


  return (
    <div className='widget'>
      <div className="main">
        <span className='game'><img src={data.image} /></span>
      </div>
    </div>
  )
}
