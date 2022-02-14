import { Param } from '@discord-nestjs/core';
import { Transform } from 'class-transformer';

export class PlayDto {
  @Transform(({ value }) => value.toUpperCase())
  @Param({
    name: 'song',
    description:
      'https://www.youtube.com/watch?v=7U16wQMYM5s',
    required: true,
  })
  song: string;
}