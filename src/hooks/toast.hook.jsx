import { useToast } from 'izitoast-react';

export const warningToast = ({ meesage }) =>
  useToast({
    message: meesage,
    messageColor: '#fff',
    icon: 'fas fa-sad-tear',
    iconColor: '#fff',
    timeout: 6000,
    backgroundColor: '#344258',
    close: false,
    closeOnClick: true,
  });

export const successToast = ({ meesage }) =>
  useToast({
    message: meesage,
    messageColor: '#fff',
    icon: 'fas fa-check',
    iconColor: '#fff',
    timeout: 6000,
    backgroundColor: '#0023ff',
    close: false,
    closeOnClick: true,
  });
