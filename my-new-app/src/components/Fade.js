import React, { useEffect, useState } from "react";
import Name from "./Name";
import TabButton from "./TabButton";
function Fade() {
  const [colorState, setColorState] = useState();

  let color1 = 2;
  let counter = 1;

/*
  React.useEffect(() => {
    const timer =
      setInterval(() => setColorState(colorState + 1), 1000);
    return () => clearInterval(timer);
  }, []);
*/



  useEffect(() => {
    const timer = setInterval(() => {
        if(color1<255 && color1 > 1){
            color1 = color1 + counter;
            console.log(color1);

        }else{
            counter = counter * -1;
            color1 = color1 + counter;
        }
        setColorState(color1);
        },50)
        return () => clearInterval(timer);
  }, []);

  return <div style={{ fontSize: "2rem", margin: "0rem", backgroundColor: "rgba(150,"+colorState+","+colorState/4+",1)"}}>

<div className="namePage" style = {{}}>
      <div className="topHalf">
      <TabButton class = "col-2" title = 'Portfolio' />
      <TabButton class = "col-2"title = 'About Me' />
      <TabButton class = "col-2"title = 'Download Resume' />
      <TabButton class = "col-2"title = 'Contact Me' />
</div>
      <header className="App-header">
        <Name />
      </header>
      </div>


  </div>;
}

export default Fade;