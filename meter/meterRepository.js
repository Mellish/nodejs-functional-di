const meterRepository = (logger) => {
    const getMeterFromDb = (meterId) => {
     
      logger.info("repository", `get-meter ${meterId}`);
  
      return {
        name: meterId,
        fuelType: 'gas',
      };
    };
  
    return {
      getMeterFromDb,
    };
  };
  
  module.exports = meterRepository;