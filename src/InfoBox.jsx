import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let info ={
        city: "Jaipur",
        feels_Like: 42.55,
        humidity: 26,
        maxTemp: 40.62,
        minTemp: 40.62,
        temp: 40.62,
        weather: "haze"
    }
    return(
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className = "cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}&deg;C</p>
                        <p>Max Temp: {info.maxTemp}&deg;C</p>
                        <p>Min Temp: {info.minTemp}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_Like}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}