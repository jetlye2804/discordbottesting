import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Intents, Message } from 'discord.js';
import { BotGateway } from './bot.gateway';

@Module({
    imports: [
        DiscordModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                token: '',
                commands: ['play.command.js', 'playlist.command.js'],
                discordClientOptions: {
                    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
                },
                removeGlobalCommands: true,
                registerCommandOptions: [
                    {
                        forGuild: '911603487610109973',
                        allowFactory: (message: Message) =>
                            !message.author.bot && message.content === '!deploy',
                        removeCommandsBefore: true,
                    },
                ],
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [BotGateway],
})
export class BotModule { }
