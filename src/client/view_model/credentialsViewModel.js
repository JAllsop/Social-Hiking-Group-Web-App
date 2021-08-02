'use strict'

// bootstrap alert helper function
const showAlert = (alert, message, registration = false) => {
  const alertWindow = document.createElement('div')
  alertWindow.classList.add('alert', `alert-${alert}`, 'alert-dismissible', 'fade', 'show')
  alertWindow.classList.add('position-absolute', 'start-50', 'translate-middle')

  // position will change if registration form is open
  if (registration) {
    alertWindow.classList.add('top-50')
  } else { alertWindow.classList.add('top-0', 'mt-6') }

  const boldText = document.createElement('strong')
  // appending Alert Type and Capitalizing First Letter
  const alertType = document.createTextNode(`${alert.charAt(0).toUpperCase() + alert.slice(1)}! `)
  boldText.appendChild(alertType)
  alertWindow.appendChild(boldText)

  const messageText = document.createTextNode(`${message}`)
  alertWindow.appendChild(messageText)

  // necessary bootstrap messages
  const close = document.createElement('button')
  close.setAttribute('type', 'button')
  close.setAttribute('data-bs-dismiss', 'alert')
  close.setAttribute('aria-label', 'Close')
  close.classList.add('btn-close')

  alertWindow.appendChild(close)
  if (registration) {
    document.getElementById('register_response').appendChild(alertWindow)
  } else { document.body.appendChild(alertWindow) }

  // alert will close and delete itself after 4 seconds
  setTimeout(() => { close.click() }, 4000)
}

// Add Element Event Listeners
const addEventListeners = () => {
  // password reveal/hide via radio button
  document.getElementById('login_view_password_toggle').addEventListener('click', () => {
    const viewPassToggle = document.getElementById('login_view_password_toggle')
    const viewPassToggleLabel = document.getElementById('login_view_password_toggle_label')
    const passwordField = document.getElementById('login_password')

    // clunky implementation, will change toggle button color to red in future (bootstrap issue)
    if (viewPassToggle.checked) {
      passwordField.type = 'text'
      viewPassToggleLabel.textContent = 'Hiding Password'
      // viewPassToggleLabel.style.color = '#008756'
    } else if (!viewPassToggle.checked) {
      passwordField.type = 'password'
      viewPassToggleLabel.textContent = 'Viewing Password'
      // viewPassToggleLabel.style.color = '#d9534f'
    }
  })

  // Enter button press initiates login if login input field selected
  document.getElementById('login_username').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('login_button').click()
    }
  })
  document.getElementById('login_password').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('login_button').click()
    }
  })

  // Send Login Information via loginModel
  import('/cdn/model/loginModel.js').then(({ postLoginDetails }) => { // eslint-disable-line
    document.getElementById('login_button').addEventListener('click', () => {
      const username = document.getElementById('login_username').value
      const password = document.getElementById('login_password').value
      if (!username || !password === '') {
        showAlert('warning', 'Please Enter a Username and Password')
      } else {
        postLoginDetails(username, password)
          .then((code) => {
            showAlert('warning', code)
          })
      }
    }, false)
  })

  /* Enter button press initiates registration if confirm password field is selected
      as it is the last field in the list */
  document.getElementById('register_confirm_password').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('register_button').click()
    }
  })

  import('/cdn/model/registerModel.js').then(({ postRegisterDetails }) => { // eslint-disable-line
    // Send register information via registerModel
    document.getElementById('register_button').addEventListener('click', () => {
      const username = document.getElementById('register_username').value
      const email = document.getElementById('register_email').value

      const pass = document.getElementById('register_password').value
      const passConfirm = document.getElementById('register_confirm_password').value
      if (pass !== passConfirm) {
        showAlert('warning', 'The provided passwords do not match', true)
      } else {
        postRegisterDetails(username, pass, email)
          .then((code) => {
            // Add Login Elements if Registration Successful
            if (code === 'Account Registered') {
              showAlert('success', 'Account registered you can now log in')
              document.getElementById.length('register_close_button').click()
            } else { showAlert('warning', code, true) }
          })
      }
    }, false)
  })
}

addEventListeners()
