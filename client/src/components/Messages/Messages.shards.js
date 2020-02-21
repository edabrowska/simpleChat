import styled from '@emotion/styled'

export const MessagesRoot = styled.section`
  width: 100%;
  height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
`

export const MessagesWrapper = styled.div`
  height: 100%;
  padding: 0 30px;
  overflow: auto;
  flex-grow: 1;
`