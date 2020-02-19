import styled from '@emotion/styled'

export const RootForm = styled.form`
  width: 100%;
  padding: 15px 0;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 27px 33px;
  letter-spacing: 2px;
  border: ${({ theme }) => theme.commons.borders.input};
  border-radius: ${({ theme }) => theme.commons.borderRadius.main};

  &:placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`
