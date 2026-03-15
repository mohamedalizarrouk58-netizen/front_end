import React from 'react';
import CrudTable from '../common/CrudTable';

const Clients = () => {
  const columns = [
    { key: 'nom_prenom', label: 'Nom et Prénom' },
    { key: 'telephone', label: 'Téléphone' },
    { key: 'adresse', label: 'Adresse' },
  ];

  const formFields = [
    { name: 'nom_prenom', label: 'Nom et Prénom', required: true },
    { name: 'telephone', label: 'Téléphone', required: true },
    { name: 'adresse', label: 'Adresse', multiline: true, rows: 3 },
  ];

  return (
    <CrudTable
      title="Clients"
      endpoint="/clients/"
      columns={columns}
      formFields={formFields}
      queryKey="clients"
    />
  );
};

export default Clients;