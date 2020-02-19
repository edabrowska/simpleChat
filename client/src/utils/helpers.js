const getUniqueID = () => Math.floor((1 + Math.random()) * 0x10000).toString(16)
  .substring(1)

export const participantID = () => getUniqueID() + '-' + getUniqueID()

export const messageID = () => getUniqueID() + getUniqueID() + '-' + getUniqueID()

export const getMsgHour = () => {
  const msgDate = new Date()
  const msgTime = msgDate.toTimeString()
  const gmt = 'GMT'
  const gmtIndex = msgTime.indexOf(gmt)

  return msgTime.substring(0, gmtIndex)
}