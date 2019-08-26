export default function checkUserLoggedId(token) {
  fetch('/users/me',
    {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(res => {
      if (res.status !== 200) {
        console.log(res.statusText)
      } else {
        return res.json()
      }
    })
    .then(data => {
      this.setState({
        user: data
      })
    })

  return
}