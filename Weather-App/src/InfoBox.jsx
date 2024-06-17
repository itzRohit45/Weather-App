import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    const INIT_URL="https://images.unsplash.com/photo-1542731056-a3ac0a9d11cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhemV8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity >80 ? RAIN_URL:info.Temp > 15 ? HOT_URL: COLD_URL }
        title="Info_Box"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}
          &nbsp;&nbsp;{info.humidity >80 ? <ThunderstormIcon/>:info.Temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/> }
          </b>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
                <p><b>Temperature:</b>{info.Temp}&deg;C</p>
                <p><b>Humidity:</b>{info.humidity}</p>
                <p><b>Min Temp:</b>{info.min_temp}&deg;C</p>
                <p><b>Max Temp:</b>{info.max_temp}&deg;C</p>
                <p>The Weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}