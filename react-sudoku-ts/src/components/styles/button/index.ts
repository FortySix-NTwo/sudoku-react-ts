import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.charcoal};
    border: 2px solid ${theme.colors.charcoal};
    border-radius: 4px;
    color: ${theme.colors.honeyDew};
    cursor: pointer;
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: normal;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.8;
    padding: 0;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.colors.celadonBlue};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
