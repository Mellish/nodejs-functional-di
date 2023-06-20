const meterApi = (logger, meterService) => {    

  const getMeterHandler = (request, response) => {
    const queryString = new URLSearchParams(request.query);    
    const meterId = queryString.get("id");
    console.log(`meter id: ${meterId}`);    
    logger.info("api", "get-meter");
    let meter = meterService.getMeter(meterId);
    response.json(meter);
  };

  return {
    getMeterHandler
  };
  
};

module.exports = meterApi;
