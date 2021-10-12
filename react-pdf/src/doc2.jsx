import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { renderToString } from "react-dom/server";

const Doc2 = () => {
  const people = [
    {
      id_obat_keluar: "325",
      id_obat: "4",
      nama_obat: "uji obat 4",
      jumlah: "50",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "326",
      id_obat: "22",
      nama_obat: "test kesekian",
      jumlah: "50",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "327",
      id_obat: "23",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "328",
      id_obat: "22",
      nama_obat: "test kesekian",
      jumlah: "50",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "329",
      id_obat: "23",
      nama_obat: "test kesekian 2",
      jumlah: "100",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "330",
      id_obat: "22",
      nama_obat: "test kesekian",
      jumlah: "100",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "331",
      id_obat: "23",
      nama_obat: "test kesekian 2",
      jumlah: "101",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "332",
      id_obat: "22",
      nama_obat: "test kesekian",
      jumlah: "100",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "333",
      id_obat: "23",
      nama_obat: "test kesekian 2",
      jumlah: "101",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "334",
      id_obat: "4",
      nama_obat: "uji obat 4",
      jumlah: "2",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "335",
      id_obat: "11",
      nama_obat: "rrrr",
      jumlah: "11",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "336",
      id_obat: "4",
      nama_obat: "uji obat 4",
      jumlah: "2",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "337",
      id_obat: "11",
      nama_obat: "rrrr",
      jumlah: "11",
      tanggal: "2021-10-02",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "338",
      id_obat: "21",
      nama_obat: "tes",
      jumlah: "14",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "339",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "29",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "340",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "341",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "342",
      id_obat: "28",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "343",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "344",
      id_obat: "28",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "345",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "346",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "347",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "11",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "348",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "349",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "350",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "351",
      id_obat: "28",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "352",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "353",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "354",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "355",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "356",
      id_obat: "26",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "357",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "358",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "359",
      id_obat: "26",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "360",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "361",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "362",
      id_obat: "26",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "363",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "364",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "365",
      id_obat: "26",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "366",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "367",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "368",
      id_obat: "26",
      nama_obat: "test kesekian 2",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "369",
      id_obat: "27",
      nama_obat: "test kesekian 3",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
    {
      id_obat_keluar: "370",
      id_obat: "28",
      nama_obat: "coba ini",
      jumlah: "1",
      tanggal: "2021-10-04",
      user_input: "dokter",
    },
  ];

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Laporan Data Obat";
    const headers = [
      ["ID OBAT", "NAMA OBAT", "JUMLAH", "TANGGAL", "USER INPUT"],
    ];

    const data = people.map((elt) => [
      elt.id_obat,
      elt.nama_obat,
      elt.jumlah,
      elt.tanggal,
      elt.user_input,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };

  return (
    <div>
      {" "}
      <button onClick={exportPDF}>Generate Report</button>
    </div>
  );
};
export default Doc2;
