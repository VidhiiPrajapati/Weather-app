
import { Box, Typography, styled } from "@mui/material";
import { LocationOn, Dehaze, Cloud } from "@mui/icons-material";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';


const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20,
    alignItems : 'center'
})

const Weather = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ?

            <Box style={{ margin: "30px , 60px " }}>

                <Row> <LocationOn /> Location: {result.name} , {result.sys.country}</Row>
                <Row> <SettingsBrightnessIcon />Temprature: {result.main.temp}</Row>
                <Row><OpacityIcon />Humidity : {result.main.humidity}</Row>
                <Row><Brightness5Icon />Sunrise:{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
                <Row><Brightness6Icon />Sunset:{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                <Row><Dehaze />Humidity :{result.weather[0].main} </Row>
                <Row > <Cloud />Clouds : {result.clouds.all}</Row>
            </Box>
            : <Error>Please enter the values to check weather</Error>
    )
}

export default Weather;