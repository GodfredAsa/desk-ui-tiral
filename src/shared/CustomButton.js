import { Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import useStyles from '../assets/styles/style';

const CustomButton = () => {
    const history = useHistory();
    const logoutHandler =() =>{
        history.push('/')
    }

   const classes =  useStyles()
    return (
       <div>
            <Button variant="contained" className={classes.position} onClick={logoutHandler}>Logout</Button>
       </div>
      );
}
 
export default CustomButton;