import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import React from "react";

function TaskItem({ task, checked, formik, ...other }) {
  const { getFieldProps } = formik;
  const {name, id} = task
  

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={id}
            checked={checked}
            {...other}
          />
        }
        label={
          <Typography
            variant="body2"
            sx={{
              ...(checked && {
                color: "text.disabled",
                textDecoration: "line-through",
              }),
            }}
          >
            {name}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function TasksTodoList({ tasks }) {
  const tasksChecked = tasks ? tasks.filter(task => task.done) : []
  const formik = useFormik({
    initialValues: {
      checked: [...tasksChecked]
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit } = formik;
  return (
    <Box sx={{ px: 3, py: 1 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          {tasks &&
            tasks.map((task) => (
              <TaskItem
                key={String(task.id)}
                task={task}
                formik={formik}
                checked={values.checked.includes(task.id)}
              />
            ))}
        </Form>
      </FormikProvider>
    </Box>
  );
}
