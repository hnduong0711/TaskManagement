import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="body2" color="text.secondary">Test</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarmIcon />
    </>
  );
}

export default App;
