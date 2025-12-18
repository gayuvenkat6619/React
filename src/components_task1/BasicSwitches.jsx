import Switch from '@mui/material/Switch';
import Dec5Task from './Dec5Task';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <div>
      <h2><center>BASICSWITCES</center></h2>
      <div> <center>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled /> <hr /> <br /><br /><br /> 
      </center>
      </div>
    </div> 
  );
}
