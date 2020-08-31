'use strict'

const Database= use('Database')
const Hash = use('Hash')

function numberTypeParamValidator(number){
    if(Number.isNaN(parseInt(number)))
    return{ error:`param: ${number} is not supported, Plz us number type param instead.` }

    return{}
}
class StudentController {
    async index(){
    const students = await Database.table('students')

    return { status:200 , error: undefined, data: students }
}

async show ({ request }){
    const {id} = request.params

    const validatedValue = numberTypeParamValidator(id)

    if (validatedValue.error) return{ status:500 ,error: validatedValue.error, data: underfined }

    const student = await Database
    .select('*')
    .from('student')
    .where("student_id", id)
    .first() // เพื่อเอาตัวแรกออกมา,อ่านง่าย

    return { status: 200, error: undefined, data: student || {}}
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

     const student = await Database   //การ add ค่าเข้า db
    .table('students')                //การ add ค่าเข้า db 
    .insert({ first_name, last_name, email, password })  //การ add ค่าเข้า db

    return { status: 200, error: undefined, data: {first_name, last_name, email }}

    }
}
module.exports = StudentController
