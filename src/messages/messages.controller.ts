import { Controller, Get, Post,Delete, Patch, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/createmessage.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController { 
    constructor(public messageService: MessageService){
    }
    
    @Get()
    listMessages(){
        return this.messageService.findAll()

    }

    @Post()
    createMessage(@Body() body: createMessageDto){
        this.messageService.create(body.content)
        
    }

    @Get("/:id")
    async getMessage(@Param("id") id: string){
        let message =  await this.messageService.findOne(id)
        if (!message){
            throw new NotFoundException("Message not found")
        }
        return message
        
    }

    @Delete("/:id")
    async deleteMessage(@Param("id") id: string){
        let message =  await this.messageService.findOne(id)
        if (!message){
            throw new NotFoundException("Message not found")
        }
        else{
            return this.messageService.remove(id)
        }   
    }

    @Patch ("/:id")
    async editSpecificContent(@Param("id") id: string, @Body() body: createMessageDto){
        let message =  await this.messageService.findOne(id)
        if (!message){
            throw new NotFoundException("Message not found")
        }
        else{
            return this.messageService.editSpecificContent(id,body.content)
        }   
    }
    

}