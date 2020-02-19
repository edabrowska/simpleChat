import styled from '@emotion/styled'

export const ChatMessageRoot = styled.div`
  padding-left: 17px;
  padding-bottom: 17px;

  &:first-of-type {
    padding-top: 25px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 11px 0 5px;
`

export const Name = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  margin-right: 15px;
`

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text.placeholder};
`

export const Content = styled.p`
  letter-spacing: 1.4px;
  line-height: 1.6;
`