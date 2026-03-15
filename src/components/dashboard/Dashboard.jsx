import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  People,
  Business,
  Build,
  Assignment,
  Engineering,
  Receipt,
  Inventory,
  Payment,
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Utilisateurs', value: '12', icon: <People />, color: '#1976d2' },
    { title: 'Clients', value: '45', icon: <Business />, color: '#388e3c' },
    { title: 'Matériels', value: '23', icon: <Build />, color: '#f57c00' },
    { title: 'Demandes', value: '8', icon: <Assignment />, color: '#7b1fa2' },
    { title: 'Interventions', value: '15', icon: <Engineering />, color: '#d32f2f' },
    { title: 'Factures', value: '32', icon: <Receipt />, color: '#0288d1' },
    { title: 'Pièces', value: '67', icon: <Inventory />, color: '#689f38' },
    { title: 'Paiements', value: '28', icon: <Payment />, color: '#fbc02d' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Tableau de bord
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Avatar
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    bgcolor: stat.color,
                    width: 56,
                    height: 56,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Activités récentes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aucune activité récente à afficher.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Statistiques mensuelles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Graphiques et statistiques à implémenter.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;