import { makeStyles } from "@mui/styles";

// Define the width of the drawer
const drawerWidth = 240;

// Create a makeStyles function to generate styles
export default makeStyles((theme) => ({
  // Define styles for the toolbar
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: `${drawerWidth}px`, // Use template literal for dynamic width
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  // Styles for the menu button
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // Styles for the drawer
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // Styles for the drawer paper
  drawerPaper: {
    width: drawerWidth,
  },
  // Styles for links within a button
  linkButton: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));
