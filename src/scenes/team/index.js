import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TeamCollaborador from './TeamCollaborador';

import Header from '../../components/Header';

import UIButton from './Button/Button';

const Team = () => {
  const navigate = useNavigate();

  return (
    <Box m="20px">
      <Header title="System Manage" subtitle="List of Collaborators" />{' '}
      <UIButton onClick={() => navigate('/NewCollaborators')} />
      <TeamCollaborador />
    </Box>
  );
};

export default Team;
