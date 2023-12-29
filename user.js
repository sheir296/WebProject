const UserApi = {
  
  registerUser: async (data) => {
    const res = await fetch(`/v1/user/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  updateUser: async (userId , data) => {
    const res = await fetch(`/v1/user/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  login: async (username, password) => {
    const res = await fetch("/v1/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
  getProfile: async () => {
    const res = await fetch(`/v1/user/${userId}`, { method: "GET" })
    return res.json()
  },
  logout: async () => {
    const res = await fetch("/v1/user/logout", { method: "GET" })
    return res.json()
  },
}

module.exports = { UserApi }
