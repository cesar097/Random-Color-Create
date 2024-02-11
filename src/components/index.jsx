import { useEffect, useState } from "react"


export default function RandomColor () {
    const [typeColor, setTypeColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function RandomColorUtility (length) {
        return (
            Math.floor(Math.random()*length)
        )
    }

  function  handleCreateRandomHexColor(){
    // #45f3ed
    const  hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for(let i=0; i<6; i++) {
        hexColor += hex[RandomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  function  handleCreateRandomRgbColor(){
    const r = RandomColorUtility(256)
    const g = RandomColorUtility(256)
    const b = RandomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)

  }

    useEffect(() => {
        if (typeColor === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeColor]);
  

    return (
        <div className="container1" style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>

            <div style={{
                display: "flex",
                gap: "10px"
            }}>
            <button onClick={() =>setTypeColor('hex')}>Create HEX color</button>
            <button onClick={() =>setTypeColor('rgb')}>Create ARG color</button>
            <button onClick={typeColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
            </div>


            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "40px", 
            }}>
                <h3>{typeColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
              <h1>
                {color}
              </h1>

            </div>
        </div>
    )
}