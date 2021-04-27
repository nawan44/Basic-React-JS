import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(report, kategori, harga_beli, harga_jual, satuan, barcode) {
    return { report, kategori, harga_beli, harga_jual, satuan, barcode };
}

const rows = [
    createData('Tissue Magic 1', 159, 5000, 6000, 14, 1234567),
    createData('Tissue Muka 2', 237, 7000, 8000, 25, 7364729),
    createData('Tissue Wajah 3', 262, 8000, 9000, 47, 9582637),
    createData('Tissue Basah 4', 305, 9000, 10000, 38, 7372829),
    createData('Tissue Magic 5', 356, 10000, 11000, 69, 8316748),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <Fragment>
            <h1>LAPORAN </h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama Kategori</TableCell>
                            <TableCell align="right">Kategori</TableCell>
                            <TableCell align="right">Harga Beli &nbsp;(Rupiah)</TableCell>
                            <TableCell align="right">Harga Jual&nbsp;(Rupiah)</TableCell>
                            <TableCell align="right">Satuan&nbsp;(pcs)</TableCell>
                            <TableCell align="right">Barcode</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.report}>
                                <TableCell component="th" scope="row">
                                    {row.report}
                                </TableCell>
                                <TableCell align="right">{row.kategori}</TableCell>
                                <TableCell align="right">{row.harga_beli}</TableCell>
                                <TableCell align="right">{row.harga_jual}</TableCell>
                                <TableCell align="right">{row.satuan}</TableCell>
                                <TableCell align="right">{row.barcode}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}
