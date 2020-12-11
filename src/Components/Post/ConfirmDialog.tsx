import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { commentInterfaceWithIsInDialog } from '../../Interfaces/interfaces';
import theme from '../../theme';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    dangerousButton: {
        color: theme.palette.secondary.dark,
    },
});

type DialogProps = {
    objectToPass?: commentInterfaceWithIsInDialog,
    postId?: String,
    onDeleteClick: Function
}

const ConfirmDialog = (props: DialogProps) => {
    const [open, setOpen] = React.useState(false);
    const [contentType, setContentType] = React.useState("");
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        if (props.objectToPass) {
            props.onDeleteClick(props.objectToPass.isInDialog, 
                props.objectToPass.id,
                props.objectToPass.postId,
                props.objectToPass.username)
        } else {
            props.onDeleteClick(props.postId)
        }
    }

    useEffect(() => {
        if (props.objectToPass) {
            setContentType("comment")
        } else {
            setContentType("post")
        }
    }, [props.objectToPass])

    return (
        <div>
            <Button size="small" variant="contained" onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className={classes.dangerousButton}>{"Confirm deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are You sure You want to delete this {contentType}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDialog