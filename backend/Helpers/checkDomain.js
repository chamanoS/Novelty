const isValidDomain = require("is-valid-domain"); //regex domain validator
const Domain = require("domain-check").Domain;

async function checkDomainAvailability(userDomain) {
  let domainStatus = {
    isAvailable: false,
    domain: userDomain,
    domain_Availability: "Invalid domain entered"
  };

  if (isValidDomain(userDomain)) {
    try {
      if (await Domain.isFree(userDomain)) {
        //domain is available
        domainStatus.isAvailable = true;
        domainStatus.domain_Availability = "Domain is AVAILABLE for purchase";
        return domainStatus;
      } else {
        //domain is not available
        domainStatus.isAvailable = false;
        domainStatus.domain_Availability = "Domain is NOT AVAILABLE for purchase";
        return domainStatus;
      }
    } catch (error) {
      return "An error has occured!";
    }
  } else {
    return domainStatus;
  }
}

module.exports = { checkDomainAvailability };