import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { log } from "console";
import { catchError, map, of, timeout } from "rxjs";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from "nestjs-typeorm-paginate";
import {
  Passengers,
  Rooms,
  HotelVoucher,
  FlightVoucher,
} from "../interface/rooms";
import { FlightMarkups } from "src/interface/flights";
import { CalculateRoomPrices, Currency, Details } from "src/interface/details";
import { ConfigService } from "@nestjs/config";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import { InjectQueue } from "@nestjs/bullmq";

@Injectable()
export class InvoiceService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheService: Cache,
    private config: ConfigService
  ) {}
  private logger = new Logger(InvoiceService.name);
}
