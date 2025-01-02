import { Module, ValidationPipe, MiddlewareConsumer } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TourModule } from "./mail/mail.module";
const redisStore = require("cache-manager-redis-store");
import type { RedisClientOptions } from "redis";
import { CacheModule } from "@nestjs/cache-manager";
import typeorm from "./config/typeorm";
import { BullModule } from "@nestjs/bullmq";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [typeorm],
    }),

    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      inject: [ConfigService],
      isGlobal: true,
      useFactory: (config: ConfigService) => ({
        store: redisStore,
        // url: process.env.REDIS_URL,
        host: config.get("REDIS_HOST"),
        port: config.get("REDIS_PORT"),
        password: config.get("REDIS_PASSWORD"),
        // tls: config.get('REDIS_TLS'),
      }),
    }),

    BullModule.forRoot({
      connection: {
        host: "127.0.0.1", // Replace with your Redis host
        port: 6379, // Replace with your Redis port
      },
    }),

    TourModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
