interface EnumChild {
  age: number;
}

interface EnumChilds extends Array<EnumChild> {}

export interface Details {
  room: number;
  adult: number;
  room_id: number;
  children: EnumChild[];
}

export interface CalculateRoomPrices {
  room_id: number;
  price: number;
}

export interface Currency {
  dollar: string;
  lira: string;
  euro: string;
  dirham: string;
  pond: string;
}
