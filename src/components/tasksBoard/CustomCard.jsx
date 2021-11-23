import { alpha, Card, CardHeader, Divider, styled, Typography,Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import checkmarkSquareFill from "@iconify/icons-eva/checkmark-square-2-outline";
import { Icon } from "@iconify/react";

export default function CustomCard(props) {
  
  const StyledCard = styled(Card)(({theme}) => ({
    background: '#fff',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows.z20,
    margin: '5px 0',
    maxWidth: '250px',
    cursor: 'pointer'
  }));

  const StyledTitle = styled(Typography)(({theme}) => ({
    fontSize: 15,
    fontWeight: 600,
    color: grey[800],
    maxWidth: '75%'
  }));

  const StyledLabel = styled(Typography)(({theme}) => ({
    fontSize: 10,
    fontWeight: 300,
    color: grey[800],
    maxWidth: '25%'
  }));

  const HeaderCard = styled(Typography)(({theme}) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  }));

  const StyledDescription = styled(Typography)(({theme}) => ({
    padding: '5px'
  }));

  const TasksInfo = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
  }))

  const InitButton = styled(Button)(({theme}) => ({
    
  }))

  const CardFooter = styled('div')(({theme}) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  }))
    
  return (
        <StyledCard
           {...props}
        >
          <HeaderCard>
            <StyledTitle
              variant="subtitle1"
              wordBreak="break-word"
            >
              {props.title}
            </StyledTitle>
            <StyledLabel>
              {props.label}
            </StyledLabel>
          </HeaderCard>
        
          <Divider/>
          <StyledDescription
             variant="body2"
             gutterBottom
          >
            {props.description}
          </StyledDescription>
          <CardFooter>
            <TasksInfo>
                <Icon
                  icon={checkmarkSquareFill}
                  style={{
                    color: 'green',
                    fontSize: '1.5rem'}}/>
                    <Typography variant="body1">
                      {props.tasksDone ? props.tasksDone : 0}
                      /{props.tasksTotal ? props.tasksTotal : 1}
                    </Typography>
            </TasksInfo>
            <InitButton
              variant="contained">
                  Iniciar
            </InitButton>
          </CardFooter>
        
    </StyledCard>
    )
}
