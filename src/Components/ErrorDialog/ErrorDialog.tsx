import React, { useEffect, valueOf } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../Interfaces/interfaces';
import theme from '../../theme';

const ErrorDialog = (props: {isShown: boolean, message: string}) => {
    const [open, setOpen] = React.useState(props.isShown);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (props.isShown) {
            handleClickOpen()
        } else {
            handleClose()
        }
    }, [props.isShown]);

    return (
        <div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle style={{color: theme.palette.error.main}} id="alert-dialog-title">{"Oops! There was an error!"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Let's fix that!
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}

export default ErrorDialog;
