import config from 'config'
import { GatewayIntentBits, Partials } from 'discord.js'
import Client from 'structures/Client'

const client = new Client(config, {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
})

// Initialize bot
;(async (): Promise<void> => await client.init())()
