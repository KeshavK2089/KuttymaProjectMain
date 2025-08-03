module.exports = {
    name: "Kuttyma Digital Advisors",
    email: "keshav@kuttyma.com",
    phoneForTel: "+302-897-6913",
    phoneFormatted: "+1 302 897 6913",
    address: {
        lineOne: "Middletown, Delaware",
        city: "Chennai",
        state: "Tamil Nadu",
        country: "US",
    },
    socials: {
        facebook: "https://www.facebook.com/kuttymaweb",
        instagram: "https://www.instagram.com/kuttymaweb",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.kuttyma.in",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
