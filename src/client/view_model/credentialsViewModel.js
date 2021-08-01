'use strict'

// NEED TO TEST!
// const { postLoginDetails, postRegisterDetails } = import('/cdn/model/loginModel.js')

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
const createLoginElements = () => {
  /* Login Divider (all elements appended to):
      set divider height to 100% of page (needed for alignment)
      assigns d-flex class (bootstrap 5.0)
      assigns flex-column class (for alzignment)
      aligns elements in the (horizontal) center
      aligns elements in the (vertical) center */
  const loginElements = createDiv(['h-100', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])

  /* Heading:
      assigned bootstrap display class
      adds space below */
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
  const switchDiv = createDiv(['form-check', 'form-switch', 'form-switch-lg', 'mb-5'])
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

  // Attach registerButton to modal register form
  registerButton.setAttribute('data-bs-toggle', 'modal')
  registerButton.setAttribute('data-bs-target', '#registerForm')
  // appending to container
  buttonContainer.appendChild(registerButton)

  // appending container to loginElements
  loginElements.appendChild(buttonContainer)

  return loginElements
}

// Generate Register Elements
const addRegisterElements = () => {
  /* Register Divider (all elements appended to):
      set divider height to 100% of page (needed for alignment)
      assigns d-flex class (bootstrap 5.0)
      assigns flex-column class (for alzignment)
      aligns elements in the (horizontal) center
      aligns elements in the (vertical) center */
  const registerElements = createDiv(['h-100', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center'])

  /* Heading:
          assigned bootstrap display class
          adds space below */
  const heading = document.createElement('h1')
  heading.classList.add('display-1', 'mb-5')
  heading.textContent = 'Register A New Account'
  // appending to registerElements
  registerElements.appendChild(heading)

  const fieldContainer = createDiv(['input-group-vertical', 'w-25', 'mb-3'])
  /* Username Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const usernameField = createInput('text', 'Username', ['form-control', 'form-control-lg', 'mb-2', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(usernameField)

  /* Username Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const emailField = createInput('text', 'Email', ['form-control', 'form-control-lg', 'mb-2', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(emailField)

  /* Password Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const passwordField = createInput('password', 'Password', ['form-control', 'form-control-lg', 'mb-2', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(passwordField)

  /* Password Input Field:
      set bootstrap input class (large version)
      adds space below
      applies backgound gradient for 3D effect */
  const passwordConfirmField = createInput('password', 'Confirm Password', ['form-control', 'form-control-lg', 'field-gradient-custom'])
  // appending to container
  fieldContainer.appendChild(passwordConfirmField)

  // appending container to loginElements
  registerElements.appendChild(fieldContainer)

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
  registerElements.appendChild(switchDiv)

  /* BUTTONS */
  /* Grid Container For Buttons:
      sets class to grid
      applies gap between buttons
      vertically stacks buttons */
  const buttonContainer = createDiv(['d-grid', 'gap-2', 'col-2'])
  // needed for screen reader
  buttonContainer.setAttribute('role', 'group')

  // Log In Button
  const registerButton = document.createElement('a')
  registerButton.setAttribute('id', 'registerButton')
  /*  sets Bootstrap button class
          sets button type (for colour)
          makes button large */
  registerButton.classList.add('btn', 'btn-success', 'btn-lg')
  registerButton.text = 'Register Account'
  // appending to container
  buttonContainer.appendChild(registerButton)

  // appending container to loginElements
  registerElements.appendChild(buttonContainer)

  return registerElements
}

// // Add Register Event listeners
// const addRegisterListeners = () => {
//   document.getElementById('signInButton').addEventListener('click', () => {
//     createLoginElements()
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
//               createLoginElements()
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

// document.body.appendChild(createLoginElements())
// addLoginListeners()

// document.body.appendChild(createLoginElements())
