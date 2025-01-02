import { RoomPrices } from './roomprices ';

export interface Rooms {
  id: number;

  hotel_id: number;

  type_rooms: string;

  kind_of_bed: number;

  kind_of_service: number;

  infant: number;

  child_no_bed: number;

  child_with_bed: number;

  maximum_adult: number;

  maximum_baby_with_bed: number;

  maximum_baby_without_bed: number;

  maximum_infant: number;

  maximum_peoples: number;

  // @ManyToOne(() => Hotels, (hotel) => hotel.rooms)
  // @JoinColumn({ name: "hotel_id" })
  // hotel: Hotels;

  // @OneToMany(() => RoomPrices, (roomprice) => roomprice.rooms)
  roomprice: RoomPrices[];

  status: string;

  created_at: Date;

  updated_at: Date;
}
export interface HotelVoucher {
  picture: string;
  address: string;
  stars: number;
  name: string;
  rooms: Rooms[];
  number_of_night_of_stay: number;
  start_date: string;
  end_date: string;
  passengers: Array<Passengers[]>;
  count_rooms: number;
  kind_of_service: string;
}

export interface Passengers {
  gender: string;
  type: string;
  fname: string;
  lname: string;
}

export interface FlightVoucher {
  fullname: string;
  national_id: string;
  pasport_number: string;
  details: Partial<FlightPassengers>;
  flight_went_type: string;
}

export interface FlightPassengers {
  leaving: ReturnAndLeaving[];
  returning: ReturnAndLeaving[];
}

export interface ReturnAndLeaving {
  side: string;
  origin: string;
  destination: string;
  origin_iata: string;
  destination_iata: string;
  arrivalDate: string;
  departureDate: string;
  arrivalTime: string;
  departureTime: string;
  baggage: string;
  airline: string;
  flight_hours: string;
  flight_number: string;
}
