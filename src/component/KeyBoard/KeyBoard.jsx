import React from 'react'
import './KeyBoard.css'
const KeyBoard = ({handleClick}) => {
    const keys = [
        'AC', '/', 'x', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.', '='
    ]
    const makeClass = (key) => {
        switch(key){
            case '0':
                return 'zero'
            case '+':
            case '-':
            case 'x':
            case '/':
                return 'oper' 
            case '=':
                return 'equal'
            case 'AC':
                return 'AC'
            default:
                return ''
        }
    }
  return (
    <div className='key-board'>
        {keys.map((key, index) => {
            return (
                <button onClick={handleClick} className={makeClass(key)} key={index} value={key}>{key}</button>
            )
        })}
    </div>
  )
}

export default KeyBoard