import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
  puzzle?: boolean
}

export const Container = styled.div<IProps>`
  ${({ puzzle, active, theme }) => css`
    align-items: center;
    background-color: ${active
      ? theme.colors.persianGreen
      : theme.colors.persianBlue};
    border: solid 1px ${theme.colors.celadonBlue};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${puzzle ? 'bold' : 'italic'};
    font-size: 20px;
    font-family: ${puzzle ? 'Montserrat' : 'Handlee'};
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.skyBlue};
    }
  `}
`
