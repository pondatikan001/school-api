'use strict'

const Database = use('Database')
const Hash = use('Hash')
function numberTypeParamValidator(number){
    if(Number.isNaN(parseInt(number)))
    return{ error:`param: ${number} is not supported, Plz us number type param instead.` }

    return{}
}

class EnrollmentController {
    async index(){
        const enrollments = await Database.table('enrollments')
    
        return { status:200 , error: undefined, data: enrollments }
    }
    
    async show ({ request }){
        const {id} = request.params
    
        const validatedValue = numberTypeParamValidator(id)
    
        if (validatedValue.error) return{ status:500 ,error: validatedValue.error, data: underfined }
    
        const enrollment = await Database
        .select('*')
        .from('enrollment')
        .where("enrollment_id", id)
        .first() // เพื่อเอาตัวแรกออกมา,อ่านง่าย
    
        return { status: 200, error: undefined, data: enrollment || {}}
    }
    
    async store({ request }){
        const {enrollment_id,mark,mark_date,update_at} = request.body
        const missingKeys=[]
        if (!first_name) missingKeys.push('first_name')
        if (!last_name) missingKeys.push('last_name')
        if (!email) missingKeys.push('email')
        if (!password) missingKeys.push('password')

        if(!enrollment_id) missingKeys.push('enrollment_id')
        if(!mark) missingKeys.push('enrollment_id')
        if(mark_date) missingKeys.push('enrollment_id')
        if(update_at) missingKeys.push('enrollment_id')
    
        if (missingKey.length)
            return { status: 422, error: `${missingKeys} is missing.`, data: undefined }
    
    
        const hashedPassword = await Hash.make(password)
    
         const enrollment = await Database   //การ add ค่าเข้า db
        .table('enrollments')                //การ add ค่าเข้า db 
        .insert({ mark, mark_id, student_id, subject_id })
        
        return { status: 200 , error: undefined, data: { mark, mark_id, student_id, subject_id } }
        
        }
    }


module.exports = EnrollmentController
