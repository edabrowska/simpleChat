import styled from '@emotion/styled'

export const ParticipantsRoot = styled.section`
  width: 100%;
  padding: 0 30px;
`

export const ParticipantTile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  padding-left: 12px;
  border-bottom: ${({ theme }) => theme.commons.borders.main};
  text-transform: capitalize;
`