'use strict'

// Divider creation helper function
const createDiv = (classList) => {
  const divider = document.createElement('div')
  divider.classList.add(...classList)
  return divider
}

// Input creation helper function
const createInput = (type, id, classList = []) => {
  const element = document.createElement('input')
  element.setAttribute('type', type)
  element.setAttribute('id', id)
  element.setAttribute('placeholder', id)
  element.classList.add(...classList)
  return element
}

// Generate Login Elements
const addLoginElements = () => {
  /* Login Divider (all elements appended to):
      set divider height to 100% of page (needed for alignment)
      assigns d-flex class (bootstrap 5.0)
      assigns flex-column class (for alzignment)
      aligns elements in the (horizontal) center
      aligns elements in the (vertical) center */
  const loginElements = createDiv(['h-100', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])

  // Heading
  const heading = document.createElement('h1')
  heading.classList.add('display-1', 'mb-5')
  heading.textContent = 'Hiking Organiser'
  // appending to loginElements
  loginElements.appendChild(heading)

  /* INPUT ELEMENTS */
  /*****************/
  /* Container For Input Fields:
      stacks inputs vertically
      sets width
      adds space below */
  const fieldContainer = createDiv(['input-group-vertical', 'w-25', 'mb-3'])
  /* Username Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const usernameField = createInput('text', 'Username', ['form-control', 'form-control-lg', 'mb-2', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(usernameField)

  /* Password Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const passwordField = createInput('password', 'Password', ['form-control', 'form-control-lg', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(passwordField)

  // appending container to loginElements
  loginElements.appendChild(fieldContainer)

  /* PASSWORD VIEW CHECKBOX */
  /* Material Checkbox/Switch:
      sets bootstrap class
      increases size according to loginPage-style.css
      adds space below */
  const switchDiv = createDiv(['form-check', 'form-switch', 'form-switch-md', 'mb-5'])
  const viewPass = createInput('checkbox', 'viewPass', ['form-check-input'])
  // Checkbox Text
  const viewPassLabel = document.createElement('label')
  viewPassLabel.classList.add(['form-check-label'])
  viewPassLabel.innerText = 'View Password'

  // appending to switch divider
  switchDiv.appendChild(viewPass)
  switchDiv.appendChild(viewPassLabel)

  // appending to loginElements
  loginElements.appendChild(switchDiv)

  /* BUTTONS */
  /* Grid Container For Buttons:
      sets class to grid
      applies gap between buttons
      vertically stacks buttons */
  const buttonContainer = createDiv(['d-grid', 'gap-2', 'col-2'])
  // needed for screen reader
  buttonContainer.setAttribute('role', 'group')

  // Log In Button
  const loginButton = document.createElement('a')
  loginButton.setAttribute('id', 'loginButton')
  /*  sets Bootstrap button class
      sets button type (for colour)
      makes button large */
  loginButton.classList.add('btn', 'btn-success', 'btn-lg')
  loginButton.text = 'Login'
  // appending to container
  buttonContainer.appendChild(loginButton)

  // Register Button
  const registerButton = document.createElement('a')
  registerButton.setAttribute('id', 'registerButton')
  /*  sets Bootstrap button class
      sets button type (for colour)
      makes button large */
  registerButton.classList.add('btn', 'btn-secondary', 'btn-lg')
  registerButton.text = 'Register A New Account'
  // appending to container
  buttonContainer.appendChild(registerButton)

  // appending container to loginElements
  loginElements.appendChild(buttonContainer)

  // appending login elements to document body
  document.body.appendChild(loginElements)
}

// Generate Register Elements
// const addRegisterElements = () => {
//   document.body.innerHTML = '<h1> Register A New Account <h1>'

//   document.body.innerHTML += ('Username: <br>')
//   createInput('text', 'username')

//   document.body.innerHTML += ('Email: <br>')
//   createInput('email', 'email')

//   document.body.innerHTML += ('Password: <br>')
//   createInput('password', 'password')

//   document.body.innerHTML += ('Confirm Password: <br>')
//   createInput('password', 'passwordConfirm')

//   const signUpButton = document.createElement('button')
//   signUpButton.setAttribute('id', 'signUpButton')
//   signUpButton.innerHTML = 'Sign Up'
//   document.body.appendChild(signUpButton)

//   const signInButton = document.createElement('button')
//   signInButton.setAttribute('id', 'signInButton')
//   signInButton.innerHTML = 'Return to Log In'
//   document.body.appendChild(signInButton)
// }

// // Add Register Event listeners
// const addRegisterListeners = () => {
//   document.getElementById('signInButton').addEventListener('click', () => {
//     addLoginElements()
//     addLoginListeners()
//   })

//   import('../model/registerModel.js').then(({ postRegisterDetails }) => {
//     // Send register information via registerModel
//     document.getElementById('signUpButton').addEventListener('click', () => {
//       const username = document.getElementById('username').value
//       const email = document.getElementById('email').value

//       const pass = document.getElementById('password').value
//       const passConfirm = document.getElementById('passwordConfirm').value
//       if (pass !== passConfirm) {
//           alert('Passwords do NOT match') // eslint-disable-line
//       } else {
//         postRegisterDetails(username, pass, email)
//           .then((code) => {
//             // Add Login Elements if Registration Successful
//             if (code === 'Account Registered') {
//               addLoginElements()
//               addLoginListeners()
//             }
//           })
//       }
//     }, false)
//   })
// }

// // Add Login Event Listeners
// const addLoginListeners = () => {
//   // password reveal/hide via radio button
//   document.getElementById('showPassword').addEventListener('click', () => {
//     const checkbox = document.getElementById('showPassword')
//     const passwordField = document.getElementById('Password')
//     if (checkbox.checked) {
//       passwordField.type = 'text'
//     } else if (!checkbox.checked) {
//       passwordField.type = 'password'
//     }
//   })

//   // Enter button press initiates login for password field
//   document.getElementById('Password').addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//       document.getElementById('loginButton').click()
//     }
//   })

//   // Enter button press initiates login for username field
//   document.getElementById('Username').addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//       document.getElementById('loginButton').click()
//     }
//   })

//   import('../model/loginModel.js').then(({ postLoginDetails }) => {
//   // Send Login Information via loginModel
//     document.getElementById('loginButton').addEventListener('click', () => {
//       const username = document.getElementById('Username').value
//       const password = document.getElementById('Password').value
//       if (username === '' || password === '') {
//       alert('Please Enter a Username and Password') // eslint-disable-line
//       } else {
//         postLoginDetails(username, password)
//       }
//     }, false)
//   })

//   document.getElementById('registerButton').addEventListener('click', () => {
//     addRegisterElements()
//     addRegisterListeners()
//   })
// }

addLoginElements()
// addLoginListeners()
