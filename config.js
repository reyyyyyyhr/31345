const port = process.env.port || 3000;
const ip = require("ip"); // Only gets your IP, does nothing else

const config = {
    "botName": "sonomod",
    "owners": ["724902025661513769"],
    "devs": ["724902025661513769"],
    "mods": ["649875297218461696","825488821135081522"],
    "support": [],
    "helpers": [],

    "blacklisted": [""],
    "globalBan": [""],
    "token": "process.env.NzM1NTI0NzY0NjQ2Mzc1NDY2.Xxhg0Q.m12n4-Cd1hOdY6wQc3X1yNpl92g",
    // LINKS:
    "github": "https://github.com/derekdinan/Tsuyo",
    "supportServer": "https://discord.gg/3hbeQgY",
    "botInvite": "https://discordapp.com/oauth2/authorize?client_id=492871769485475840&scope=bot&permissions=1506142455",

    // Dashboard settings
    "dashboardEnabled": false, // Off by default
    "port": port,
    "clientId": process.env.735524764646375466,
    "clientSecret": process.env.-TwaGVul-gyVHZiu9wWtg8p_KCIijQXH,
    "scopes": ["identify", "guilds"],
    "redirectUri": "http://" + ip.address() + ":" + port + "/authorize/callback",

    "defaultSettings": {
        "prefix": ",",
        "language": "en-UK",
        "modLogChannel": "logs",
        "modRole": "✦. ࿔ mods ♡",
        "adminRole": "-; ♡.° admins ✧",
        "muteRole": "Muted",
        "noPermissionNotice": "true",
        "pointsEnabled": "false",
        "deniedChannel": "denied-suggestions",
        "acceptedChannel": "accepted-suggestions",
        "welcomeChannel": "general",
        "welcomeMessage": "Welcome to the server, {{mention}}!",
        "welcomeEnabled": "false",
        "logMessageUpdates": "false",
        "logEmojiUpdates": "false",
        "logMemberUpdates": "false",
        "logModerated": "false",
        "starboardChannel": "starboard",
        "censorSwears": "false",
        "censorLinks": "false",
        "censorSpam": "false",
        "maxWarnsBeforeBan": 3
    },

    permLevels: [{
            level: 0,
            name: "Blacklisted",

            check: () => true
        },

        {
            level: 1,
            name: "User",

            check: (message) => !config.blacklisted.includes(message.author.id) || !config.globalBan.includes(message.author.id)
        },

        {
            level: 2,
            name: "- ̗̀꒰ owners ꒱ ❞",

            check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
        },

        {
            level: 3,
            name: "Bot Helper",

            check: (message) => config.helpers.includes(message.author.id)
        },

        {
            level: 4,
            name: "Bot Support",

            check: (message) => config.support.includes(message.author.id)
        },

        {
            level: 5,
            name: "Bot Moderator",

            check: (message) => config.mods.includes(message.author.id)
        },

        {
            level: 6,
            name: "Bot Developer",

            check: (message) => config.devs.includes(message.author.id)
        },

        {
            level: 7,
            name: "Bot Owner",

            check: (message) => config.owners.includes(message.author.id)
        }
    ]
};

module.exports = config;
