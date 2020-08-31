'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateStudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('student_id')
      table.string('frist_name', 120).notNullable()
      table.string('last_name', 120).notNullable()
      table.string('email').notNullable().unique() // default length ---> 255
      table.string('password').notNullable()
      table.integer('group_id').unsigned() // convert group_id to unsigned integer
      table.timestamps() // auto create 2 colum ---> created_at,updated_at

      table
        .foreign('group_id')
        .references('groups.group_id')
        .onDelete('CASCADE') // ถ้าตัวต้นหายจะมาแก้ตัวหลังให้เลย
        .onUpdate('CASCADE') // ON UPDATE CASCADE แก้ข้างหลังเฉยๆ
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = CreateStudentSchema
