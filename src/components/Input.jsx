import React, { useRef, useState } from 'react'
import './components.css'

const Input = (props) => {

    const fs = useRef(30)

    const [modeMsg, setModeMsg] = useState(false)


    setTimeout(() => {
        setModeMsg(false);
    }, 2000)


    return (
        <div className='input-main-app'>

            <div className='app-main-input'
                style={{
                    backgroundColor: props.mode ? '#555' : 'white',
                    color:'gray'
                }}
            >
                <div className="input-main">
                    <textarea placeholder='Enter any text' style={{
                        backgroundColor: props.mode ? '#777' : 'white', 
                        color: props.mode ? 'white' : 'gray',
                        borderRadius: '5px', border: !props.mode ? '1px solid black' : '1px solid white',
                        fontSize: `${fs.current}px`

                    }} className='input-box' type="text" />
                </div>

                <div className="options">

                    <button style={{
                        color: props.mode ? 'white' : 'black',
                        backgroundColor: props.mode ? 'black' : 'rgb(63, 111, 212)'
                    }} id='to-upper' onClick={() => {

                        let val = document.getElementsByClassName('input-box')[0].value;

                        // console.log(val.toUpperCase());
                        val = val.toUpperCase();
                        document.getElementsByClassName('input-box')[0].value = val
                    }
                    }>Change to UPPER</button> <br />
                    <button style={{
                        color: props.mode ? 'white' : 'black',
                        backgroundColor: props.mode ? 'black' : 'rgb(63, 111, 212)'
                    }} id='to-lower' onClick={() => {

                        let val = document.getElementsByClassName('input-box')[0].value;

                        // console.log(val.toLowerCase());
                        val = val.toLowerCase();
                        document.getElementsByClassName('input-box')[0].value = val
                    }
                    } >Change to lower</button> <br />
                    <button style={{
                        color: props.mode ? 'white' : 'black',
                        backgroundColor: props.mode ? 'black' : 'rgb(63, 111, 212)'
                    }} id='to-flip' onClick={() => {

                        let val = document.getElementsByClassName('input-box')[0].value;

                        val = val.split('').reverse().join('');
                        document.getElementsByClassName('input-box')[0].value = val;
                    }
                    }>Flip reverse</button> <br />

                    <button style={{
                        color: props.mode ? 'white' : 'black',
                        backgroundColor: props.mode ? 'black' : 'rgb(63, 111, 212)'
                    }} id='to-increase' onClick={() => {

                        fs.current = fs.current + 10;
                        document.getElementsByClassName('input-box')[0].style.fontSize = `${fs.current}px`;

                    }
                    }>Increase text size</button> <br />

                    <button style={{
                        color: props.mode ? 'white' : 'black',
                        backgroundColor: props.mode ? 'black' : 'rgb(63, 111, 212)'
                    }} id='to-decrease' onClick={() => {

                        fs.current = fs.current - 10;
                        document.getElementsByClassName('input-box')[0].style.fontSize = `${fs.current}px`;
                    }
                    }>Decrease text size</button>

                </div>

            </div>


        </div>
    )
}

export default Input