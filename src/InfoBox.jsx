import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox( {info} ) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
            <div className = "cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15 
                        ? HOT_URL 
                        : COLD_URL 
                    }
                    title="Weather Information"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                        {info.city} {
                        info.humidity > 80 
                        ? <ThunderstormIcon/> 
                        : info.temp > 15 
                        ? <WbSunnyIcon/>
                        : <AcUnitIcon/>
                    }
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