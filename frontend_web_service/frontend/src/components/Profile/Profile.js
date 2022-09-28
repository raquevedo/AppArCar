import React from 'react';
import { getPartnerData } from '../../controllers/usersController';

export default function Profile() {

  const partner = getPartnerData().then(partner => {
    return partner;
  });

  return(
    <div>Profile</div>
  );
}