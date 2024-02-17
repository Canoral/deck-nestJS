import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
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
