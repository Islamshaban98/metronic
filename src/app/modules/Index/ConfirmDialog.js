import { Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core'
import React from 'react'
import ActionButton from './ActionButton';

const ConfirmDialog = (props) => {
    const { confirmDialog, setConfirmDialog} = props;
    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogContent>
                <Typography variant="h6" component="div">{confirmDialog.title}</Typography>
                <Typography variant="subtitle" component="div">{confirmDialog.subtitle}</Typography>
            </DialogContent>
            <DialogActions>
            <ActionButton color="primary" onClick={()=>{setConfirmDialog({...confirmDialog, isOpen:false})}} >
                No
            </ActionButton>
            <ActionButton color="secondary" onClick = {confirmDialog.onConfirm} >
                yes
            </ActionButton>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
