import React from 'react';
import CrudTable from '../common/CrudTable';
import { Chip, MenuItem } from '@mui/material';

const DemandePieces = () => {
  const columns = [
    { key: 'fiche', label: 'Fiche ID' },
    { key: 'piece', label: 'Pièce ID' },
    { key: 'quantite', label: 'Quantité' },
    { key: 'statut', label: 'Statut', render: (value) => (
      <Chip
        label={value}
        color={
          value === 'Demandée' ? 'warning' :
          value === 'Approuvée' ? 'success' :
          value === 'Rejetée' ? 'error' : 'default'
        }
        size="small"
      />
    )},
  ];

  const formFields = [
    { name: 'fiche', label: 'Fiche ID', type: 'number', required: true },
    { name: 'piece', label: 'Pièce ID', type: 'number', required: true },
    { name: 'quantite', label: 'Quantité', type: 'number', required: true },
    {
      name: 'statut',
      label: 'Statut',
      required: true,
      select: true,
      children: [
        <MenuItem key="demandée" value="Demandée">Demandée</MenuItem>,
        <MenuItem key="approuvée" value="Approuvée">Approuvée</MenuItem>,
        <MenuItem key="rejetée" value="Rejetée">Rejetée</MenuItem>,
      ]
    },
  ];

  return (
    <CrudTable
      title="Demandes de pièces"
      endpoint="/demande-pieces/"
      columns={columns}
      formFields={formFields}
      queryKey="demande-pieces"
    />
  );
};

export default DemandePieces;