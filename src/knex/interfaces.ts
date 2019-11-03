export type ItemRaw = { name: string; price: number };
export type Item = { id: number } & ItemRaw;

export type OrderRaw = { user: string };
export type Order = { id: number; user: string; date: number };

export type OrderPayload = OrderRaw & { items: ItemRaw[] };
export type OrderResponse = Order & { items: Item[] };

