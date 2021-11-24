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
  
  const [datas, setDatas] = React.useState(tasksData);
  
  const handleChangeData = (change)=>{
   console.log('handleChangeData')
  }

  const handleChangeCard =  (newCard)=>{

     let newLanes = tasksData.lanes.map((lane=>{
       lane.cards = lane.cards.map(card=>{ 
        if(card.id === newCard.id){
          return newCard
        } else {
          return card
        }
      })
      console.log(lane)
      return lane
    }))
    const newTasksData = {
      ...tasksData,
      lanes: newLanes
      
    }
  
    setDatas(newTasksData);
  }
  const handleChangeDescription = (newDescription)=>{
    const cardChanged = {
      ...currentCard,
      description: newDescription,
      
    }
  
    handleChangeCard(cardChanged);    
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleToggle = () => {
    setOpen(!open);
  };

  const handleCardClick = async (cardId)=>{
    let card; 
   await tasksData.lanes.forEach((lane=>{
      let aux =  lane.cards.find(card=> card.id === String(cardId))
      if(aux){
        card = aux
      }
    }))
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
            data={datas}
            editable={true}
            style={styles}
            components={{
              AddCardLink: CustomAddCardLink,
              Card: CustomCard 
            }}
            onCardClick={cardId => handleCardClick(cardId)}
           
            />
        </Grid>
        <TaskModal 
          handleClose={handleClose}
          handleToggle={handleToggle}
          open={open}
          card={currentCard}
          handleChangeDescription={handleChangeDescription}/>
      </Container>
    </Page>
  );
}
