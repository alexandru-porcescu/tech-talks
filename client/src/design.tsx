import styled from '@emotion/styled';
import { Link } from '@reach/router';

import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  lineHeight,
  display,
  flexWrap,
  justifyContent,
  flexDirection,
  alignItems,
  textAlign,
  maxWidth
} from 'styled-system';

import theme from './theme';

const Box = styled('div')`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${display}
  ${flexWrap}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${maxWidth}
`;

const Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${textAlign}
  ${width}
  ${display}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  ${color}
  &:visited {
    color: ${color};
  }
  &:active {
    color: ${color};
  }
`;

const Button = styled('button')`
  ${space}
  ${fontSize}
  border-radius: 4px;
  border: none;
  background-color: ${theme.colors.brand};
  color: ${theme.colors.almostWhite};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.brandLighter};
  }
`;

const TextButton = styled('button')`
  background: none;
  border: none;
  padding: 0;
  &:hover {
    color: ${theme.colors.almostWhite};
  }
  cursor: pointer;
  ${color}
  ${space}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
`;

const A = styled('a')`
  ${color}
  ${fontSize}
`;

const Span = styled('span')`
  ${display}
  ${justifyContent}
  ${flexWrap}
`;

const H1 = Text.withComponent('h1');
const P = Text.withComponent('p');

export { H1, P, A, Span, Box, Button, Text, StyledLink, TextButton };
