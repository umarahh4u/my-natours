/* eslint-disable no-undef */
/*  eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51LQLRZD5viAyeGiykTSXdOvJPVdwxv1fzxZBI68SxhpMfrAhcPqbDTAzbJUADSP6UvXiVxXgGWPSkyYWVz8so3ah00ZO5FdwGV'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //   console.log(session);
    // 2) Create checkout form  + charge credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
