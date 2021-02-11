import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Section5Form from './Section5Form'


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
            <Section5Form/>
            </Paper>
        </div>
    )
}
export default Section3