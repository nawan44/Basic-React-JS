import React, { useState } from "react";
import "./App.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Row = function (props) {
  const { checked, value, onChange, onChecked } = props;
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChecked} />
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const App = function (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rows: [{ value: "", checked: false }],
  //   };
  // }
  const [state, setState] = useState({
    rows: [{ value: "", checked: false }],
  });
  const updateValue = (e, idx) => {
    const rows = [...state.rows]; // copy array because we don't want to mutate the previous one
    rows[idx].value = e.target.value;
    setState({
      rows,
    });
  };
  const onChecked = (idx) => {
    const rows = [...state.rows]; // copy array because we don't want to mutate the previous one
    rows[idx].checked = !rows[idx].checked;
    setState({
      rows,
    });
  };
  const addRow = () => {
    const rows = [...state.rows, { value: "", checked: false }];
    setState({
      rows,
    });
  };
  const deleteRows = () => {
    const rows = [...state.rows, { value: "", checked: false }];

    setState({
      rows: state.rows.filter((e) => !e.checked),
    });
  };

  return (
    <div>
      {state.rows.map((row, idx) => {
        return (
          <Row
            key={idx}
            value={row.value}
            checked={row.checked}
            onChange={(e) => updateValue(e, idx)}
            onChecked={() => onChecked(idx)}
          />
        );
      })}
      <button onClick={addRow}>add</button>
      <button onClick={deleteRows}>delete</button>
    </div>
  );
};
export default App;
