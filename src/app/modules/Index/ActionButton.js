import React from 'react'
import {Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    root:{
        minWidth:"0",
        margin:theme.spacing(0.5),
        fontSize:"14px"
    },
}

))

const ActionButton = (props) => {
    const {color, children , onClick } = props;
    const classes = useStyles();
    return (
        <Button className={classes.root} onClick={onClick} color={color}>
            {children}
        </Button>
    )
}

export default ActionButton
