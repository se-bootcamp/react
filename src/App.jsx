import React,{useState} from "react";
// import ReactDOM from "react-dom/client";

const h1Style={color:'orange',fontSize:'50px'};

const userInfo="TEST AGAIN";



// Conditional rendering
// let isClicked=false;
// function Form(){
//     isClicked=true;
// if(isClicked){
//     return (
//         <div> <h1>TRACK A</h1></div>
//     )
// }
// else{
//        <div> <p>TRACK B</p> <a>check more info</a></div>
// }


// }



// let num=0
// function plus1(){
//     num++;
//   console.log(num);
 

// const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(
  
//     <App />
   
//    );
   
// }
function App() {

    setInterval(refreshTime,1000)
    // const [firstName,lastName,dob,email]=['Peter','Smith',1990,'peter@']
    //  console.log(dob);
    let currrentTime=new Date().toLocaleTimeString();
    const [num,updateNum]=useState(100);
    const [time,updateTime]=useState(currrentTime);
    
    // console.log(num);
    // let isCliked=true;
    // const h1style={backgroundColor:"lightgreen"}
    function plus1(){
        updateNum(num+1);
    //     value[0]++;
    //    console.log(value[0])
    }

    function minus1(){
        updateNum(num-1);
    //     value[0]++;
    //    console.log(value[0])
    }

    function refreshTime(){
        currrentTime=new Date().toLocaleTimeString();
        updateTime(currrentTime)

   }


// UI=f(state)
    return (
<div>
    {/* <header title="show something here">
      <h1 contentEditable="false" style={h1Style}> HELLO Header TEST section  {" plain text"} {userInfo} </h1>
    </header> */} 
     {/* <nav> <a>Home</a><a>About</a></nav>
     <div className="heroStyle">Hero Image block </div> */}
    <div> 
      {/* <h1 style={isCliked? h1style:null}>{num}</h1> */}
      <h1>{num}</h1>
      <button onClick={plus1}>+</button>
      <button onClick={minus1}>-</button>
    </div>
      <p>{time}</p>    
       <button onClick={refreshTime}>check current time</button>

    {/* <footer>FOOTER block
    </footer>  */}
  
  </div>)}


export default App;
