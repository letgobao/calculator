import './App.css';
import React, {useState} from 'react';
import Screen from './component/Screen/Screen';
import KeyBoard from './component/KeyBoard/KeyBoard';
function App() {
  const [data, setData]  = useState('')
  const [input, setInput] = useState('0')
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const operators = [ '+', '-', 'x', '/']
  const handleNum = (value) => {
    if(data === '') {
      setData(value)
      setInput(value)
    }
    else if (data === '0' && value === '0') {
      console.log('nothing happen')
    }
    else {
      setInput(operators.includes(data.charAt(data.length-1)) ? value : `${input}${value}`)
      setData(`${data}${value}`)
    }
    
  }
  const handleOper = (value) => {
    if(data === '') {
      setData(value)
    }
    else if(operators.includes(data.charAt(data.length-1))) {
      setData(`${data.slice(0,data.length-1)}${value}`)
    }
    else {
      setData(`${data}${value}`)
    }
    setInput(value)
  }
  const handleDot = () => {
    if(data==='') {
      setInput('0.')
      setData('0.')
    }
    else if(operators.includes(data.charAt(data.length-1))) {
      setInput('0.')
      setData(`${data}0.`)
    }
    else if(input.includes(".") || data.charAt(data.length-1) === '.'){
      console.log('nothing happen')
    }
    else {
      setData(`${data}.`)
      setInput(`${input}.`)
    }
  }
  const clearData = () => {
    setData('')
    setInput('0')
  }
  const calc = () => {
    let expression = data.replace(/x/g,'*')
    let result = eval(expression)
    setData(`${data} = ${result}`)
    setInput(`${result}`)
  }
  const handleClick = (e) => {
    let value = e.target.value
    if(numbers.includes(value))
      handleNum(value)
    else if(operators.includes(value))
      handleOper(value)
    else if(value === '.')
      handleDot()
    else if(value === '=')
      calc()
    else if(value === 'AC')
      clearData()
  }
  return (
    <div className="App">
      <div className='container'>
        <Screen data={data} input={input}/>
        <KeyBoard handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
