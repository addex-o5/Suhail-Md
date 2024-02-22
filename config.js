const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Maher-Zubair:SIGMA-MD@zubi.9g6b16y.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 





global.disablepm = process.env.DISABLE_PM || "false",
global.userImages = process.env.USER_IMAGES|| "text",
global.style = process.env.STYLE || "5",  // put '1' to "5" here to check bot styles




global.devs = "923184474176" // Developer Conatact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023440982";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  //style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7-qr",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "addex",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SUHAIL_19_36_02_22_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEhwQ1BWZUhNWmNpVTZsa2JORTJjZXljZDRQOEJMWDh3Q1BKZE5qL1czbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm93ZHFBbW45N2c2RWVneFpKdnhlajEvSmxWNnYzQjl0WU9zTHlyTWE3Z3M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQU8zbzNEdkIzT1lTVDd6Y0dxWk5STmpLcXdpNG1QTTBieVZ6WGlrRGJYZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInY3N05pMWN5YnVoNWFnMmtYZEhyM0Qzc2hSRUFkMHpkZU8yQld1bGUzQlk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVU9vL1ZMdHJUcmVDNnRORmZzOXNoVWJHQTBuc1k2dER4dFpuTW9Xek1tST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi81VmNuTkpNYkF0QmpxOEZFZHBFbU5MMFdDczF1VXQybDJwUFNaa3NwVk09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4TXM1L1pZcHRleDNSS3ZYcGVBdEpSWjh1dWlzZCtUL2dHRGxCUjVBTTI0PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMFNkS2g2R2RWb24xZlFzbG9tVlYzMWJRZjJEZWIxQmVncUMrQzVWZUpSTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFYittaTFlOVZ4b05ZUisxMFBmcGJTWDZrZWd5U2hnLzN2ZXcwWWlmeEdOTTVYSTM4TkM1TDNCTHlNdkl1OExhb1BrYWNsalJiL2RJRE9qY0poWitoZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTAsXCJhZHZTZWNyZXRLZXlcIjpcInFjUXgyL1N0SVpEZGNiTzVtUTcyVDREbFlDdHZLU1Z3WWphNEFLNzhFOXc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJQLVp3VGVkbVEwbWp2ZW01UVVXd0RRXCIsXCJwaG9uZUlkXCI6XCJiY2E0YjI4Ni0wNDVlLTQwZDQtOTY3Mi1hZjk0N2FmOTBkNDFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFUWklXMzhqajBtcWdqMVhXeFRQTlJkMnNGOD1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJxL2dMc21CamVRaDZnVXJFMjlSTktzdjlJUUk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiQUZFOVNFQThcIixcIm1lXCI6e1wiaWRcIjpcIjIzNDkwMjM0NDA5ODI6NUBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyMzE2NzM4OTE0MzI1Mzo1QGxpZFwiLFwibmFtZVwiOlwi6qeB4KaU4Kej4pis4pye5Y2C4Zeq4Zeq5LmH5LmCX+OEljXinJ7imKzgppTgp6Pqp4JcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0lTdnRMWUVFTHpFM3E0R0dBTT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIm5vYWx3SkljdFZqdmFZd2xyMER6Z2hHZ1MreGU5TjVCTXNsNXRrbkZqR009XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJHdG92cVJhNEplWDR4UUxLa3hadDZjOFZ1c0F0d3QzY05pYi9qYkRYZEJSaEFNSnZ2cWM2TWNrZVlvSW5XejRwVG1kMllwcjJhWWliVmxMNVJnZDhBQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcInZJSHVFM1N5OElhcXpwNHNPbTlPYVE2bEpmRWp5dUJqOWFMNTBUUmJjdHRRbkFqbkk1TndGY01lZm5JakJFMXd5aXVyWm5SNUlVMGdyRzZTWW5TTmh3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyMzQ5MDIzNDQwOTgyOjVAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWjZHcGNDU0hMVlk3Mm1NSmE5QTg0SVJvRXZzWHZUZVFUTEplYlpKeFl4alwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg2MzA1OTEsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBUHlTXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHlTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGZaT25HZWVmanZoSndWTzFCRWJmMVE4bW1sU0JNTzNaWWdza1FpWU11bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTg3ODQ2MDIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg0MjczNjc2NzZcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
 
 
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
