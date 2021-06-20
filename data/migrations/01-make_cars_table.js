exports.up = function(knex){
    return knex.schema.createTable("cars", table =>{
        table.increments()
        table.string("VIN",128).unique().notNullable();
        table.string("Make").notNullable();
        table.string("Model").notNullable();
        table.integer("Mileage").notNullable();
        table.string("Title");
        table.string("Transmission");

    })
};

exports.down = function(knex){
    return knex.schema.dropTableIfExists("cars")

};