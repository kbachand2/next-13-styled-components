'use client';
import React from 'react';

//this will be the only component you need and will house the styled component

import styled from 'styled-components';

const MainWrapper = styled.main`
  width: 100%;
  max-width: 800px;
  padding: 16px 24px;
  margin: 0px auto;
  border: 1px solid hsl(0deg 0% 50% / 0.3);
  border-radius: 2px;
  background: white;
`;

export default MainWrapper;