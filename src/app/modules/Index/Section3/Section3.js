import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Section3Form from './Section3Form'


const useStyles = makeStyles(theme =>({
        paperContent:{
            margin:theme.spacing(2),
            padding:theme.spacing(2)
        }
}))
const Section3 = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paperContent}>
            <Section3Form/>
            </Paper>
        </div>
    )
}
export default Section3