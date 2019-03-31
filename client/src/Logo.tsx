import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import theme from './theme';
import { space } from 'styled-system';

const StyledLogo = styled('h1')`
  color: ${theme.colors.brand};
  font-weight: 800;
  ${space}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: ${theme.colors.brand};
  }
  &:hover {
    color: ${theme.colors.brandLighter};
  }
`;

function Logo() {
  return (
    <StyledLogo my={0}>
      <StyledLink to="/">TechTalks</StyledLink>
    </StyledLogo>
  );
}

export default Logo;