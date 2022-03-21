import useStyles from "../assets/styles/style";



const Logo = () => {
const classes =  useStyles()

    return (
     <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQF45g9SOUS3dg/company-logo_200_200/0/1600695531088?e=2147483647&v=beta&t=mgfCnAo7jxG2tyUuD8m4M0kvrtbDawIGbtjlkTKbQyE" alt="" className={classes.logoStyle}/>
    );
}
 
export default Logo;