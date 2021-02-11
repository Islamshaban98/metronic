import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const Notification = (props) => {
    const {notify, setNotify} = props;
    const handleClose=()=>{
        setNotify({
            ...notify,
            isOpen:false
        })
    }
    return (
        <Snackbar open={notify.isOpen} onHideDuration={3000}onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity={notify.type} onClose={handleClose}>
          {notify.message}
        </Alert>
      </Snackbar>
    )
}

export default Notification
