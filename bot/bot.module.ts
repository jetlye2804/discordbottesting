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
                token: 'OTExOTE1NDkyODc5NTIzODQy.YZoVfA.bF3I55ZkqRw4nhXQUu6H2CeJW8c',
                commands: ['**/*.command.js'],
                discordClientOptions: {
                    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
                },
                removeGlobalCommands: true,
                registerCommandOptions: [
                    {
                        forGuild: '911603487610109973',
                        allowFactory: (message: Message) => !message.author.bot,
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