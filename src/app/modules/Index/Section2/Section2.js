import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Section2Form from './Section2Form'


const useStyles = makeStyles(theme =>({
        paperContent:{
            margin:theme.spacing(2),
            padding:theme.spacing(2)
        }
}))
const Section2 = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paperContent}>
            <Section2Form/>
            </Paper>
        </div>
    )
}
export default Section2
