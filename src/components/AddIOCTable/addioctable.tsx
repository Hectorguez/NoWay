import React, { useState } from 'react';
import { AddIOC } from '../AddIOC/addioc';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AddIOCsContainer: React.FC = () => {
  // Estado: lista de formularios
  const [forms, setForms] = useState<number[]>([0]); // empieza con 1 formulario

  const handleAddForm = () => {
    setForms([...forms, forms.length]); // añade un nuevo índice
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        p: 3,
      }}
    >
      <Typography variant="h5" sx={{ color: '#fff', mb: 2 }}>
        Añadir múltiples IoCs
      </Typography>

      {/* Renderiza cada formulario */}
      {forms.map((index) => (
        <AddIOC key={index} />
      ))}

      {/* Botón para añadir otro formulario */}
      <IconButton
        onClick={handleAddForm}
        color="primary"
        sx={{
          mt: 2,
          backgroundColor: '#b58ce6',
          '&:hover': {
            backgroundColor: '#9c6fde',
          },
        }}
      >
        <AddCircleOutlineIcon sx={{ color: '#fff', fontSize: 40 }} />
      </IconButton>
    </Box>
  );
};
