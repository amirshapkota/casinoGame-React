import React from 'react'
import "./widget.scss"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

export const Widget = ({ type }) => {

  let data;

  switch(type){
    case "crash":
      data={
        title:"CRASH",
      };
      break;

    case "spin":
      data={
        title:"SPIN",
      };
      break;

    case "wheel":
      data={
        title:"WHEEL",
      };
      break;

    case "lottery":
      data={
        title:"LOTTERY",
      };
      break;
      
      default:
        break;
  }


  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='link'>Play Now</span>
      </div>
      <div className="right">
        {<PlayCircleFilledWhiteOutlinedIcon  className='icon'/>}
      </div>
    </div>
  )
}
