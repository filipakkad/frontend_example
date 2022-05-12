import axios from 'axios';

// TODO - pobierz adres z konfiguracji
axios.defaults.baseURL = 'https://localhost:7095/api';

export default {
  init: () => {
    // Nothing to do
  },
};
