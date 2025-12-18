import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Dec5Task from './Dec5Task';


 const CircularColor = () => {
  return (
    <div>
      <h2><center>PROGRESSBAR</center></h2>
    <Stack sx={{ color: 'grey.500', textAlign:"center" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" /> 
      
    </Stack>  <hr /><br /><br /><br />
    
    </div>
  );
}
export default CircularColor;
