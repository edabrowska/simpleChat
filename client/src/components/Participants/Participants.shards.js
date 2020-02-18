import styled from '@emotion/styled'

export const ParticipantsRoot = styled.section`
  width: 100%;
`

export const ParticipantTile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 40px;
  border-bottom: ${({ theme }) => theme.commons.borders.main};
`