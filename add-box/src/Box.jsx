import React, { useState } from "react";
import {Container} from '@material-ui/core';

const Row = function (props) {
  const { checked, value, onChange, onChecked, state,setState } = props;

  const deleteRows = (idx) => {
    setState({
      rows: state.rows.filter((e) => !e.checked),
    });
  };
  return (
    <div>
      {/* <input type="checkbox" checked={true} onChange={onChecked} /> */}
      <input type="text" checked={true}  value={value} onChange={onChecked} />
          {/* <input type="text" onChange={onChange} /> */}
                <button onClick={deleteRows}>delete</button>

    </div>
  );
};

const Box = () => {
  const [state, setState] = useState({
    rows: [
      { value: "row1", checked: false },
      { value: "row2", checked: true },
      { value: "row3", checked: false },
    ],
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


  return (
    <div>
      {state.rows.map((row, idx) => {
        return (
          <Row
            style={{ background:"red"}}
            key={idx}
            value={row.value}
            checked={row.checked}
            state={state}
            setState={setState}
            onChange={(e) => updateValue(e, idx)}
            onChecked={() => onChecked(idx)}
          />
        );
      })}
      <button onClick={addRow}>add</button>
    </div>
  );
};
export default Box;
