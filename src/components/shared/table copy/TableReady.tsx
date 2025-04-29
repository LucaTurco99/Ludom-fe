/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export interface TableReadyProps {
  columns: GridColDef[]; 
  actionColumns?: GridColDef[];
  rows: any[]; 
  isLoading?: boolean; 
}

export const TableReady: React.FC<TableReadyProps> = ({ columns, actionColumns, rows, isLoading }) => {
  return (
    <Box >
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={[...columns.map((col) => ({ ...col, flex: col.flex || 1 })), ...(actionColumns || [])]} 
        checkboxSelection={false}
      />
    </Box>
  );
};

