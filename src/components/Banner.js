import React from 'react'

const Banner = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"2%"}}>
        <div style={{padding:"2%"}}>
            <div>
                    <h1>A Bootstrap 5 template for modern businesses</h1>
                    <p>
                    Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit!
                    </p>
                <div>
                    <button style={{marginRight:"20px"}}>Get Started</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
        <div style={{padding:"2%"}}>
        <div style={{backgroundColor:"black", color:"white",height:"400px", width:"600px"}}>
            <h1>600 x 400</h1>
        </div>

        </div>
    </div>
  )
}

export default Banner