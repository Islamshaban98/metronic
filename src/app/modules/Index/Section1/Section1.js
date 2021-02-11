import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Section1Form from './Section1Form'


const useStyles = makeStyles(theme =>({
        paperContent:{
            margin:theme.spacing(2),
            padding:theme.spacing(2)
        }
}))
const Section1 = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paperContent}>
            <Section1Form/>
            </Paper>
        </div>
    )
}

export default Section1
