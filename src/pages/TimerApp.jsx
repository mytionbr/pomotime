import { Box, Grid, Container, Typography } from '@mui/material';
import React from 'react';
import Page from '../components/Page';
import SessionDivider from '../components/SessionDivider';
import SessionTimeline from '../components/SessionTimeline';
import TasksForm from '../components/tasksBoard/TasksForm';
import TasksTodoList from '../components/tasksBoard/TasksTodoList';
import Timer from '../components/timerApp/Timer';
import TodoList from '../components/TodoList';

const TASKS = [
    {
      id: '1',
      name: 'Escrever relatório',
      tempo: 240,
      sessionsTotal: 10,
      done: false
    },
    {
      id: '2',
      name: 'Participar da reunião',
      tempo: 240,
      sessionsTotal: 10,
      done: true
    },
    {
      id: '3',
      name: 'Trabalho de ética da faculdade',
      tempo: 240,
      sessionsTotal: 10,
      done: false
    },
    {
      id: '4',
      name: 'Pesquisar sobre "Lean staturp',
      tempo: 240,
      sessionsTotal: 10,
      done: false
    },
    {
      id: '5',
      name: 'Corrigir bug do site',
      tempo: 240,
      sessionsTotal: 10,
      done: true
    },
    {
      id: '6',
      name: 'Lição de espanhol',
      tempo: 240,
      sessionsTotal: 10,
      done: true
    },
]


export default function TimerApp() {
    const [tasks,setTasks] = React.useState(TASKS)  

    const handleChangeTask = (task)=>{
      let newTasks = tasks
      newTasks.push(task)
      setTasks([...newTasks]);
    }    

    return (
      <Page title="Timer | Pomotime">
        <Container maxWidth="xl">
          <Grid container  sx={{ pt: 5, width: '100%' }} spacing={4}>
            <Grid item sm={12}>
              <Timer />
            </Grid>
          <Grid container  sx={{ pt: 7, width: '100%' }} spacing={3}>
            <Grid item sm={12} md={6}>
                <TodoList
                  tasks={tasks}
                  handleChangeTask={handleChangeTask}
                />
                </Grid>
                <Grid item sm={12} md={6}>
                  <SessionTimeline/>
                </Grid>
          
          </Grid>
          </Grid>
        </Container>
      </Page>
    );
  }