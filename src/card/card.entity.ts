import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  element: string;

  @Column()
  level: number;

  @Column()
  value_north: number;

  @Column()
  value_east: number;

  @Column()
  value_south: number;

  @Column()
  value_west: number;

  @Column()
  visual_name: string;
}