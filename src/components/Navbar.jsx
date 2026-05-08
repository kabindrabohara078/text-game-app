import React, { useRef, useState } from 'react'
import './components.css'

const Navbar = (props) => {

    const [navMode, setNavMode] = useState(0)

    return (
        <div className='navbar-main'
            style={{
                backgroundColor: navMode ? '#222' : 'rgb(63, 111, 212)'
            }}

        >
            <div style={{
                color: navMode ? 'white' : 'black'
            }} className="head">Text Game</div>


            <div className="right">


                <div className="mode" style={{
                    color: navMode ? 'white' : 'black',
                }}> <label className="switch">
                        <input onClick={() => {
                            setNavMode(!navMode)
                            props.setMode(!props.mode)
                        }} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

            </div>

        </div>
    )
}

export default Navbar