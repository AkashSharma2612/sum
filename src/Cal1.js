import React,{useState} from 'react'

function Cal1() {
    const [Number1,setNumber1]=useState(0);
    const [Number2,setNumber2]=useState(0);
    const[Result,setResult]=useState(0);

    const changeHandler=(event)=>
    {
        
       if(event.target.name=="num1")
       {
        setNumber1(Number(event.target.value));
       }
       else
       {
        setNumber2(Number(event.target.value));
       }
    };
    const sumClick=()=>
    {
        setResult(Number1+Number2);
    }
    const mulClick=()=>
    {
        setResult(Number1*Number2);
    }
    const divClick=()=>
    {
        setResult(Number1/Number2);
    }
    const clrClick=()=>
    {
        setNumber1(0);
        setNumber2(0);
        setResult (0);
    }
  return (
    
    <div className="bg-dark col-5 mx-auto p-4 m-4">
        <b className="text-white">Enter 1st Number:</b>
        <input type="number" name="num1" value={Number1} onChange={changeHandler}/>
        <br/>
        <br/>
        <b className="text-white">Enter 2nd Number:</b> 
        <input type="number" name="num2" value={Number2} onChange={changeHandler}/>
        <br/>
        <br/>
        <b className="text-white">Result:{Result}</b>
        <br/>
        <br/>
         <input type="button" value="sum" className="text-white btn btn-outline-success" onClick={sumClick}/>
         <input type="button" value="mul" className="text-white btn btn-outline-warning" onClick={mulClick}/>
         <input type="button" value="div" className="text-white btn btn-outline-primary" onClick={divClick}/>&nbsp;
         <input type="button" value="clr" className="text-white btn btn-outline-danger"  onClick={clrClick}/>
        
        </div>
  )
}

export default Cal1
