import firebase from 'firebase';
import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ props, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { props, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employee`)
    .push({ name, phone, shift });
};
