const getUniqueID = () => Math.floor((1 + Math.random()) * 0x10000).toString(16)
  .substring(1)

export const participantID = () => getUniqueID() + '-' + getUniqueID()

export const messageID = () => getUniqueID() + getUniqueID() + '-' + getUniqueID()