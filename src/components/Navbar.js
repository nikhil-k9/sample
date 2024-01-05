import React from 'react'


const space={
    margin: "0 10px",
}

const Navbar = () => {
  return (
    <div  style={{display:"flex",justifyContent:"space-between", alignItems:"centers"}}>
        <div>
            <div>
            Start Bootstrap
            </div>

        </div>
        <div>
        <a style={space} href="#">Home</a>
        <a style={space} href="#">About</a>
        <a style={space} href="#">Contact</a>
        <a style={space} href="#">Pricing</a>
        <a style={space} href="#">FAQ</a>
        <a style={space} href='#'>Blog</a>
        <a style={space} href='#'>Portfolio</a>
        </div>
    </div>
  )
}

export default Navbar