'use strict'

const Database= use('Database')
const Hash = use('Hash')

function numberTypeParamValidator(number){
    if(Number.isNaN(parseInt(number)))
    return{ error:`param: ${number} is not supported, Plz us number type param instead.` }

    return{}
}

class SubjectController {
    async index(){
        const subjects = await Database.table('subjects')
    
        return { status:200 , error: undefined, data: subjects }
    }
    
    async show ({ request }){
        const {id} = request.params
    
        const validatedValue = numberTypeParamValidator(id)
    
        if (validatedValue.error) return{ status:500 ,error: validatedValue.error, data: underfined }
    
        const subject = await Database
        .select('*')
        .from('subject')
        .where("subject_id", id)
        .first() // เพื่อเอาตัวแรกออกมา,อ่านง่าย
    
        return { status: 200, error: undefined, data: subject || {}}
    }
    
    async store ({request}){
        const {title,teacher_id} = request.body
        const missingKeys=[]
        if(!title) missingKeys.push('title')
        if(!teacher_id) missingKeys.push('title')
       
        if (missingKey.length)
            return { status: 422, error: `${missingKeys} is missing.`, data: undefined }
    
    
        const hashedPassword = await Hash.make(password)
    
         const subject = await Database   //การ add ค่าเข้า db
        .table('subjects')                //การ add ค่าเข้า db 
        .insert({ subject_id, teacher_id, title })  //การ add ค่าเข้า db
    
        return { status: 200, error: undefined, data: { subject_id,teacher_id,title} }
    
        }
    }


module.exports = SubjectController
