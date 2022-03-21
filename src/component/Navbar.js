

// import useStyles from './styles';
import {AppBar, Toolbar, CssBaseline} from '@material-ui/core';
import CustomButton from '../shared/CustomButton';
import Logo from '../shared/Logo';


const Navbar = () => {

    return ( 
        <div>
            <CssBaseline/>
        <AppBar position='relative'>
          <Toolbar>
            <Logo/>
          <div> <CustomButton /></div>
          </Toolbar>
        </AppBar>
        </div>
    
            
         );



}
 
export default Navbar;