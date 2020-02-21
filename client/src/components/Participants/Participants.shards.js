import styled from '@emotion/styled'

export const ParticipantsRoot = styled.section`
  width: 100%;
  height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
`
export const ParticipantsWrapper = styled.div`
  height: 100%;
  padding: 0 30px;
  overflow: auto;
  flex-grow: 1;
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