const Province = require('../models/Province');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class ProvinceRepository {
    async getAllItem(){
        var pro = await Province.findAll({
        attributes: ['id', 'name']
        });
        var result = JSON.stringify(pro, null, 2);
        return result;
    }

    async addItem(name){
        // Create a new user
        const jane = await Province.create({ name: name });
        // console.log("Jane's auto-generated ID:", jane.id);
    }

    async rawQuery(){
        const province = await sequelize.query("SELECT * FROM `province`", { type: QueryTypes.SELECT });
        return province;
    }
}

module.exports = ProvinceRepository;