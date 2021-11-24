import { alpha, Box, Button, Card, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Board from "react-trello";
import Page from "../components/Page";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import CustomCard from "../components/tasksBoard/CustomCard";
import {tasksData} from '../_mocks_/tasksData';
import TaskModal from "../components/tasksBoard/TaskModal";

const CustomAddCardLink =  ({onClick, t}) => {
  const CustomButton = styled(Button)(({theme}) => ({
    fontSize: 12,
    color: '#fff',
    backgroundColor: alpha(grey[700], 0.70),
    fontFamily:'Public Sans, sans-serif',
    '&:hover':{
      backgroundColor: alpha(grey[700], 1),
    }
  }));
  
  return  <CustomButton variant="contained" onClick={onClick}>Adicionar cartão</CustomButton>
}

const styles = {
  backgroundColor: '#fff',
  fontFamily:'Public Sans, sans-serif',
  overflowY: 'auto',
  height:'100%'
}

export default function TasksBoard() {
  const [open, setOpen] = React.useState(false);
  const [currentCard, setCurrentCard] = React.useState({tasks: [], title: ''});
  
  const [data, setData] = React.useState(tasksData);

  const handleChangeCard =  (newCard)=>{
     let newLanes = data.lanes.map((lane=>{
       lane.cards = lane.cards.map(card=>{ 
        if(card.id === newCard.id){
          return newCard
        } else {
          return card
        }
      })
      return lane
    }))
    const newTasksData = {
      ...tasksData,
      lanes: newLanes
      
    }
    setData(newTasksData);
  }


  const handleChangeDescription = (newDescription)=>{
    const cardChanged = {
      ...currentCard,
      description: newDescription,
    }
    handleChangeCard(cardChanged);    
  }

  const onCardAdd = (card, laneId)=>{
    console.log(card)
    card.title = 'esú'
  }

  const handleChangeTitle = (newTitle)=>{
    const cardChanged = {
      ...currentCard,
      title: newTitle,
    }
    handleChangeCard(cardChanged);   
  }

  const handleAddTask = (newTask)=>{
    let tasks = currentCard.tasks ? currentCard.tasks : []
    tasks.push(newTask) 
    const cardChanged = {
      ...currentCard,
      tasks: [...tasks],
    }
    handleChangeCard(cardChanged);   
  }


  const handleClose = () => {
    setOpen(false);
  };
  
  const handleToggle = () => {
    setOpen(!open);
  };

  const onDataChange =(newData)=>{
    setData(newData)
  }

  const handleCardClick = async (cardId)=>{
    console.log(cardId)
    let card; 
   await data.lanes.forEach((lane=>{
      let aux =  lane.cards.find(card=> String(card.id) === String(cardId))
      if(aux){
        card = aux
      }
    }))
    console.log(card)
    setCurrentCard(card);
    handleToggle()
  }

  return (
    <Page title="Dashboard | Pomotime">
      <Container maxWidth="xl">
      <Box sx={{ pb: 3 }}>
          <Typography variant="h4">Tarefas</Typography>
        </Box>
        <Grid container sx={{ pt: 5 }} spacing={3}>
          <Board 
            draggable={true}
            data={data}
            editable={true}
            style={styles}
            components={{
              AddCardLink: CustomAddCardLink,
              Card: CustomCard 
            }}
            onCardClick={cardId => handleCardClick(cardId)}
            onDataChange={onDataChange}
            onCardAdd={onCardAdd}
            />
        </Grid>
        <TaskModal 
          handleClose={handleClose}
          handleToggle={handleToggle}
          open={open}
          card={currentCard}
          handleChangeDescription={handleChangeDescription}
          handleChangeTitle={handleChangeTitle}
          handleAddTask={handleAddTask}/>
      </Container>
    </Page>
  );
}
