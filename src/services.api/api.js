import axios from 'axios';

export const requestContacts = async () => {
  const { data } = await axios.get(
    'https://64189bf829e7e36438ecce1f.mockapi.io/contacts'
  );
  return data;
};
