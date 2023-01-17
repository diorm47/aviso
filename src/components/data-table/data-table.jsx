import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import "./data-table.css";

export default function DataTable({ columns, rows }) {
  return (
    <div className="data_table">
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
