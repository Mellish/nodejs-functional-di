const meterService = (repository, logger) => {
  const getMeter = (meterId) => {
    logger.info("service", `get-meter ${meterId}`);
    let meter = repository.getMeterFromDb(meterId);
    return meter;
  };

  return {
    getMeter,
  };
};

module.exports = meterService;
