import { Button } from "@material-ui/core";
import React, { Fragment } from "react";
import ReactExport from "react-export-excel";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const dataSet1 = [
    {
        nama_produk: "Tisu Magic 1",
        kategori: 121,
        harga_beli: 5000,
        harga_jual: 7000,
        satuan: 'lmbr',
        barcode: 7976534567
    },
    {
        nama_produk: "Tisu Magic 2",
        kategori: 612,
        harga_beli: 5500,
        harga_jual: 7200,
        satuan: 'lmbr',
        barcode: 89564567
    },
    {
        nama_produk: "Tisu Magic 3",
        kategori: 913,
        harga_beli: 5800,
        harga_jual: 7500,
        satuan: 'lmbr',
        barcode: 4254567
    },
    {
        nama_produk: "Tisu Magic 4",
        kategori: 810,
        harga_beli: 5900,
        harga_jual: 7900,
        satuan: 'lmbr',
        barcode: 12345467
    }
];

var dataSet2 = [
    {
        id_kategori: "makanan",
        nama_kategori: 25
    },
    {
        id_kategori: "minuman",
        nama_kategori: 25
    }
];
const btnDownload = {
    // backgroundColor: 'red',
    border: 'no'
}


class ReactExcel extends React.Component {
    render() {
        return (

            <ExcelFile element={<button style={btnDownload}>Download Template</button>}>
                <ExcelSheet data={dataSet1} name="Sheet2">
                    <ExcelColumn label="nama_produk" value="nama_produk" />
                    <ExcelColumn label="kategori" value="kategori" />
                    <ExcelColumn label="harga_beli" value="harga_beli" />
                    <ExcelColumn label="harga_jual" value="harga_jual" />
                    <ExcelColumn label="satuan" value="satuan" />
                    <ExcelColumn label="barcode" value="barcode" />

                    {/* <ExcelColumn label="Marital Status"
                        value={(col) => col.is_married ? "Married" : "Single"} /> */}
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="list">
                    <ExcelColumn label="id kategori" value="id_kategori" />
                    <ExcelColumn label="nama kategori" value="nama_kategori" />
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
export default ReactExcel;