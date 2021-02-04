const create = (request, response) => {
  const { player, opponent } = request.body

  return response.json({ player, opponent })
}

module.exports = { create }
