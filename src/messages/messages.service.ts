import { th } from "@faker-js/faker";
import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService{
    constructor(public messageRepo: MessageRepository){
    }

    findAll(){
        return this.messageRepo.findAll()
    }
    findOne(id: string){
        return this.messageRepo.findOne(id)
    }
    create(content: string){
        return this.messageRepo.create(content)
    }
    remove(id: string){
        return this.messageRepo.remove(id)
    }
    editSpecificContent(id: string, content: string){
        return this.messageRepo.editSpecificContent(id, content)

    }

}