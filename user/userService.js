const userService = (repository, emailSender, logger) => {
  
  const getUser = (userName) => {
    logger.info("service", `get-user ${userName}`);
    let user = repository.getUserFromDb(userName);
    emailSender.sendEmail(user.email);

    return user;
  };

  return {
    getUser,
  };
};

module.exports = userService;
