import { EntityManager, Repository } from 'typeorm';
import HopEntity from '../entities/HopEntity';

class HopRepository {
  private repository: Repository<HopEntity>;

  constructor(private manager: EntityManager) {
    this.repository = this.manager.getRepository(HopEntity);
  }

  async save(customer: HopEntity): Promise<HopEntity> {
    return await this.repository.save(customer);
  }

  async findById(id: number): Promise<HopEntity | null> {
    return await this.repository.findOneById(id);
  }

  async findAll(): Promise<HopEntity[]> {
    return await this.repository.find();
  }
}

export default HopRepository;
