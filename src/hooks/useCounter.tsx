import { useState } from "react";

interface Options {
    initialValue:number;
}


export const useCounter = ({initialValue = 0 }:Options) => {

    const [count, setCount]=useState<number>(10);

    const increaseBy =(value:number)=>{
        const newValue=count + value;
       if (newValue < 0 )return;
       setCount(count + value);
    }
  return {
    //Properties
    count,
    //Methods
    increaseBy
  }
    
  
}
