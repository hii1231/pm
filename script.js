// Array to store password entries
const passwordEntries = []

// DOM elements
const form = document.getElementById('add-password-form')
const passwordTableBody = document.getElementById('password-table-body')

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault()

  // Get input values
  const website = document.getElementById('website').value
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  // Add entry to the array
  passwordEntries.push({ website, username, password })

  // Update table
  updateTable()

  // Clear the form
  form.reset()
})

// Update table function
function updateTable() {
  passwordTableBody.innerHTML = '' // Clear existing entries
  passwordEntries.forEach((entry, index) => {
    const row = document.createElement('tr')

    row.innerHTML = `
            <td>${entry.website}</td>
            <td>${entry.username}</td>
            <td>${entry.password}</td>
            <td>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `
    passwordTableBody.appendChild(row)
  })
}

// Delete entry function
function deleteEntry(index) {
  passwordEntries.splice(index, 1)
  updateTable()
}
