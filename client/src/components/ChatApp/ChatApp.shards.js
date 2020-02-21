import styled from '@emotion/styled'

export const ChatAppRoot = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    width: 720px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 122px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  letter-spacing: 1.7px;
  text-transform: capitalize;
`

export const Error = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${({ theme }) => theme.colors.text.error};
  font-size: 1.3rem;
`