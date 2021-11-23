import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

const boxShadow = `0 0 2px 0 ${alpha(grey[800], 0.24)}, 0 16px 32px -4px ${alpha(grey[800], 0.24)}`;

const laneDone = {
  background: '#AAF27F',
  borderRadius: 16,
  boxShadow: boxShadow,
  fontFamily:'Public Sans, sans-serif',
  fontSize: 20,
}

const laneNext = {
  background: '#FFE16A',
  borderRadius: 16,
  boxShadow: boxShadow,
  fontFamily:'Public Sans, sans-serif',
  fontSize: 20,
}

const laneDo = {
  background: '#FFA48D',
  borderRadius: 16,
  boxShadow: boxShadow,
  fontFamily:'Public Sans, sans-serif',
  fontSize: 20,
}

const laneIdeas = {
  background: '#D0F2FF',
  borderRadius: 16,
  boxShadow: boxShadow,
  
}


const card = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: `0 1px 2px 0   ${alpha(grey[500], 0.24)}`,
}



const escalationText = {
  fontSize: '20px'
}

const titleStyle ={
  fontFamily:'Public Sans, sans-serif',
  fontSize: 20,
  padding: '5px 0' 

}

const labelStyle ={
  fontFamily:'Public Sans, sans-serif',
  fontSize: 20,
}


export  const tasksData ={
    lanes: [
      {
      id: 'lane1',
      title: 'Feito',
      style: laneDone,  // Style of Lane
      cardName: escalationText,
      labelStyle: labelStyle,
      titleStyle: titleStyle,
      currentPage: 1,
        cards: [
          {
            description: 'Relatórios e features',
            id: '1',
            label: '30 min',
            laneId: 'lane1',
            escalationStyle:escalationText,
            metadata: {
              completedAt: '2017-12-01T10:00:00Z',
              shortCode: 'abc'
            },
            title: 'Trabalho',
            tasksTotal: 10,
            tasksDone: 1,
            tasks:[
              {
                id: '1',
                name: 'Escrever Texto',
                tempo: 240,
                sessionsTotal: 10,
                done: false
              }
            ]
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Fazer',
        style: laneNext,  // Style of Lane
        labelStyle: labelStyle,
        titleStyle: titleStyle,
        currentPage: 1,
          cards: [
            {
              description: 'minhas aulas de 2° feira',
              id: '2',
              label: '1 hora',
              laneId: 'lane2',
              metadata: {
                completedAt: '2017-12-01T10:00:00Z',
                shortCode: 'abc'
              },
              title: 'Aulas de piano',
              tasksTotal: 3,
              tasksDone: 0,
            },
          ],
        },
        {
          id: 'lane3',
          title: 'Fazendo',
          style: laneDo,  // Style of Lane
          
          labelStyle: labelStyle,
          titleStyle: titleStyle,
          currentPage: 1,
            cards: [
              {
                description: 'tarefas para a próxima aula',
                id: '3',
                label: '50 min',
                laneId: 'lane3',
                metadata: {
                  completedAt: '2017-12-01T10:00:00Z',
                  shortCode: 'abc'
                },
                title: 'Espanhol',
                tasksTotal: 4,
                tasksDone: 2,
              },
            ],
          },
          {
            id: 'lane4',
            title: 'Ideias',
            style: laneIdeas,  // Style of Lane
            labelStyle: labelStyle,
            titleStyle: titleStyle,
            currentPage: 1,
              cards: [
                {
                  description: 'procurar um novo curso para o próximo ano',
                  id: 'Card1',
                  label: '20 min',
                  laneId: 'lane4',
                  metadata: {
                    completedAt: '2017-12-01T10:00:00Z',
                    shortCode: 'abc'
                  },
                  title: 'Buscar uma nova faculdade',
                  tasksTotal: 1,
                  tasksDone: 0,
                },
              ],
            }
    ]
  }