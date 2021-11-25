import { Box, Grid, Container, Typography } from '@mui/material';
import React from 'react';
import Page from '../components/Page';
import SessionDivider from '../components/SessionDivider';
import TasksForm from '../components/tasksBoard/TasksForm';
import TasksTodoList from '../components/tasksBoard/TasksTodoList';
import Timer from '../components/timerApp/Timer';
import TodoList from '../components/TodoList';

export default function TimerApp() {
    const [tasks,setTasks] = React.useState([])  

    const handleChangeTask = (task)=>{
      let newTasks = tasks
      newTasks.push(task)
      setTasks([...newTasks]);
    }    

    return (
      <Page title="Timer | Pomotime">
        <Container maxWidth="xl">
          <Grid container  sx={{ pt: 5 }}spacing={3}>
            <Timer />
            <Box
            sx={{my: 25}} />
            <SessionDivider 
              title='Tarefas'
              titleDefault='Sem tarefas, adicione novas tarefas ou crie um card'
            />
             <TodoList
              tasks={tasks}
              handleChangeTask={handleChangeTask}
             />
          </Grid>
        </Container>
      </Page>
    );
  }