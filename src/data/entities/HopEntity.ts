import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hops')
class HopEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  variety!: string;

  @Column()
  origin!: string;

  @Column()
  type!: string;

  @Column()
  alpha_acid_low!: number;

  @Column()
  alpha_acid_high!: number;

  @Column()
  beta_acid_low!: number;

  @Column()
  beta_acid_high!: number;

  @Column()
  oil_low!: number;

  @Column()
  oil_high!: number;

  @Column()
  co_humulone_low!: number;

  @Column()
  co_humulone_high!: number;

  @Column()
  myrcene_low!: number;

  @Column()
  myrcene_high!: number;

  @Column()
  caryophyllene_low!: number;

  @Column()
  caryophyllene_high!: number;

  @Column()
  humulene_low!: number;

  @Column()
  humulene_high!: number;

  @Column()
  farnesene!: string;

  @Column('text')
  description!: string;

  @Column('text')
  aroma!: string;

  @Column('text')
  beer_styles!: string;

  @Column('text')
  substitutions!: string;
}

export default HopEntity;
