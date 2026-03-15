import React from 'react';
import CrudTable from '../common/CrudTable';
import { Chip, MenuItem } from '@mui/material';

const Interventions = () => {
  const columns = [
    { key: 'demande', label: 'Demande ID' },
    { key: 'technicien', label: 'Technicien ID' },
    { key: 'statut', label: 'Statut', render: (value) => (
      <Chip
        label={value}
        color={
          value === 'Diagnostic' ? 'info' :
          value === 'En cours' ? 'warning' :
          value === 'Terminée' ? 'success' : 'default'
        }
        size="small"
      />
    )},
    { key: 'date_debut', label: 'Date début' },
    { key: 'date_fin', label: 'Date fin' },
  ];

  const formFields = [
    { name: 'demande', label: 'Demande ID', type: 'number', required: true },
    { name: 'technicien', label: 'Technicien ID', type: 'number', required: true },
    {
      name: 'statut',
      label: 'Statut',
      required: true,
      select: true,
      children: [
        <MenuItem key="diagnostic" value="Diagnostic">Diagnostic</MenuItem>,
        <MenuItem key="en_cours" value="En cours">En cours</MenuItem>,
        <MenuItem key="terminée" value="Terminée">Terminée</MenuItem>,
      ]
    },
    { name: 'date_debut', label: 'Date début', type: 'datetime-local' },
    { name: 'date_fin', label: 'Date fin', type: 'datetime-local' },
  ];

  return (
    <CrudTable
      title="Interventions"
      endpoint="/interventions/"
      columns={columns}
      formFields={formFields}
      queryKey="interventions"
    />
  );
};

export default Interventions;