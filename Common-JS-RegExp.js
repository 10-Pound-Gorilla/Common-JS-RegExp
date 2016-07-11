// Email
// This email regex is not fully RFC5322-compliant, but it will validate most common email address formats correctly.
var emailRegex = /[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;

// Phone Number (North America)
// This regex will validate a 10-digit North American telephone number. Separators are not required, but can include spaces, hyphens, or periods. Parentheses around the area code are also optional.
var phoneNARegex = /(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})/;

// Postal Code (USA)
var zipUSARegex = /[0-9]{5}(?:-[0-9]{4})?/;

// Alpha-numeric characters only
var lettersNumbersRegex = /[a-zA-Z0-9]+/;

// Alphabetic characters only
var lettersRegex = /[a-zA-Z]+/;

// Date (MM/DD/YYYY)
// Validate the calendar date in MM/DD/YYYY format with this regex. Optional separators are spaces, hyphens, forward slashes, and periods. The year is limited between 1900 and 2099.
var dateRegex = /(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}/;

// Date (YYYY/MM/DD)
// Validate the calendar date in YYYY/MM/DD format with this regex. Optional separators are spaces, hyphens, forward slashes, and periods. The year is limited between 1900 and 2099.
var date2Regex = /(19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])/;

// Digits only (whole numbers)
var digitsRegex = /[0-9]+/;

// IP Address
var ipRegex = /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;

// Hexadecimal
var hexRegex = /#?([a-f0-9]{6}|[a-f0-9]{3})/;

// Password
// Allows 6-18 characters, All case letters, digits, and specific special characters (-=!@#$%^&*()_+)
var passwordRegex = /[a-zA-Z0-9_\-!@#$%^&*()+=]{6,18}/;

// URL
var urlRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;

// Time
// 12 or 24 hour, optional seconds, optional am or pm case insensisitive with or without space seperated
var timeRegex = /([0-24]{2}|[0-9]{1})+:+([0-59]{2})+:?([0-59]{2})? ?(am|AM|pm|PM)?/;