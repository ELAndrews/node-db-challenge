exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("projectID");
      table
        .string("title", 128)
        .notNullable()
        .unique();
      table.text("projectDescription");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments("resourceID");
      table
        .string("resourceName", 140)
        .notNullable()
        .unique();
      table.text("resourceDescription");
    })
    .createTable("projectResources", table => {
      table.increments();
      table
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("projectID")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("resourceID")
        .unsigned()
        .notNullable()
        .references("resourceID")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("tasks", table => {
      table.increments("taskID");
      table
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("projectID")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("taskDescription").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("projectResources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
