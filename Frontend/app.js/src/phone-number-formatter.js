const countryCodeFormats = {
    93: "+93 (XXX) XXX XXXX", 
    355: "+355 (XX) XXX XXXX", 
    91: "+91 X XXXX XXXX",      
    213: "+213 XXX XXXX"         
  };
  
  function formatPhoneNumber(countryCode, phoneNumber) {
    const format = countryCodeFormats[countryCode];
    if (!format) {
      return phoneNumber; // Return unformatted number if code is invalid
    }
  
    const formattedNumber = format.replace(/X/g, ".?").replace(/XXX/g, "[0-9]{3}").replace(/XX/g, "[0-9]{2}");
    const regex = new RegExp("^" + formattedNumber + "$");
  
    if (regex.test(phoneNumber)) {
      return phoneNumber; 
    } else {
      return ""; 
    }
  }
  