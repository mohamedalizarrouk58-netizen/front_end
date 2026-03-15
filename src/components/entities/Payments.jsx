import React from 'react';
import CrudTable from '../common/CrudTable';
import { MenuItem } from '@mui/material';

const Paiements = () => {
  const columns = [
    { key: 'facture', label: 'Facture ID' },
    { key: 'montant', label: 'Montant' },
    { key: 'mode_paiement', label: 'Mode paiement' },
    { key: 'date_paiement', label: 'Date paiement' },
  ];

  const formFields = [
    { name: 'facture', label: 'Facture ID', type: 'number', required: true },
    { name: 'montant', label: 'Montant', type: 'number', step: '0.01', required: true },
    {
      name: 'mode_paiement',
      label: 'Mode paiement',
      required: true,
      select: true,
      children: [
        <MenuItem key="carte_credit" value="Carte de crédit">Carte de crédit</MenuItem>,
        <MenuItem key="especes" value="Espèces">Espèces</MenuItem>,
        <MenuItem key="virement" value="Virement">Virement</MenuItem>,
        <MenuItem key="cheque" value="Chèque">Chèque</MenuItem>,
      ]
    },
  ];

  return (
    <CrudTable
      title="Paiements"
      endpoint="/paiements/"
      columns={columns}
      formFields={formFields}
      queryKey="paiements"
    />
  );
};

export default Paiements;