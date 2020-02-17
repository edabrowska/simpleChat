import styled from '@emotion/styled'

export const RootForm = styled.form`
  width: 100%;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 29px;
  border: ${({ theme }) => theme.commons.borders.input};
  border-radius: 5px;
`
