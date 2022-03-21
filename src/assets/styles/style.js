
import {makeStyles} from '@material-ui/core/styles'
//  styling components using material ui themes
const useStyles = makeStyles((theme)=>({
    container: {
      backgroundColor: "light-gray",
      paddingTop: "30px"
    },
// button styling 
    icon: {
        marginRight: '20px',
        fontSize: '40px'
    },

    button: {
        marginTop: '40px'
    },

    thebackground: {
        backgroundColor: "green"
    },

    logoStyle: {
        width: '100px',
        borderRadius: '25px'
    },
     position: {
         marginLeft: '200px',
         float: 'right',
         boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
     }
  }));

export default useStyles;