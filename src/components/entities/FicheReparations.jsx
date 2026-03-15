import React from 'react';
import CrudTable from '../common/CrudTable';

const FicheReparations = () => {
  const columns = [
    { key: 'intervention', label: 'Intervention ID' },
    { key: 'description_panne', label: 'Description panne' },
    { key: 'solution', label: 'Solution' },
    { key: 'cout_main_oeuvre', label: 'Coût main d\'œuvre' },
    { key: 'valide_manager', label: 'Validé manager' },
  ];

  const formFields = [
    { name: 'intervention', label: 'Intervention ID', type: 'number', required: true },
    { name: 'description_panne', label: 'Description panne', multiline: true, rows: 3, required: true },
    { name: 'solution', label: 'Solution', multiline: true, rows: 3, required: true },
    { name: 'cout_main_oeuvre', label: 'Coût main d\'œuvre', type: 'number', step: '0.01', required: true },
    { name: 'valide_manager', label: 'Validé manager', type: 'checkbox' },
  ];

  return (
    <CrudTable
      title="Fiches de réparation"
      endpoint="/fiche-reparations/"
      columns={columns}
      formFields={formFields}
      queryKey="fiche-reparations"
    />
  );
};

export default FicheReparations;