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
    width: theme.breakpoints.values.sm
  }));


export default function TaskModal({card,handleClose,handleChangeTitle,handleChangeDescription,handleToggle,open}) {
    
    const {tasks, title,description} = card
    
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
                  <TasksForm />
                  <TasksTodoList tasks={tasks} />
            </CardModal>
        </Dialog >
    )
}
