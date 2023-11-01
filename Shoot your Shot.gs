function sendEmailsShootYourShot() {
  // Get the Google Sheets spreadsheet.
  var spreadsheet = SpreadsheetApp.openById("1z0BjJKWcGdyhRPHISyQwpcStp5ySvU_g88-bT9EEVTI");

  // Get the sheet that contains the email recipients and their details.
  var sheet = spreadsheet.getSheetByName("Shoot your Shot");

  // Get the data range from the sheet.
  var dataRange = sheet.getDataRange();

  // Get all of the values from the data range.
  var values = dataRange.getValues();

  // Loop through the rows of the data range and send an email to each recipient.
  for (var i = 1; i < values.length; i++) {
    // Get the recipient's email address.
    var emailAddress = values[i][1];
  
    // Get the recipient's name.
    var teamName = values[i][2];
    var schoolName = values[i][3];
    var checkPhoto = values[i][9];
    var emailSent = values[i][10];
    if(checkPhoto==true & emailSent==false)
    {
      var message =  "Dear "+ teamName +", <br><br>We are very happy to inform you that your registration for Shoot Your Shot, IGNITE 2023 is confirmed!<br><br>Please check the below details from your registration are correct:<br>School name: "+schoolName+"<br><br> Please make sure you go through the rules and regulations given here and on the website. <br><br>Please visit the <a href='https://gwhignite.com/'>IGNITE website</a> here for more details on your event. The rules and regulations specific to your event will also be specified there. Adherence to all these rules is vital and there will be strict action taken if they are broken. <br><br>Rules:<br>1)Participants are to bring their own digital cameras or DSLRs and are responsible for the safety of their belongings. The school is not responsible for any thefts or damage and will NOT be providing cameras.<br>2)No phones or polaroid cameras are allowed for photographing your portraits<br>3)Consent forms will provided for participants to ensure they obtain consent from whoever they photograph and participants should send in a picture of the form when uploading pics<br>4)Apart from post processing, no other forms of editing software/effects are allowed to be used<br>5)Any indecent or inappropriate photographs is STRICTLY forbidden and will result in IMMEDIATE disqualification and disciplinary action<br>6)Links to a form and drive will be sent to you a day prior to the event. Please check your email regularly to stay updated! <br><br>Good luck!<br><br>Follow our official IGNITE <a href='https://www.instagram.com/ignite.gwh/'>Instagram page</a> to get updates and a peek into the behind-the-scenes of this event.  <br><br>We hope you enjoy your time at IGNITE 2023, and we are so excited to see you on November 3 and 4!<br><br>Kind Regards,<br>Registrations Team.";
      
      // Send the email.
      MailApp.sendEmail({
        to: emailAddress,
        subject: "IGNITE 2023 Registration Confirmation Email",
        body: message,
        htmlBody: message
      });
      //make email sent as true
      sheet.getRange(i+1, 11).setValue(true);
      console.log('done for '+teamName);
    }
  }
}
