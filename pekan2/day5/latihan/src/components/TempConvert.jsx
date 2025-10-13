import React, { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange, scale }) {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }

    return (
        <fieldset>
            <legend>Suhu dalam {scaleNames[scale]}:</legend>
            <input 
                value={temperature}
                onChange={(e) => onTemperatureChange(e.target.value, scale)} 
            />
        </fieldset>
    )
}



function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

function Calculator() {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('c')

    const handleCelsiusChange = (temp) => {
        setTemperature(temp)
        setScale('c')
    }

    const handleFahrenheitChange = (temp) => {
        setTemperature(temp)
        setScale('f')
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature 
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature 

    return (
        <>
            <h2>Kalkulator Suhu ( dengan Lifting State Up )</h2>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
        </>
    )
}

export default Calculator