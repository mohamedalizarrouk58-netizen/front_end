import React from 'react';
import CrudTable from '../common/CrudTable';

const Factures = () => {
  const columns = [
    { key: 'intervention', label: 'Intervention ID' },
    { key: 'client', label: 'Client ID' },
    { key: 'montant_total', label: 'Montant total' },
    { key: 'date_creation', label: 'Date création' },
  ];

  const formFields = [
    { name: 'intervention', label: 'Intervention ID', type: 'number', required: true },
    { name: 'client', label: 'Client ID', type: 'number', required: true },
    { name: 'montant_total', label: 'Montant total', type: 'number', step: '0.01', required: true },
  ];

  return (
    <CrudTable
      title="Factures"
      endpoint="/factures/"
      columns={columns}
      formFields={formFields}
      queryKey="factures"
    />
  );
};

export default Factures;