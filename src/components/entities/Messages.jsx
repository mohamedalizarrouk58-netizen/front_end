import React from 'react';
import CrudTable from '../common/CrudTable';

const Messages = () => {
  const columns = [
    { key: 'expediteur', label: 'Expéditeur ID' },
    { key: 'contenu', label: 'Contenu' },
    { key: 'date_envoi', label: 'Date envoi' },
  ];

  const formFields = [
    { name: 'expediteur', label: 'Expéditeur ID', type: 'number', required: true },
    { name: 'contenu', label: 'Contenu', multiline: true, rows: 4, required: true },
  ];

  return (
    <CrudTable
      title="Messages"
      endpoint="/messages/"
      columns={columns}
      formFields={formFields}
      queryKey="messages"
    />
  );
};

export default Messages;