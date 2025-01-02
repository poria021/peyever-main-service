import { Injectable } from "@nestjs/common";
import * as sgMail from "@sendgrid/mail";

@Injectable()
export class ReportService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendReport(report: string) {
    const msg = {
      to: "admin@example.com",
      from: "noreply@example.com",
      subject: "Daily Report",
      text: report,
      html: `<p>${report}</p>`,
    };

    try {
      await sgMail.send(msg);
      return { status: "success", message: "Email sent successfully" };
    } catch (error) {
      console.error("Error sending email:", error.code);
      return { status: "error", message: "Email sending failed" };
    }
  }
}
