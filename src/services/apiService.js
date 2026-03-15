import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

class ApiService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
    });
  }

  // Generic CRUD methods
  async get(endpoint, params = {}) {
    const response = await this.client.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async put(endpoint, data) {
    const response = await this.client.put(endpoint, data);
    return response.data;
  }

  async delete(endpoint) {
    const response = await this.client.delete(endpoint);
    return response.data;
  }

  // Specific API endpoints
  // Users
  getUsers(params) { return this.get('/users/', params); }
  getUser(id) { return this.get(`/users/${id}/`); }
  createUser(data) { return this.post('/users/', data); }
  updateUser(id, data) { return this.put(`/users/${id}/`, data); }
  deleteUser(id) { return this.delete(`/users/${id}/`); }

  // Clients
  getClients(params) { return this.get('/clients/', params); }
  getClient(id) { return this.get(`/clients/${id}/`); }
  createClient(data) { return this.post('/clients/', data); }
  updateClient(id, data) { return this.put(`/clients/${id}/`, data); }
  deleteClient(id) { return this.delete(`/clients/${id}/`); }

  // Materiels
  getMateriels(params) { return this.get('/materiels/', params); }
  getMateriel(id) { return this.get(`/materiels/${id}/`); }
  createMateriel(data) { return this.post('/materiels/', data); }
  updateMateriel(id, data) { return this.put(`/materiels/${id}/`, data); }
  deleteMateriel(id) { return this.delete(`/materiels/${id}/`); }

  // Demande Maintenances
  getDemandeMaintenances(params) { return this.get('/demande-maintenances/', params); }
  getDemandeMaintenance(id) { return this.get(`/demande-maintenances/${id}/`); }
  createDemandeMaintenance(data) { return this.post('/demande-maintenances/', data); }
  updateDemandeMaintenance(id, data) { return this.put(`/demande-maintenances/${id}/`, data); }
  deleteDemandeMaintenance(id) { return this.delete(`/demande-maintenances/${id}/`); }

  // Interventions
  getInterventions(params) { return this.get('/interventions/', params); }
  getIntervention(id) { return this.get(`/interventions/${id}/`); }
  createIntervention(data) { return this.post('/interventions/', data); }
  updateIntervention(id, data) { return this.put(`/interventions/${id}/`, data); }
  deleteIntervention(id) { return this.delete(`/interventions/${id}/`); }

  // Fiche Reparations
  getFicheReparations(params) { return this.get('/fiche-reparations/', params); }
  getFicheReparation(id) { return this.get(`/fiche-reparations/${id}/`); }
  createFicheReparation(data) { return this.post('/fiche-reparations/', data); }
  updateFicheReparation(id, data) { return this.put(`/fiche-reparations/${id}/`, data); }
  deleteFicheReparation(id) { return this.delete(`/fiche-reparations/${id}/`); }

  // Pieces
  getPieces(params) { return this.get('/pieces/', params); }
  getPiece(id) { return this.get(`/pieces/${id}/`); }
  createPiece(data) { return this.post('/pieces/', data); }
  updatePiece(id, data) { return this.put(`/pieces/${id}/`, data); }
  deletePiece(id) { return this.delete(`/pieces/${id}/`); }

  // Demande Pieces
  getDemandePieces(params) { return this.get('/demande-pieces/', params); }
  getDemandePiece(id) { return this.get(`/demande-pieces/${id}/`); }
  createDemandePiece(data) { return this.post('/demande-pieces/', data); }
  updateDemandePiece(id, data) { return this.put(`/demande-pieces/${id}/`, data); }
  deleteDemandePiece(id) { return this.delete(`/demande-pieces/${id}/`); }

  // Factures
  getFactures(params) { return this.get('/factures/', params); }
  getFacture(id) { return this.get(`/factures/${id}/`); }
  createFacture(data) { return this.post('/factures/', data); }
  updateFacture(id, data) { return this.put(`/factures/${id}/`, data); }
  deleteFacture(id) { return this.delete(`/factures/${id}/`); }

  // Paiements
  getPaiements(params) { return this.get('/paiements/', params); }
  getPaiement(id) { return this.get(`/paiements/${id}/`); }
  createPaiement(data) { return this.post('/paiements/', data); }
  updatePaiement(id, data) { return this.put(`/paiements/${id}/`, data); }
  deletePaiement(id) { return this.delete(`/paiements/${id}/`); }

  // Messages
  getMessages(params) { return this.get('/messages/', params); }
  getMessage(id) { return this.get(`/messages/${id}/`); }
  createMessage(data) { return this.post('/messages/', data); }
  updateMessage(id, data) { return this.put(`/messages/${id}/`, data); }
  deleteMessage(id) { return this.delete(`/messages/${id}/`); }
}

export const apiService = new ApiService();