import { readFile, writeFile } from "fs/promises"; //read and write to the database.
import { Delete, Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository{

    async findOne(id: string){
        let content = await readFile("message.json","utf-8");
        let message = JSON.parse(content)
        return(message[id])
    }

    async findAll(){
        let content = await readFile("message.json","utf-8");
        let messages = JSON.parse(content)
        return messages

    }

    async create(content: string){
        let contents = await readFile("message.json","utf-8");
        let messages = JSON.parse(contents)
        let id = Math.floor(Math.random() * 99) + 1;
        messages[id]= {id, content}
        await (writeFile("message.json",JSON.stringify(messages)))
        .then(()=> {
            console.log ("Inserted message successfully.")
        }).catch(()=>{
            console.log ("Error while inserting message.")
        }
        )
    
    }
    async remove(id: string){
        let contents = await readFile("message.json","utf-8");
        let messages = JSON.parse(contents)
        delete (messages[id])  
        await (writeFile("message.json",JSON.stringify(messages)))
        .then(()=> {
            console.log (" message removed successfully.")
        }).catch(()=>{
            console.log ("Error while inserting message.")
        })
        

    }
    

}