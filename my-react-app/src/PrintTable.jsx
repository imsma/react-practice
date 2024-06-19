import { useEffect, useState } from "react";

function PrintTable({ calculateTable }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // console.log("calculating Table");
    setRows(calculateTable());
  }, [calculateTable]);

  return rows.map((row, index) => {
    return <p key={index}>{row}</p>;
  });
}

export default PrintTable;
