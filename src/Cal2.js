import React,{useState} from 'react'

function Cal2() {
    const initData={
        num1:0,
        num2:0,
        result:0
    }
    const[data,setData]=useState(initData);

    const changeHandler=(event)=>{
        setData({...data,[event.target.name]:Number(event.target.value)})
       // console.log(data);
    };
    const sumClick=()=>{

        setData({...data,result:(data.num1+data.num2)})
    }
    const mulClick=()=>{
        setData({...data,result:(data.num1*data.num2)})
    }
    const divClick=()=>{
        setData({...data,result:(data.num1/data.num2)})
    }
    const clrClick=()=>{
     setData(initData);
    }


    return (
    <div>
        <h1 className='text-white bg-info'>
            First App Calculator
        </h1>
        <br/>
        <div className='bg-dark col-5 mx-auto'>
        <br/> 
        <b className='text-white'> Enter 1st number: </b>
        <input type="number" name='num1' value={data.num1} onChange={changeHandler}/>
        <br/>
        <br/>
        <b className='text-white'>Enter 2nd number:</b>
        <input type="number" name='num2' value={data.num2} onChange={changeHandler}/>
        <br/>
        <br/>
        <b className='text-white'>Result: {data.result }</b>
        <br/>
        <br/>

        <input type="button" value="Sum" className='btn btn-outline-info' onClick={sumClick}/>
        <input type="button" value="Mul" className='btn btn-outline-success' onClick={mulClick}/>
        <input type="button" value="Div" className='btn btn-outline-warning' onClick={divClick}/>&nbsp;
        <input type="button" value="Clr" className='btn btn-outline-danger' onClick={clrClick}/>
        </div>
    </div>
  )
}

export default Cal2