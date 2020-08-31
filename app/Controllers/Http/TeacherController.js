'use strict'

const Database= use('Database')
const Hash = use('Hash')

function numberTypeParamValidator(number){
    if(Number.isNaN(parseInt(number)))
    return{ error:`param: ${number} is not supported, Plz us number type param instead.` }

    return{}
}

class TeacherController {
    async index(){
        const teachers = await Database.table('teachers')

        return { status:200 , error: undefined, data: teachers }
    }

    async show ({ request }){
        const {id} = request.params

        const validatedValue = numberTypeParamValidator(id)

        if (validatedValue.error) return{ status:500 ,error: validatedValue.error, data: underfined }

        const teacher = await Database
        .select('*')
        .from('teachers')
        .where("teacher_id", id)
        .first() // เพื่อเอาตัวแรกออกมา,อ่านง่าย

        return { status: 200, error: undefined, data: teacher || {}}

        //return teacher || {}
    }

    async store({ request }){
        const { first_name, last_name, email, password } = request.body

        if(!first_name) missingKey.push('first_name')
        if(!last_name)  missingKey.push('last_name')
        if(!email) missingKey.push('email')
        if(!password)  missingKey.push('password')

        if (missingKey.length)
            return { status: 422, error: `${missingKeys} is missing.`, data: undefined }


        const hashedPassword = await Hash.make(password)

         const teacher = await Database   //การ add ค่าเข้า db
        .table('teachers')                //การ add ค่าเข้า db 
        .insert({ first_name, last_name, email, password })  //การ add ค่าเข้า db

        return { status: 200, error: undefined, data: {first_name, last_name, email }}
    }
}

module.exports = TeacherController

