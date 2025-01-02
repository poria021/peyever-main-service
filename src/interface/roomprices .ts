export interface RoomPrices {
  id: number;

  room_id: number;

  date: Date;

  base_price_with_bed: number;

  increase_price_with_bed_adults: number;

  decrease_price_empty_base_bed: number;

  price_with_extra_child_bed: number;

  price_child_without_bed: number;

  price_baby_bed: number;

  currency: number;

  count_room: number;

  status: string;

  created_at: Date;

  updated_at: Date;
}
