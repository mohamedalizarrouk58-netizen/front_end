import React from 'react';
import CrudTable from '../common/CrudTable';

const Pieces = () => {
  const columns = [
    { key: 'nom', label: 'Nom' },
    { key: 'quantite_stock', label: 'Quantité stock' },
    { key: 'prix_unitaire', label: 'Prix unitaire' },
  ];

  const formFields = [
    { name: 'nom', label: 'Nom', required: true },
    { name: 'quantite_stock', label: 'Quantité stock', type: 'number', required: true },
    { name: 'prix_unitaire', label: 'Prix unitaire', type: 'number', step: '0.01', required: true },
  ];

  return (
    <CrudTable
      title="Pièces"
      endpoint="/pieces/"
      columns={columns}
      formFields={formFields}
      queryKey="pieces"
    />
  );
};

export default Pieces;