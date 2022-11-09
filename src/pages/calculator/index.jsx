import { useEffect, useState } from "react";

export function Calculator(){
    
    const [number, setNumber] = useState({one: 0, two: 0, three: 0})
    const [suma, setSuma] = useState()
    const [resta, setResta] = useState()
    const [multiplicacion, setMultiplicacion] = useState()
    const [division, setDivision] = useState()

  
    useEffect(()=>{
      const { one, two, three } = number
      setSuma(Number(one) + Number(two) + Number(three))
    },[number])

    useEffect(()=>{
        const { one, two, three } = number
        setResta(Number(one) - Number(two) - Number(three))
      },[number])

      useEffect(()=>{
        const { one, two, three } = number
        setMultiplicacion(Number(one) * Number(two) * Number(three))
      },[number])

      useEffect(()=>{
        const { one, two, three } = number
        setDivision(Number(one) / Number(two))
      },[number])
  
    const handleInput = (event) => {
      const { name, value } = event.target
      setNumber({...number, [name]: value})
    }
  
    return (
      <div className="App">
        <input className="input" onChange={handleInput} name="one" value={number.one} placeholder="Ingesa un numero (1)"/>
        <input className="input" onChange={handleInput} name="two" value={number.two} placeholder="Ingesa un numero (2)"/>
        <input className="input" onChange={handleInput} name="three" value={number.three} placeholder="Ingesa un numero (3)"/>
        <input value={suma}/>
        <input value={resta}/>
        <input value={multiplicacion}/>
        <input value={division}/>

      </div>
    );
};