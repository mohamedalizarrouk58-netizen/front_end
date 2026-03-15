import React from 'react';
import CrudTable from '../common/CrudTable';
import {
  Chip,
  MenuItem,
} from '@mui/material';

const Materiels = () => {
  const columns = [
    { key: 'type', label: 'Type' },
    { key: 'marque', label: 'Marque' },
    { key: 'modele', label: 'Modèle' },
    { key: 'numero_serie', label: 'N° Série' },
    { key: 'etat', label: 'État', render: (value) => (
      <Chip
        label={value}
        color={
          value === 'Reçu' ? 'info' :
          value === 'En réparation' ? 'warning' :
          value === 'Réparé' ? 'success' :
          value === 'Non réparable' ? 'error' : 'default'
        }
        size="small"
      />
    )},
  ];

  const formFields = [
    { name: 'client', label: 'Client ID', type: 'number', required: true },
    { name: 'type', label: 'Type', required: true },
    { name: 'marque', label: 'Marque', required: true },
    { name: 'modele', label: 'Modèle', required: true },
    { name: 'numero_serie', label: 'Numéro de série', required: true },
    {
      name: 'etat',
      label: 'État',
      required: true,
      select: true,
      children: [
        <MenuItem key="reçu" value="Reçu">Reçu</MenuItem>,
        <MenuItem key="en_reparation" value="En réparation">En réparation</MenuItem>,
        <MenuItem key="reparé" value="Réparé">Réparé</MenuItem>,
        <MenuItem key="non_reparable" value="Non réparable">Non réparable</MenuItem>,
      ]
    },
  ];

  return (
    <CrudTable
      title="Matériels"
      endpoint="/materiels/"
      columns={columns}
      formFields={formFields}
      queryKey="materiels"
    />
  );
};

export default Materiels;