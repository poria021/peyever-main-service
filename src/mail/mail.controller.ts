import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InvoiceService } from "./mail.service";
import { log } from "console";

import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";

import {
  ClientProxy,
  EventPattern,
  MessagePattern,
} from "@nestjs/microservices";
import { InvoiceServiceBull } from "./invoice.queue.producer.service";

@Controller("tour")
export class TourController {
  constructor(
    private config: ConfigService,
    private readonly tourservice: InvoiceService,
    private readonly bullQue: InvoiceServiceBull
  ) {}

  @MessagePattern({ cmd: "email" })
  async asyncgetHotel(invoiceRecords: any) {
    // We can use a queue in RabbitMQ, but if we need to add some features to an object, we must retrieve
    // it from RabbitMQ, modify it, and then re-add it to the queue (Bull).
    //I added a queue to efficiently handle a high volume of emails using this service.
    await this.bullQue.addInvoiceJob(invoiceRecords);

    return { status: "ok" };
  }
}
