import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const TabsRoot = styled.section`
  width: 100%;
`

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`

export const TabTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: ${({ theme }) => theme.commons.borders.main};

  ${({ isActive, theme }) => isActive && css`
    background-color: ${theme.colors.background.primary};
    border-top: ${theme.commons.borders.main};
    border-bottom: ${theme.commons.borders.transparent};
  `}

  ${({ isActive, index, theme }) => isActive && index === 0 && css`
    &:first-of-type {
      border-top-right-radius: 5px;
      border-top-left-radius: 0;
      border-right: ${theme.commons.borders.main};
    }
  `}

  ${({ isActive, index, theme }) => isActive && index === 1 && css`
    &:last-of-type {
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-left: ${theme.commons.borders.main};
    }
  `}

  &:hover {
    opacity: .9;
  }
`

export const TabContent = styled.div`
  display: none;

  ${({ isActive }) => isActive && css`
    display: block;
    width: 100%;
  `}
`
