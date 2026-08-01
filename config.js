/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['212617503205'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Evil Imranos'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Evil Imranos Bot',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU246jOBT8F78mmoaEW0dqaYGQQIeQ+43VPhhwiBswYBsIGeXfV6Snp0cr7Wzvm2+qU6eqjr8DkmOGZqgFo++goLiGHHVL3hYIjIBRnc+Igj6IIIdgBOb665JMt5PNfkezpmq03LqG67WYnKOpkSm2Q0uPmk1pp9ILuPdBUQUpDn8DOBhPaF3ILvLak2XEk6OxcVIduzeKC6+GjSoVmuW4LrFXL+DeIUJMMYmt4oIyRGE6Q+0SYvo1+plhP50H7pE7CScePTsDZy5vpdtRPrSvQq8MNseV0kuU133yNfr6k0COg1ILlxtXp4cJacRNvA9uile4BZoVY5Gnb03p77faO32GY4IiJ0KEY95+WXfdvkHyhNOhlAS9k0FvZPW22AxOz81+l8vlLhhGEsJZeEmbrxGXJ2vF31ar3TWNCtPKfde5Cf4pCbK1NA2DonTQzVDW7HwIfyW+pB9ZSf6P7jt3sYYnFk9rW2+HPHQWZk6DafQaa5KSr5W5QJb7U+wKuy/Sb9VLKqlDWDR+zrzQe00CC85TT7SUJ1wJxlW6WBnVeroofdKHvKK/Y0mG/tN1u3UPg7F3SESyWZrLnXYks+LcmLrqxzb3VIe2eZqEUlwolRP4cCa3W0E2ikzQLxo7VqvlCt2i1XnZCOq1ORjNy6OjBLVOBEbivQ8oijHjFHKck8eZJvQBjOoNCiniD3nB6skf2J6UGm7eGqZr4vFcGfQmhNS53SyHQTCrX/eT3pxEzgvog4LmIWIMRTZmPKftHDEGY8TA6M+/+oCgK383ris3FPvgjCnjO1IVaQ6jD1c/LmEY5hXhm5aEZrdAFIyEz2PEOSYx63SsCKThBdfIvEDOwOgMU4Z+dogoisCI0wr9nFozjzrhp3vP95WBCfogexiCo+4rEAeKqMrCcCDII036g31rOlhYFN8I4qAP0sczURyq2kCVhkNVEcVh97K7uP9k2AFGiEOcMjAC5jyz5fA0thYHiz/Pp1PdinUz1sFnRx/ReJf+hpgzoAvWW8neYrzRn9nuYtglnGNbnT2beXtMpFk5Jub2If0/QbpcTS61n6W3jRpGrRxrVzQM0ZnZxyNVLhD3Zs9T8S3aebplTZlaHa9baXHzNrVoIThm0TFI6SyUbDfhLlucliXL3xJj9dJVi1CNQ/RrsSe7F/B4LKK2B2fXQx3hiZDGpd+8HfxZZY01zVvSfD7V7GpeNXX5XN/ycSxsjyYbt2v1+qar1Nxfdj5sD1IiKIu9PdB/hPYxNOmPzwo/4tR51W3PGD1mn8DOwf/27p14FzHh3v8F48dv8i8TaYRDanrljS6TxXYbC/EymDirtZK9OZdeW6/KeSovzDKWm6QF9/tffVCkkJ9zmoERgCSiOY5AH9C86jLrkHP+m2KmnjjGKna7zlPIuP45B1ucIcZhVoCRqGqyrGrCs3D/G67dgMI9BwAA',
    newsletterJid: '120363160757210405@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Evil Imranos Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Morrocco',
    
    // Limits
    maxWarnings: 4,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
