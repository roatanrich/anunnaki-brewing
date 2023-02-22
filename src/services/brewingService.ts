import { Connection, createConnection } from 'typeorm';
import HopEntity from '../data/entities/HopEntity';
import HopEntityUnitOfWork from './HopEntityUnitOfWork';

// Connect to the database and start the app
createConnection({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'rhenry',
  password: 'Atilla455',
  database: 'brewing',
  entities: [HopEntity],
  synchronize: true,
}).then(async (connection: Connection) => {
  //const entity = new HopEntity();
  //entity.variety = 'John';
  //entity.origin = 'Doe';

  const hopUnitOfWork = new HopEntityUnitOfWork();
  //await hopUnitOfWork.getHopRepository().save(entity);

  //const existingHop = await hopUnitOfWork.getHopRepository().findById(1);
  //log.debug(existingHop);

  const allHops = await hopUnitOfWork.getHopRepository().findAll();
  //log.debug(allHops);

  //await hopUnitOfWork.saveChanges();
  await connection.close();

  return allHops;
});

export default createConnection;
