import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
