export interface TokenResponse {
  MID: number;
  TerminalId: number;
  RefNum: string;
  ResNum: string;
  State: string;
  TraceNo: number;
  Amount: number;
  AffectiveAmount: number;
  Wage: any;
  Rrn: string;
  SecurePan: string;
  Status: number;
  Token: string;
  HashedCardNumber: string;
}
export interface VerifyTransaction {
  TransactionDetail: {
    RRN: number;
    RefNum: string;
    MaskedPan: string;
    HashedPan: string;
    TerminalNumber: number;
    OrginalAmount: number;
    AffectiveAmount: number;
    StraceDate: string;
    StraceNo: number;
  };
  PurchaseInfo: string;
  ResultCode: number;
  ResultDescription: string;
  Success: boolean;
}
