import React from 'react'
import {Link} from "react-router-dom";

function welcome() {
  return (
    <div>
        <div className='Welcome'><span>Markete Hoş Geldiniz</span></div>
        <div className='linkler'> 
          <div className='link1'><Link to="/home">Markete Git</Link> </div>
        </div>
        <style jsx="true">{`
        .Welcome{
            position: absolute;
            left: 60vh;
            top: 50vh;
            margin-left: -10vw;
            margin-top: -20vh;
            color: black;
            background-color: white;
            width:60.5vw;
            height: 19vh;
            border: 2px solid rgb(0, 0, 0);
            flex-direction: column;
            text-align: center;
            size:15px;
            padding: 15px;
            background: linear-gradient(#30A6AA,#ffffff,#2C6ACC);
            overflow: auto;
        }
        .Welcome span{
            margin: 0 1vh;
            font-weight:bold;
            color: black;
            font-size: 9vh;
            flex-wrap:wrap;
        }
        .link1{
          position: absolute;
          left: 60vh;
          top: 24vw;
          margin-left: -8vw;
          margin-top: 3vh;
          position:fixed;
          color: black;
          background-color: white;
          width:55.7vw;
          height: 7vh;
          border: 2px solid rgb(0, 0, 0);
          flex-direction: column;
          text-align: center;
          font-size: 2.5vh;
          padding: 1.5vh;
          background: linear-gradient(#30A6AA,#ffffff,#2C6ACC);
          overflow: auto;
        }
        .Welcome:hover{
          background: linear-gradient(#ffffff,#2C6ACC);
        }
        `}
        </style>
    </div>

  );
};

export default welcome