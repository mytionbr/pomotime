import { CardContent } from "@mui/material";
import { styled } from "@mui/system";

const CartContentStyled = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(1),
    "&>*":{
      margin: '10px 0'
    }
  }));

export default CartContentStyled
