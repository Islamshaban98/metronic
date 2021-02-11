import {  Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import { CloseIcon } from '@material-ui/data-grid';
import React from 'react'
import ActionButton from './ActionButton';

const PopUp = ( props) => {
    const{title, children, openPopup,setOpenPopup } = props;
    return (
        <Dialog open={openPopup}>
        <DialogTitle style={{paddingRight:"0px"}}>
        <div style={{display:"flex"}}>
            <Typography variant="h6" component="div" style={{flexGrow:1}}>
                {title}
            </Typography>
            <ActionButton color="primary" size="medium" onClick={()=>{setOpenPopup(false)}}>
                <CloseIcon/>
            </ActionButton>
        </div>
        </DialogTitle>  
        <DialogContent dividers>
            {children}      
        </DialogContent>
        </Dialog>
    )
}

export default PopUp
