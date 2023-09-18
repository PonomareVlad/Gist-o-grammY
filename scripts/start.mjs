import {bot} from "../src/bot.mjs";

bot.catch(console.error);

// Starts bot in long-polling mode
await bot.start();
