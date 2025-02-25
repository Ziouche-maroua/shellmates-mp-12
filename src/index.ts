import { Client, GatewayIntentBits } from 'discord.js';
import Bot from './lib/bot';
import { closeDatabaseConnection } from './lib/db';
import { ReminderHandler } from './lib/reminder-handler';

export const bot = new Bot(
    new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]
    })
)

export const reminderHandler = new ReminderHandler();

process.on('SIGINT', async () => {
    await closeDatabaseConnection();
    process.exit(0);
});