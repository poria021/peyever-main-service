import { Module } from "@nestjs/common";
import { TourController } from "./mail.controller";
import { InvoiceService } from "./mail.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HttpModule } from "@nestjs/axios";
import { BullModule } from "@nestjs/bullmq";
import { InvoiceProcessor } from "./Queue-processor/invoice.queue.processor";
import { InvoiceServiceBull } from "./invoice.queue.producer.service";
import { ReportService } from "./sendgrid/ReportService";

require("dotenv").config();
@Module({
  imports: [
    HttpModule,
    BullModule.registerQueue({
      name: "invoice", // The name of the queue
    }),
  ],
  controllers: [TourController],
  providers: [
    InvoiceService,
    InvoiceProcessor,
    InvoiceServiceBull,
    ReportService,
  ],
})
export class TourModule {}
