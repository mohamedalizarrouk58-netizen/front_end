import React from 'react';
import CrudTable from '../common/CrudTable';
import {
  Chip,
  MenuItem,
} from '@mui/material';

const Users = () => {
  const columns = [
    { key: 'username', label: 'Nom d\'utilisateur' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rôle', render: (value) => (
      <Chip
        label={value}
        color={value === 'manager' ? 'primary' : value === 'technicien' ? 'secondary' : 'default'}
        size="small"
      />
    )},
    { key: 'telephone', label: 'Téléphone' },
  ];

  const formFields = [
    { name: 'username', label: 'Nom d\'utilisateur', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'password', label: 'Mot de passe', type: 'password', required: true },
    {
      name: 'role',
      label: 'Rôle',
      required: true,
      select: true,
      children: [
        <MenuItem key="manager" value="manager">Manager</MenuItem>,
        <MenuItem key="technicien" value="technicien">Technicien</MenuItem>,
        <MenuItem key="receptionniste" value="receptionniste">Réceptionniste</MenuItem>,
      ]
    },
    { name: 'telephone', label: 'Téléphone' },
  ];

  return (
    <CrudTable
      title="Utilisateurs"
      endpoint="/users/"
      columns={columns}
      formFields={formFields}
      queryKey="users"
    />
  );
};

export default Users;