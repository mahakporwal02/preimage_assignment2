import './App.css';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  Card,
  Grid,
  Container,
  CardContent,
  Typography
} from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  let [taskText, setTaskText] = useState('');
  let [day, setDay] = useState(1);
  let [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let tasks = [];
    for (let i = 0; i < 7; i++) {
      tasks.push([]);
    }
    setTaskList(tasks);
  }, []);

  let addTask = () => {
    if (taskText !== '') {
      setTaskList((taskLs) => {
        taskLs[day - 1].push(taskText);
        return taskLs;
      });
    }
    setDay(1);
    setTaskText('');
  };

  return (
    <div className="App">
      <Container>
        <form>
          <TextField
            style={{ width: '200px', margin: '5px' }}
            type="text"
            label="Task"
            variant="outlined"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <Select
            labelId="day picker"
            id="day-picker-select"
            value={day}
            label="days"
            onChange={(e) => setDay(e.target.value)}
          >
            <MenuItem value={1}>Monday</MenuItem>
            <MenuItem value={2}>Tuesday</MenuItem>
            <MenuItem value={3}>Wednesday</MenuItem>
            <MenuItem value={4}>Thursday</MenuItem>
            <MenuItem value={5}>Friday</MenuItem>
            <MenuItem value={6}>Saturday</MenuItem>
            <MenuItem value={7}>Sunday</MenuItem>
          </Select>

          <br />
          <Button variant="contained" color="primary" onClick={addTask}>
            Add Task
          </Button>
        </form>
        <Grid>
          {taskList.map((task, idx) => (
            <Grid
              xs={3}
              style={{
                'max-width': 500,
                'margin-right': 10,
                'display': 'inline-block',
              }}
            >
              <Card key={idx}>
                <h1>Day- {idx+1}</h1>
                <CardContent>
                  <Typography variant="body1">{task.map(taskText => <h2>{taskText}</h2>)} </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
