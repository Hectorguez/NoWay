import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import type React from 'react';


import "./tabla.css"

// Definimos el tipo de fila
type IOCType = "ip" | "url" | "domain";

export type IOC = {
    id: number,
    ioc_value: string;
    type: IOCType;
    ioc_name: string;
};

// Columnas tipadas con RowData
const columns: GridColDef<IOC>[] = [
    { field: 'id', headerName: 'ID', flex: 0.25, minWidth: 75 },
    { field: 'ioc_value', headerName: 'IOC VALUE', flex: 1, minWidth: 100 },
    { field: 'type', headerName: 'TYPE', flex: 0.5, minWidth: 100 },
    { field: 'ioc_name', headerName: 'IOC NAME', flex: 4, minWidth: 100 },
];

// Datos
const rows: IOC[] = [
    { id: 1, ioc_value: "1.1.1.1", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 2, ioc_value: "https://www.ull.es/https://www.ull.es/https://www.ull.es/", type: 'url', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 3, ioc_value: "1.1.1.3", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 4, ioc_value: "1.1.1.4", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 5, ioc_value: "1.1.1.5", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 6, ioc_value: "1.1.1.6", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 7, ioc_value: "1.1.1.7", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 8, ioc_value: "1.1.1.8", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 9, ioc_value: "1.1.1.9", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 10, ioc_value: "1.1.1.10", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 11, ioc_value: "1.1.1.11", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 12, ioc_value: "1.1.1.12", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 13, ioc_value: "1.1.1.13", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 14, ioc_value: "1.1.1.14", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 15, ioc_value: "1.1.1.15", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 16, ioc_value: "1.1.1.16", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 17, ioc_value: "1.1.1.17", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
    { id: 18, ioc_value: "1.1.1.18", type: 'ip', ioc_name: 'Test de name para el ioc value de tipo ip' },
];

const paginationModel = { page: 0, pageSize: 5 };

// Componente
export const Tabla: React.FC = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Paper sx={{
                width: 1500,
                minHeight: 100,
                borderRadius: 2,
                overflow: 'auto',
                maxHeight: 600, // altura máxima
            }}>
                <DataGrid<IOC>
                    className='tabla'
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 15]}
                    checkboxSelection
                    scrollbarSize={0} // reserva espacio para scroll vertical
                    sx={{
                        maxHeight: 600, // altura máxima
                        minHeight: 100,
                        borderRadius: 2,
                        backgroundColor: '#ddbfbfff',
                        // Header
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#b58ce6 !important',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            textAlign: 'center',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            textAlign: 'center',
                            width: '100%',
                        },

                        // Footer
                        '& .MuiDataGrid-footerContainer': {
                            backgroundColor: '#b58ce6 !important',
                            color: 'black',
                            fontWeight: 'bold',
                        },
                    }}

                />
            </Paper>
        </div>
    );
};
