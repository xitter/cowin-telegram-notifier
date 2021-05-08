module.exports = {
    twilio: {   // Get twilio details(accountSid, authToken) from https://console.twilio.com
        accountSid: '',
        authToken: '',
    },
    whatsapp: '+919999999999',  // whatsapp should be same number which you used to setup twilio sandbox, append +91
    interval: 5, // HONOR LIMITS AND KEEP IT >=5, Cowin portal will be checked in this interval(minutes), 
    pincodes: [302017], // Pincodes where slots are needed to be found
    age: 18,    // Age limit, 18 or 45
}