import React from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, OutlinedInput, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'JPY', label: 'JPY' },
];

export const AddIOC: React.FC = () => {
    return (
        <Box
            className="
          grid 
          grid-cols-1 md:grid-cols-2
          gap-4
          p-8
          rounded-2xl
          shadow-md
          bg-gradient-to-br from-gray-50 via-white to-gray-100
          border border-gray-200
          hover:shadow-lg
          transition-all duration-300 ease-in-out
          mx-auto
          max-w-3xl
        "
        >
            {/* Campo Descripción */}
            <TextField
                className="w-full text-sm"
                id="filled-multiline-static"
                label="Descripción"
                multiline
                rows={10}
                size="small"
                placeholder="Escribe una descripción..."
                InputProps={{
                    className:
                        "bg-white rounded-lg focus:bg-gray-50 transition-all text-sm py-1",
                }}
                InputLabelProps={{ className: 'text-gray-600 text-sm' }}
            />

            {/* Agrupación de Moneda + Monto */}
            <Box className="flex flex-col gap-4">
                {/* Selector de moneda */}
                <TextField
                    id="filled-select-currency"
                    select
                    label="Moneda"
                    defaultValue="EUR"
                    helperText="Selecciona tu moneda"
                    size="small"
                    className="w-full text-sm"
                    InputProps={{
                        className:
                            "bg-white rounded-lg focus:bg-gray-50 transition-all text-sm py-1",
                    }}
                    InputLabelProps={{ className: 'text-gray-600 text-sm' }}
                    FormHelperTextProps={{ className: 'text-xs text-gray-400' }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value} className="text-sm">
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Campo de monto */}
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={3}
                    size="small"
                    className="w-full text-sm"
                    placeholder="Escribe algo..."
                    InputProps={{
                        className:
                            "bg-white rounded-lg focus:bg-gray-50 transition-all text-sm py-1",
                    }}
                    InputLabelProps={{ className: "text-gray-600 text-sm" }}
                />
                <Box className="mt-5 self-center">
                    <Button
                        variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
