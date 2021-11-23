import { Backdrop, Card, CardContent, CardHeader, Checkbox, Dialog, FormControlLabel, Paper, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
import { Form, FormikProvider, useFormik } from 'formik';

const CardModal = styled(Card)(({theme}) => ({
    fontSize: 12,
    borderRadius: theme.shape.borderRadiusSm,
    width: theme.breakpoints.values.sm
  }));

  function TaskItem({ task, checked, formik, ...other }) {
    const { getFieldProps } = formik;
  
    return (
      <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
        <FormControlLabel
          control={
            <Checkbox {...getFieldProps('checked')} value={task} checked={checked} {...other} />
          }
          label={
            <Typography
              variant="body2"
              sx={{
                ...(checked && {
                  color: 'text.disabled',
                  textDecoration: 'line-through'
                })
              }}
            >
              {task}
            </Typography>
          }
        />
      </Stack>
    );
  }

export default function TaskModal({card,handleClose,handleToggle,open}) {
    
    const {tasks, title} = card

    const formik = useFormik({
        initialValues: {
          checked: ['1']
        },
        onSubmit: (values) => {
          console.log(values);
        }
      });
    
      const { values, handleSubmit } = formik;
    
    return (
        <Dialog 
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClose={handleClose}
      >
            <CardModal>
                <CardHeader 
                    title={title}
                />
                <Box sx={{ px: 3, py: 1 }}>
                <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            {tasks && tasks.map((task) => (
              <TaskItem
                key={String(task.id)}
                task={task.name}
                formik={formik}
                checked={values.checked.includes(task.done)}
              />
            ))}
          </Form>
        </FormikProvider>
                </Box>
            </CardModal>
        </Dialog >
    )
}
