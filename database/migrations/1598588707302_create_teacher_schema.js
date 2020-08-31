'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments('student_id')
      table.string('frist_name', 120).notNullable()
      table.string('last_name', 120).notNullable()
      table.string('email').notNullable().unique() 
      table.string('password').notNullable()
      table.timestamps()

      
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = CreateTeacherSchema
