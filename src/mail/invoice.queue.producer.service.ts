import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bullmq";
import { Queue } from "bullmq";

@Injectable()
export class InvoiceServiceBull {
  constructor(@InjectQueue("invoice") private readonly invoiceQueue: Queue) {}

  async addInvoiceJob(data: any) {
    await this.invoiceQueue.add("generateInvoice", data, {
      delay: 5000, // 5 seconds delay
      attempts: 3, // Retry the job 3 times if it fails
    });
  }
}
