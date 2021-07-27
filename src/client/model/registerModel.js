'use strict'

export async function postRegisterDetails (username, password, email) {
  let response = await fetch('/api/register', {  // eslint-disable-line
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email
    })
  })
  try {
    // if response redirects go to redirected page
    if (response.redirected) {
      window.location.href = response.url
      location.reload() // eslint-disable-line
    } else {
      const result = await response.json()
      if (response.ok) {
        return result.code
      } else { throw new Error(result.code) }
    }
  } catch (err) {
      alert(err)  // eslint-disable-line
  }
}
