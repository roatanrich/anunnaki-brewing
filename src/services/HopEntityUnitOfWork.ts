import { EntityManager, getConnection } from 'typeorm';
import HopEntity from '../data/entities/HopEntity';
import HopRepository from '../data/repositories/HopRepository';

class HopEntityUnitOfWork {
  private entityManager: EntityManager;
  private hopRepository: HopRepository;

  constructor() {
    this.entityManager = getConnection().manager;
    this.hopRepository = new HopRepository(this.entityManager);
  }

  getHopRepository(): HopRepository {
    return this.hopRepository;
  }

  async saveChanges(): Promise<void> {
    await this.entityManager.transaction(async (entityManager) => {
      await entityManager.save(HopEntity);
    });
  }
}

export default HopEntityUnitOfWork;
