import React from 'react';
import CrudTable from '../common/CrudTable';
import {
  Chip,
  MenuItem,
} from '@mui/material';

const DemandeMaintenances = () => {
  const columns = [
    { key: 'materiel', label: 'Matériel ID' },
    { key: 'receptioniste', label: 'Réceptioniste ID' },
    { key: 'priorite', label: 'Priorité', render: (value) => (
      <Chip
        label={value}
        color={
          value === 'Haute' ? 'error' :
          value === 'Moyenne' ? 'warning' :
          value === 'Basse' ? 'success' : 'default'
        }
        size="small"
      />
    )},
    { key: 'statut', label: 'Statut', render: (value) => (
      <Chip
        label={value}
        color={
          value === 'En attente' ? 'warning' :
          value === 'En cours' ? 'info' :
          value === 'Terminée' ? 'success' : 'default'
        }
        size="small"
      />
    )},
    { key: 'date_creation', label: 'Date création' },
  ];

  const formFields = [
    { name: 'materiel', label: 'Matériel ID', type: 'number', required: true },
    { name: 'receptioniste', label: 'Réceptioniste ID', type: 'number', required: true },
    {
      name: 'priorite',
      label: 'Priorité',
      required: true,
      select: true,
      children: [
        <MenuItem key="haute" value="Haute">Haute</MenuItem>,
        <MenuItem key="moyenne" value="Moyenne">Moyenne</MenuItem>,
        <MenuItem key="basse" value="Basse">Basse</MenuItem>,
      ]
    },
    {
      name: 'statut',
      label: 'Statut',
      required: true,
      select: true,
      children: [
        <MenuItem key="en_attente" value="En attente">En attente</MenuItem>,
        <MenuItem key="en_cours" value="En cours">En cours</MenuItem>,
        <MenuItem key="terminée" value="Terminée">Terminée</MenuItem>,
      ]
    },
  ];

  return (
    <CrudTable
      title="Demandes de maintenance"
      endpoint="/demande-maintenances/"
      columns={columns}
      formFields={formFields}
      queryKey="demande-maintenances"
    />
  );
};

export default DemandeMaintenances;