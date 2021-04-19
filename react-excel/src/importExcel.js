import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactExcel from './Excel';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BasicTable from "./Table";
import ButtonSubmit from "./buttonSubmit";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return { top: `${top}%`, left: `${left}%`, transform: `translate(-${top}%, -${left}%)` };
}

const btnReport = {
    backgroundColor: 'blue',
    color: 'white'
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

export default function ImportReact() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first
    // render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Perhatian !!!</h2>
            <input
                className={classes.input}
                id="contained-button-file"
                multiple="multiple"
                type="file" />
            <label htmlFor="contained-button-file">
                <Button
                    startIcon={<CloudUploadIcon />}
                    variant="contained"
                    color="primary" d
                    component="span">
                    Upload
                </Button >
                <Button >
                    Submit
                </Button>
            </label>
            <p id="simple-modal-description">
                Sebelum melakukan Import Data Excel pastikan Format Data Excel sudah sama dengan
                template
            </p>
            <ReactExcel />

        </div>
    );

    return (
        <div>
            <BasicTable />
            <ButtonSubmit>Submit Data</ButtonSubmit>
            <button style={btnReport} type="button" onClick={handleOpen}>
                Membuat Laporan
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {body}
            </Modal>
        </div>
    );
}
