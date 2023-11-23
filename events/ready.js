const config = require("../config.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

module.exports = async (client) => {
    var name = client.user.tag;
    console.log(`[HAZIR]: ${name} adıyla açıldım!`);
    client.user.setPresence({
        activities: [
            {
                name: `En İyi Bot`,
                type: "COMPETING"
            }
        ],
        status: "idle"
    });


    const rest = new REST({ version: "10" }).setToken(config.token);
    (async () => {
    try {
    await rest.put(Routes.applicationCommands(client.user.id), {
    body: await client.commands,
    });
    console.log("Successfully loadded application [/] commands.");
    } catch(e) {
    console.log("Failed to load application [/] commands. " + e);
    }
    })();
    
    }
    
