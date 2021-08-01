'use strict'

// NEED TO TEST!
// const { postLoginDetails, postRegisterDetails } = import('/cdn/model/loginModel.js')

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

// addLoginListeners()
// addRegisterListeners()
