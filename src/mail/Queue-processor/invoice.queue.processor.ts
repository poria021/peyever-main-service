import { Processor, WorkerHost } from "@nestjs/bullmq";
import { ReportService } from "../sendgrid/ReportService";

@Processor("invoice")
export class InvoiceProcessor extends WorkerHost {
  constructor(private sendGrid: ReportService) {
    super();
  }
  async process(job: any): Promise<void> {
    console.log("Processing job:", job.id);
    console.log("Job data:", job.data);

    // "Invoice generated successfully in Processor Now we can Call Mail server
    //We implemented a queue to handle tasks efficiently, such as sending emails.
    // This allows us to manage a high load, like sending emails to 10,000 people seamlessly.
    await this.sendGrid.sendReport(job.data.invoices.summary);
  }
}
