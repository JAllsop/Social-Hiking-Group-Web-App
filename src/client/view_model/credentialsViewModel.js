'use strict'

// Input generation helper
const addInput = (type, id) => {
  const element = document.createElement('input')
  element.setAttribute('type', type)
  element.setAttribute('id', id)
  document.body.appendChild(element)
  document.body.innerHTML += ('<br>')
}

// Generate Login Elements
const addLoginElements = () => {
  document.body.innerHTML = '<h1> Hiking Organiser <h1>'
  document.body.innerHTML += ('</div>')

  document.body.innerHTML += ('Username: <br>')
  addInput('text', 'username')

  document.body.innerHTML += ('Password: <br>')
  addInput('password', 'password')

  addInput('checkbox', 'showPassword')
  const x = document.getElementsByTagName('br')
  x[x.length - 1].parentNode.removeChild(x[x.length - 1])
  x[x.length - 1].parentNode.removeChild(x[x.length - 1])
  document.body.innerHTML += 'Show Password </div> <div>'

  document.body.innerHTML += ('<br>')
  const signUpButton = document.createElement('button')
  signUpButton.setAttribute('id', 'loginButton')
  signUpButton.innerHTML = 'Log In'
  document.body.appendChild(signUpButton)

  const signInButton = document.createElement('button')
  signInButton.setAttribute('id', 'registerButton')
  signInButton.innerHTML = 'Register New Account'
  document.body.appendChild(signInButton)

  document.body.innerHTML += '</div>'
}

// Add Login Event Listeners
const addLoginListeners = () => {
  // password reveal/hide via radio button
  document.getElementById('showPassword').addEventListener('click', () => {
    const checkbox = document.getElementById('showPassword')
    const passwordField = document.getElementById('password')
    if (checkbox.checked) {
      passwordField.type = 'text'
    } else if (!checkbox.checked) {
      passwordField.type = 'password'
    }
  })

  // Enter button press initiates login for password field
  document.getElementById('password').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('loginButton').click()
    }
  })

  // Enter button press initiates login for username field
  document.getElementById('username').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('loginButton').click()
    }
  })

  import('../model/loginModel.js').then(({ postLoginDetails }) => {
  // Send Login Information via loginModel
    document.getElementById('loginButton').addEventListener('click', () => {
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      if (username === '' || password === '') {
      alert('Please Enter a Username and Password') // eslint-disable-line
      } else {
        postLoginDetails(username, password)
      }
    }, false)
  })

  document.getElementById('registerButton').addEventListener('click', () => {

  })
}

addLoginElements()
addLoginListeners()
