const emailSender = (logger) => {
  const sendEmail = (email) =>
    logger.info("email-sender", `send-email ${email}`);

  return {
    sendEmail,
  };
};

module.exports = emailSender;
