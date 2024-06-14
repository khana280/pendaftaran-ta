import batasPendaftaran from '../controllers/BatasPendaftaran';

const routes = [
  {
    url: '/batas-pendaftaran',
    method: 'POST',
    handler: batasPendaftaran.createThesisRegistration
  },
  {
    url: '/batas-pendaftaran/:id',
    method: 'PUT',
    handler: batasPendaftaran.updateThesisRegistration
  },
  {
    url: '/batas-pendaftaran/:id',
    method: 'DELETE',
    handler: batasPendaftaran.destroyThesisRegistration
  }
]

export default routes;