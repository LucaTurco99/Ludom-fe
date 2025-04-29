import { TableReady } from "../../shared/table copy/TableReady";
import { GridColDef } from "@mui/x-data-grid";
import SearchForm from "../../shared/SearchForm";
import { useStudentsQuery } from "../../../hooks/useStudentsQuery";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackButton from "../../core/Backbutton";

function Students() {

    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID" },
        { field: "nome", headerName: "Name" },
        { field: "cognome", headerName: "Surname" },
    ];

    const actionColumn: GridColDef = {
        field: "actions",
        headerName: "Actions",
        width: 150,
        sortable: false,
        renderCell: (params) => (
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/students/details/${params.row.id}`)} >
                Details
            </Button>
        ),
    };

    const { data: students, isLoading } = useStudentsQuery();

    return (
        <>
            <div className="d-flex flex-column justify-content-start mt-4 mb-5">
                <h1>
                    <BackButton />
                    <i className="bi bi-person-fill me-2"></i> Students Section
                </h1>
                <span className="fs-6">
                    Here you can find all student information.
                </span>
            </div>

            <SearchForm />

            <TableReady
                columns={columns}
                actionColumns={[actionColumn]}
                rows={students || []}
                isLoading={isLoading} />
        </>
    );
}

export default Students;