const userRepository = (logger) => {
  const getUserFromDb = (userName) => {
   
    logger.info("repository", `get-user ${userName}`);

    return {
      name: userName,
      email: `${userName}@gmail.com`,
    };
  };

  return {
    getUserFromDb,
  };
};

module.exports = userRepository;
