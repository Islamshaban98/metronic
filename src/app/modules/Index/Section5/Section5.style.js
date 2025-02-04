import { fade, makeStyles } from "@material-ui/core";

 export const useStyels = makeStyles(theme => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch"
      }
    },
    iconsDiv:{
      display:'flex',
      flexDirection:'row',
      justifyContent:"space-between",
      padding:"20px"
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    rowCell:{
      color:"#C3C8CF",
      fontSize:"14px"
    },
    txtContainer:{      
    width: "150px",
    color:"#3f4254",
    fontSize:"14px"
    },
    gridInput:{
        marginTop:"20px"
    },
    inputClass:{
        marginTop:"10px"
    }
  }));