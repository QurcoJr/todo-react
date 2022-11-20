const url = 'http://dev.rapptrlabs.com/Tests/scripts/user-login.php'

function login(email, password) {
  const bodyParams = new URLSearchParams({ email, password })
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    body: bodyParams
  })
    .then(async response => {
      const data = await response.json()

      if (response.ok) {
        return Promise.resolve(data)
      }

      return Promise.reject(data.message)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
export default login
