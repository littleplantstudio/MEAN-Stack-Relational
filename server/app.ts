import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import setRoutes from './routes';
import {Sequelize} from 'sequelize-typescript';


const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

dotenv.load({ path: '.env' });

const sequelize =  new Sequelize({
        name: process.env.DB_NAME,
        dialect: 'mysql',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        storage: ':memory:',
        modelPaths: [__dirname + '/models']
});

sequelize
  .sync({force: true})
  .then(() => {
      setRoutes(app);

      app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      });

      app.listen(app.get('port'), () => {
        console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
      });
    }
  );

export { app };
