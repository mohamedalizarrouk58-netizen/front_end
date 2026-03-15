import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Chip,
  Alert,
  Fab,
  Tooltip,
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  Search,
} from '@mui/icons-material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '../../services/apiService';

const CrudTable = ({
  title,
  endpoint,
  columns,
  formFields,
  queryKey,
  formatData = (data) => data,
}) => {
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => apiService.get(endpoint),
  });

  const createMutation = useMutation({
    mutationFn: (data) => apiService.post(endpoint, data),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      handleClose();
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => apiService.put(`${endpoint}${id}/`, data),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
      handleClose();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => apiService.delete(`${endpoint}${id}/`),
    onSuccess: () => {
      queryClient.invalidateQueries([queryKey]);
    },
  });

  const handleOpen = (item = null) => {
    setEditingItem(item);
    if (item) {
      setFormData({ ...item });
    } else {
      setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingItem(null);
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateMutation.mutate({ id: editingItem.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      deleteMutation.mutate(id);
    }
  };

  const filteredData = data ? formatData(data).filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) : [];

  if (isLoading) return <Typography>Chargement...</Typography>;
  if (error) return <Alert severity="error">Erreur lors du chargement des données</Alert>;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpen()}
          sx={{ borderRadius: 2 }}
        >
          Ajouter
        </Button>
      </Box>

      <Paper sx={{ mb: 2, p: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: 'action.active', mr: 1 }} />,
          }}
          sx={{ mb: 2 }}
        />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.key} sx={{ fontWeight: 'bold' }}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} hover>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.render ? column.render(item[column.key], item) : item[column.key]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <Tooltip title="Modifier">
                      <IconButton onClick={() => handleOpen(item)} color="primary">
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Supprimer">
                      <IconButton onClick={() => handleDelete(item.id)} color="error">
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {filteredData.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" color="text.secondary">
              Aucun élément trouvé
            </Typography>
          </Box>
        )}
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {editingItem ? 'Modifier' : 'Ajouter'} {title.toLowerCase().slice(0, -1)}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {formFields.map((field) => {
                if (field.type === 'checkbox') {
                  const checked = Boolean(formData[field.name]);
                  return (
                    <Box key={field.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TextField
                        label={field.label}
                        name={field.name}
                        value={checked ? 'Oui' : 'Non'}
                        InputProps={{ readOnly: true }}
                        fullWidth
                      />
                      <Button
                        variant="outlined"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            [field.name]: !checked,
                          }))
                        }
                      >
                        {checked ? 'Désactiver' : 'Activer'}
                      </Button>
                    </Box>
                  );
                }

                return (
                  <TextField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type || 'text'}
                    value={formData[field.name] || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      })
                    }
                    required={field.required}
                    select={field.select}
                    SelectProps={field.SelectProps}
                    fullWidth
                    multiline={field.multiline}
                    rows={field.rows}
                    inputProps={field.step ? { step: field.step } : undefined}
                  >
                    {field.children}
                  </TextField>
                );
              })}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annuler</Button>
            <Button
              type="submit"
              variant="contained"
              disabled={createMutation.isLoading || updateMutation.isLoading}
            >
              {createMutation.isLoading || updateMutation.isLoading ? 'Enregistrement...' : 'Enregistrer'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default CrudTable;