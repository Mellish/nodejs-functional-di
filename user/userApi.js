const userApi = (logger, userService) => {
  const getUserHandler = (request, response) => {
    const queryString = new URLSearchParams(request.query);
    const userId = queryString.get("id");
    console.log(`user id: ${userId}`);
    logger.info("api", "get-user");
    let user = userService.getUser(userId);
    response.json(user);
  };

  return {
    getUserHandler,
  };
};

module.exports = userApi;
