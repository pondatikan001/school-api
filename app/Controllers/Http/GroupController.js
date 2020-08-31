'use strict'

const Database= use('Database')
const Hash = use('Hash')

function numberTypeParamValidator(number){
    if(Number.isNaN(parseInt(number)))
    return{ error:`param: ${number} is not supported, Plz us number type param instead.` }

    return{}
}


class GroupController {
    async index(){
        const groups = await Database.table('groups')
    
        return { status:200 , error: undefined, data: groups }
    }
    
    async show ({ request }){
        const {id} = request.params
    
        const validatedValue = numberTypeParamValidator(id)
    
        if (validatedValue.error) return{ status:500 ,error: validatedValue.error, data: underfined }
    
        const group = await Database
        .select('*')
        .from('group')
        .where("group_id", id)
        .first() // เพื่อเอาตัวแรกออกมา,อ่านง่าย
    
        return { status: 200, error: undefined, data: group || {}}
    }
    
    async store({ request }){
        const {group_id,name} = request.body
        const missingKeys=[]
        
        if(!group_id) missingKeys.push('name')
        if(!name) missingKeys.push('name')
    
        if (missingKey.length)
            return { status: 422, error: `${missingKeys} is missing.`, data: undefined }
    
    
        const hashedPassword = await Hash.make(password)
    
         const group = await Database   //การ add ค่าเข้า db
        .table('group')                //การ add ค่าเข้า db 
        .insert({group_id,name})      //การ add ค่าเข้า db
    
        return {status : 200,error : undefined , data : {group_id,name} }
    
        }
    }


module.exports = GroupController
