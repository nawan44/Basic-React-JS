import "./App.css";
import MyDoc from "./document";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./document";
import Doc2 from "./doc2";

function App() {
  return (
    <div>
      <Doc2 />
      <br />
      <MyDocument />
    </div>
  );
}

export default App;
