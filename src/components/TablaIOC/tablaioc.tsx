import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import {
    DataGrid,
    type GridColDef,
} from '@mui/x-data-grid';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.01, minWidth: 50, resizable: false, },
    { field: 'firstName', headerName: 'IP', flex: 0.2, minWidth: 100, resizable: false, align: 'center', headerAlign: 'center' },
    { field: 'lastName', headerName: 'Tipo', flex: 0.2, minWidth: 100, resizable: false, align: 'center', headerAlign: 'center' },
    { field: 'age', headerName: 'Motivo', flex: 0.5, minWidth: 300, resizable: false, align: 'center', headerAlign: 'center' },
];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: "hdjksahkdjashkjdhaskjhdjkabsjkd jksdh jknajk dhjlsa jdha jhdj ahjldas" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const paginationModel = { page: 0, pageSize: 5 };



export const TablaIOC: React.FC = () => {

    useEffect(() => {
        // Busca el checkbox de "select all"
        const selectAllCheckbox = document.querySelector<HTMLInputElement>(
            'input[name="select_all_rows"]'
        );

        if (!selectAllCheckbox) return;

        const handleSelectAll = (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.checked) {
                console.log('¡Se seleccionaron todas las filas!');
            } else {
                console.log('Se deseleccionaron todas las filas');
            }
        };

        selectAllCheckbox.addEventListener('change', handleSelectAll);

        // Cleanup
        return () => {
            selectAllCheckbox.removeEventListener('change', handleSelectAll);
        };
    }, []);

    const handleRowSelection = (selectionModel: any) => {
        // selectionModel es un array con los IDs de las filas seleccionadas
        // console.log(selectionModel.ids)
        selectionModel.ids.forEach((id: any) => {
            console.log(id)
        })
        // const selectedRows = rows.filter(row => selectionModel.includes(row.id));    
        // console.log('Filas seleccionadas:', selectedRows);
    }

    return (
        <Box className="mt-8 mx-auto max-w-7xl rounded-2xl shadow-md bg-pink-400">
            <DataGrid
                className='bg-pink-400'
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{}}
                onRowSelectionModelChange={handleRowSelection} // <-- aquí
            />
        </Box>
    )
}