import { useState } from 'react'
import './Weather.css'

import RadioButton from './RadioButton'
import WeatherDisplay from './WeatherDisplay'

function Weather() {
    const [zip, setZip] = useState('12345')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)

    async function fetchWeather() {
        const apikey = '61effb852f35ae0d735eed742a8f2fe9'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()
        const cod = json.cod
        const message = json.message
        if (cod !== 200) {
            setData({ cod, message })
            return 
        }
        const temp = json.main.temp
        const feelsLike = json.main.feels_like
        const desc = json.weather[0].description
        setData ({
            cod,
            message,
            temp,
            feelsLike,
            desc
        })
    }

    return (
        <div className='Weather'>
            {data && <WeatherDisplay {...data} />}
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()
            }}>
                <div>
                    <input 
                        placeholder='Enter zip code'
                        value = {zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <button>Submit</button>
                </div>
                
                <select 
                    value={unit}
                    onChange={e => setUnit(e.target.value)}
                >
                    <option value="metric">Celcius</option>
                    <option value="imperial">Fahrenheit</option>
                    <option value="standard">Kelvin</option>
                </select>

                <RadioButton
                    label="metric"
                    name="unit"
                    checked={unit === 'metric'}
                    onChange={() => setUnit('metric')}
                />
       

                <RadioButton
                    label="imperial"
                    name="unit"
                    checked={unit === 'imperial'}
                    onChange={() => setUnit('imperial')}
                />           

                <RadioButton
                    label="standard"
                    name="unit"
                    checked={unit === 'standard'}
                    onChange={() => setUnit('standard')}
                />       
            </form>
        </div>
    )
}

export default Weather;