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

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.75 }}>
      <FormControlLabel
        control={
          <Checkbox
            {...getFieldProps("checked")}
            value={task}
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
            {task}
          </Typography>
        }
      />
    </Stack>
  );
}

export default function TasksTodoList({ tasks }) {
  const formik = useFormik({
    initialValues: {
      checked: ["1"],
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
                task={task.name}
                formik={formik}
                checked={values.checked.includes(task.done)}
              />
            ))}
        </Form>
      </FormikProvider>
    </Box>
  );
}
