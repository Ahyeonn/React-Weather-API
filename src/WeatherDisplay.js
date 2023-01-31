function WeatherDisplay(props) {
    const { temp, feelsLike, description, cod, message } = props
    
    if (cod !== 200) {
        return (
            <small>{message}</small>
        )
    }
    
    return (
        <div className="WeatherDisplay">
            <h1>{ temp }</h1>
            <small>Feels like: {feelsLike}</small>
            <p>{description}</p>
        </div>
    )
}

export default WeatherDisplay 