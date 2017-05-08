import {Model} from 'sequelize-typescript';
import * as _ from 'lodash';

abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req, res) => {
    this.model.findAll({raw : true}).then(objs=>{
      res.json(objs);
    });
    
  };

  // Count all
  count = (req, res) => {
    this.model.count().then(c => {
      res.json(c);
    });
  };

  // Insert
  insert = (req, res) => {
    this.model.create(_.assign(req.body)).then(function(obj) {
      res.status(200).json(obj);
    })
  };

  // Get by id
  get = (req, res) => {
    this.model.findOne({where: { id: req.params.id }, raw : true}).then(obj =>{
      res.sendStatus(200).json(obj);
    });
  };

  // Update by id
  update = (req, res) => {
    delete req.body.id;
    delete req.body.updatedAt;
    this.model.update(req.body, {where: { id: req.params.id },returning: true, plain: true}).then(obj =>{
      res.sendStatus(200).json(obj);
    });
  };

  // Delete by id
  delete = (req, res) => {
    this.model.findOne({where: { id: req.params.id }}).then(obj =>{
      obj.destroy({ force: true });
      res.sendStatus(200);
    });
  }
}

export default BaseCtrl;
