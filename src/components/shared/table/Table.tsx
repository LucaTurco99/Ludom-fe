import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { Box } from "@mui/material";
import "./Table.css"; // Import your CSS file for styling

export const Table = () => {

    const [data] = useState([
        { id: 1, name: "John Doe", age: 28 },
        { id: 2, name: "Jane Smith", age: 34 },
        { id: 3, name: "Sam Johnson", age: 23 },
    ]);

    const table = useReactTable({
        data,
        columns: [
            {
                accessorKey: "id",
                header: "ID",
                cell: (props) => <div>{props.getValue()}</div>
                
            },
            {
                accessorKey: "name",
                header: "Name",
                cell: (props) => <div>{props.getValue()}</div>
            },
            {
                accessorKey: "age",
                header: "Age",
                cell: (props) => <div>{props.getValue()}</div>
            },

        ],
        getCoreRowModel: getCoreRowModel(),

    });

    return <>
        <Box>
            <Box className="table">
                {table.getHeaderGroups().map(headerGroup => <Box className="tr" key={headerGroup.id}> 
                    {headerGroup.headers.map(header => (
                        <Box key={header.id} className="th">
                        {typeof header.column.columnDef.header === 'function'
                          ? header.column.columnDef.header(header.getContext())
                          : header.column.columnDef.header}
                      </Box>
                      
                    ))}
                </Box>)
                }
                {
                    table.getRowModel().rows.map(row => <Box className="tr" key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <Box key={cell.id} className="td">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </Box>
                        ))}
                    </Box>)
                }
            </Box>
        </Box>
    </>;

}

