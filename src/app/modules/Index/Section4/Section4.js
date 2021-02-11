import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Section4Form from './Section4Form'


const useStyles = makeStyles(theme =>({
        paperContent:{
            margin:theme.spacing(2),
            padding:theme.spacing(2)
        }
}))
const Section4 = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paperContent}>
            <Section4Form/>
            </Paper>
        </div>
    )
}
export default Section4