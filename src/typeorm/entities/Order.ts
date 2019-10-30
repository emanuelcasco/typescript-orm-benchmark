import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Item } from './Item';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  date: number;

  @ManyToMany(() => Item, { cascade: true })
  @JoinTable({
    name: 'orders_items',
    joinColumn: { name: 'order_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'item_id', referencedColumnName: 'id' },
  })
  items: Item[];
}
