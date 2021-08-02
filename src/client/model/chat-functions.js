'use strict'

export const retrieveGroupMessages = async (groupID) => {
  const params = { groupID: groupID }
  const response = await fetch('http://localhost:3000/messages/get-messages', { // eslint-disable-line
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
      .catch((error) => console.error('Error:', error))
  })
  return response.json()
}

export const getUsername = async () => { // Get username based on session
  const response = await fetch('http://localhost:3000/user/api/username', { //eslint-disable-line
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
export default { retrieveGroupMessages, getUsername }
