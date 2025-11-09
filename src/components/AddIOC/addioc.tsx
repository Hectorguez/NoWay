import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Collapse from '@mui/material/Collapse';

const IOCTypeValues = [
  { value: 'ip', label: 'IP' },
  { value: 'url', label: 'URL' },
  { value: 'domain', label: 'Domain' },
];

export const AddIOC: React.FC = () => {
  // Lista dinámica de IoCs
  const [iocList, setIocList] = useState<
    { iocValue: string; iocType: string; iocName: string }[]
  >([]);

  // Estados para mostrar alertas
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'warning'>('success');
  const [showAlert, setShowAlert] = useState(false);

  // Ocultar alert automáticamente después de 3s
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Actualiza valores
  const handleChange = (index: number, field: string, value: string) => {
    const newList = [...iocList];
    newList[index] = { ...newList[index], [field]: value };
    setIocList(newList);
  };

  // Añadir fila
  const handleAddRow = () => {
    setIocList([...iocList, { iocValue: '', iocType: '', iocName: '' }]);
  };

  // Eliminar fila
  const handleRemoveRow = (index: number) => {
    const newList = iocList.filter((_, i) => i !== index);
    setIocList(newList);
  };

  // Enviar todo
  const handleSend = () => {
    if (iocList.length === 0) {
      setAlertType('warning');
      setAlertMessage('Agrega al menos un IoC antes de enviar.');
      setShowAlert(true);
      return;
    }

    const incomplete = iocList.some(
      (ioc) => !ioc.iocValue || !ioc.iocType || !ioc.iocName
    );
    if (incomplete) {
      setAlertType('warning');
      setAlertMessage('Por favor, completa todos los campos antes de enviar.');
      setShowAlert(true);
      return;
    }

    const message = iocList
      .map(
        (ioc, i) =>
          `\n#${i + 1} → ${ioc.iocValue} (${ioc.iocType}) - ${ioc.iocName}`
      )

    setAlertType('success');
    setAlertMessage(`✅ Enviados correctamente: ${message}`);
    setShowAlert(true);
    setIocList([]); // limpiar después de enviar
  };

  return (
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor: '#d2b6b6ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: 4,
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      {/* Alert */}
      <Collapse in={showAlert} sx={{ width: '90%' }}>
        <Alert
          icon={
            alertType === 'success' ? (
              <CheckIcon fontSize="inherit" />
            ) : (
              <WarningAmberIcon fontSize="inherit" />
            )
          }
          severity={alertType}
          sx={{ mb: 2, whiteSpace: 'pre-line'}}
        >
          {alertMessage}
        </Alert>
      </Collapse>

      {/* Lista dinámica */}
      {iocList.map((ioc, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            backgroundColor: '#f8e7e7',
            borderRadius: 3,
            p: 2,
            boxShadow: 2,
            width: '90%',
            position: 'relative',
          }}
        >
          {/* Campos */}
          <TextField
            required
            label="IoC value"
            variant="filled"
            value={ioc.iocValue}
            onChange={(e) => handleChange(index, 'iocValue', e.target.value)}
          />

          <TextField
            required
            select
            label="Tipo"
            variant="filled"
            value={ioc.iocType}
            onChange={(e) => handleChange(index, 'iocType', e.target.value)}
          >
            {IOCTypeValues.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <FormControl sx={{ m: 1, width: '65ch' }} variant="filled">
            <InputLabel required>IoC Name</InputLabel>
            <FilledInput
              value={ioc.iocName}
              onChange={(e) => handleChange(index, 'iocName', e.target.value)}
            />
          </FormControl>

          {/* Botón eliminar fila */}
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleRemoveRow(index)}
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              '&:hover': { backgroundColor: '#ffdddd' },
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      ))}

      {/* Botones de acción */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,  }}>
        <IconButton
          aria-label="add"
          color="secondary"
          onClick={handleAddRow}
          sx={{
            backgroundColor: '#b58ce6',
            '&:hover': { backgroundColor: '#9c6fde' },
          }}
        >
          <AddCircleOutlineIcon sx={{ color: 'white' }} />
        </IconButton>

        <IconButton
          aria-label="send"
          color="primary"
          onClick={handleSend}
          sx={{
            backgroundColor: '#3b82f6',
            '&:hover': { backgroundColor: '#2563eb' },
          }}
        >
          <SendIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  );
};
