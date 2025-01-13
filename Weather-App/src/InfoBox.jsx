import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import GrainIcon from "@mui/icons-material/Grain";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1542731056-a3ac0a9d11cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhhemV8ZW58MHx8MHx8fDA%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const FOG_URL =
    "https://images.unsplash.com/photo-1518702417122-c995f17b2c36?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3";
  const SNOW_URL =
    "https://images.unsplash.com/photo-1518481618107-a1c0c9ea2283?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3";

  // Logic to determine the image based on weather conditions
  const getImageUrl = () => {
    if (info.humidity > 85) {
      return RAIN_URL; // Rain
    } else if (info.humidity > 70 && info.Temp < 5) {
      return SNOW_URL; // Snow with high humidity
    } else if (info.Temp > 35) {
      return HOT_URL; // Very hot
    } else if (info.Temp >= 15 && info.Temp <= 35) {
      return INIT_URL; // Moderate/hazy weather
    } else if (info.humidity < 50 && info.Temp < 15) {
      return FOG_URL; // Foggy conditions
    } else {
      return COLD_URL; // Default to cold
    }
  };

  // Logic to determine the weather icon
  const getWeatherIcon = () => {
    if (info.humidity > 85) {
      return <ThunderstormIcon />; // Rain
    } else if (info.humidity > 70 && info.Temp < 5) {
      return <AcUnitIcon />; // Snow
    } else if (info.Temp > 35) {
      return <WbSunnyIcon />; // Very hot
    } else if (info.humidity < 50 && info.Temp < 15) {
      return <FilterDramaIcon />; // Fog
    } else {
      return <AcUnitIcon />; // Default to cold
    }
  };

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={getImageUrl()}
          title="Weather Info"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>
              {info.city}&nbsp;&nbsp;{getWeatherIcon()}
            </b>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>
              <b>Temperature:</b> {info.Temp}&deg;C
            </p>
            <p>
              <b>Humidity:</b> {info.humidity}%
            </p>
            <p>
              <b>Min Temp:</b> {info.min_temp}&deg;C
            </p>
            <p>
              <b>Max Temp:</b> {info.max_temp}&deg;C
            </p>
            <p>
              The weather can be described as <b>{info.weather}</b> and feels
              like {info.feelsLike}&deg;C.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
