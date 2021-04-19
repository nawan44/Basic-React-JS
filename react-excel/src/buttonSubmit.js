import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReactExcel from './Excel';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return { top: `${top}%`, left: `${left}%`, transform: `translate(-${top}%, -${left}%)` };
}



const useStyles = makeStyles((theme) => ({
    form: {
        padding: '20px',
    },
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    text: {
        width: 400,
        margin: '15px 0 10px 0',

    },
    btnSubmit: {
        margin: '30px 10px 10px 60px',
        position: 'relatif',
    }
}));

function ButtonSubmit() {
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
            <h2 id="simple-modal-title">INPUT DATA</h2>

            <form className={classes.form} noValidate autoComplete="off">
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Nama Produk" />
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Kategori" />
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Harga Beli" />
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Harga Jual" />
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Satuan" />
                <TextField style={modalStyle} className={classes.text} id="filled-search" label="Barcode" />

                <button style={modalStyle} className={classes.btnSubmit}>Submit</button>
            </form>
        </div>
    );

    return (

        <div>
            <button style={modalStyle} className={classes.btnSubmit} type="button" onClick={handleOpen}>Submit Data</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
            >
                {body}
            </Modal>
        </div>
    );
}
export default ButtonSubmit;