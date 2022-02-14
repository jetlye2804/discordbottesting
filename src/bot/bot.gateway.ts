import { Client, CommandInteraction, Message } from "discord.js";
import { Injectable, Logger } from "@nestjs/common";
import { On, Once, UsePipes, UseGuards, DiscordClientProvider } from '@discord-nestjs/core';
import { MessageFromUserGuard } from "./guards/message-from-user.guard";

@Injectable()
export class BotGateway {
    private readonly logger = new Logger(BotGateway.name);

    constructor(private readonly discordProvider: DiscordClientProvider){}

    @Once('ready')
    onReady() {
        let theBot = this.discordProvider.getClient().user.tag;
        this.logger.log(`Bot '${theBot}' was started!`);
    }

    // @On('messageCreate')
    // @UseGuards(MessageFromUserGuard)
    // async onMessage(message: Message): Promise<void> {
    //     const rudeWords = ["nigga", "fuck", "shit", "pussy", "bitch"];
    //     this.logger.log(`Incoming message: ${message.content}`);

    //     if(rudeWords.some(rudeWord => message.content.toLocaleLowerCase().includes(rudeWord))){
    //         await message.reply('You should not use rude words');
    //     } else {
    //         await message.reply('Message processed successfully');
    //     }
        
    // }
}