import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { EVENT_TYPE } from '../../utils/consts.js'

export const ChatMessageRoot = styled.div`
  position: relative;
  padding-left: 17px;
  padding-bottom: 17px;

  &:first-of-type {
    margin-top: 25px;
  }

  &:hover {
    button {
      display: inline-block;
    }
  }
`

export const Controls = styled.div`
  position: absolute;
  top: -5px;
  right: 0px;
  font-size: 2rem;

  @media (min-width: 768px) {
    top: 3px;
  }
`

const Button = styled.button`
  display: none;
  cursor: pointer;
  border: ${({ theme }) => theme.commons.borders.main};
  border-radius: ${({ theme }) => theme.commons.borderRadius.main};

  &:hover,
  &:focus {
    opacity: .6;
  }
`

export const EditButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text.link};
  padding: 2px 6px;
  margin-right: 10px;
`

export const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text.error};
  padding: 2px 8px;
`

export const Header = styled.div`
  display: flex;
  margin: 11px 0 5px;
`

export const Name = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  margin-right: 15px;
  max-width: 280px;

  @media (min-width: 768px) {
    max-width: 435px;
  }
`

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.placeholder};
`

export const Content = styled.p`
  letter-spacing: 1.4px;
  line-height: 1.6;

  ${({ type, theme }) => type === EVENT_TYPE.MESSAGE_REMOVE && css`
    color: ${theme.colors.text.placeholder};
    font-style: italic;
  `}
`

export const Edited = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.placeholder};
`