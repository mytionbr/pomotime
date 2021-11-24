import { Backdrop, Card, CardContent, CardHeader, Checkbox, Dialog, FormControlLabel, Paper, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
import { Form, FormikProvider, useFormik } from 'formik';
import DescriptionForm from './DescriptionForm';
import TasksForm from './TasksForm';
import TasksTodoList from './TasksTodoList';
import TitleForm from './TitleForm';

const CardModal = styled(Card)(({theme}) => ({
    fontSize: 12,
    borderRadius: theme.shape.borderRadiusSm,
    width: theme.breakpoints.values.sm,
    overflowY: 'auto',
  }));

  
  function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export default function TaskModal({card,handleAddTask,handleClose,handleChangeTitle,handleChangeDescription,handleToggle,open}) {
  
  const [tasks, setTasks] = React.useState([])
  const {title,description} = card
  const prevCard = usePrevious({cardId: card.id})

  console.log(prevCard)
  React.useEffect(()=>{
    if(card &&  card.tasks && card.tasks.length >0){
      console.log('opa')
      setTasks([...card.tasks])
    }else if(prevCard && prevCard.cardId !== card.id  ){
      console.log('eita')
      setTasks([...card.tasks])
    }
  },[card])

  const handleChangeTask = (task)=>{
    let newTasks = tasks
    newTasks.push(task)
    setTasks([...newTasks]);
    handleAddTask(task);
  }    
    
    return (
        <Dialog 
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClose={handleClose}
      >
            <CardModal>
               <TitleForm title={title} handleChangeTitle={handleChangeTitle} />
                <DescriptionForm
                    description={description}
                    handleChangeDescription={handleChangeDescription}
                  />
                
                <Box sx={{ mt: 4}} />
                  <TasksForm handleAddTask={handleChangeTask}/>
                  <TasksTodoList tasks={tasks} />
            </CardModal>
        </Dialog >
    )
}
