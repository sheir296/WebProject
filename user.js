const UserApi = {
  
  registerUser: async (data) => {
    const res = await fetch(`/v1/user/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
    return res.json()
  },
 