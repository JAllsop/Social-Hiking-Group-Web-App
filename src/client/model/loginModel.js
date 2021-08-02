'use strict'

export async function postLoginDetails (username, password) {
  let response = await fetch('/api/auth', {  // eslint-disable-line
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  try {
    // if response redirects go to redirected page
    if (response.redirected) {
      window.location.href = response.url
    } else {
      const result = await response.json()
      if (response.ok) {
        return result.code
      } else { throw new Error(result.code) }
    }
  } catch (err) {
    return err.message
  }
}
