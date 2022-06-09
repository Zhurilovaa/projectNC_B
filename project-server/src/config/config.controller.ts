import { Controller } from '@nestjs/common';
import { Get, Param, Post, Body, Put } from '@nestjs/common';

import { News, newsFond } from './config-news.base';

import { Contacts, contactsContent } from './config-contact.base';

import { Admin } from './config-admin.base';

@Controller('config')
export class ConfigController {

    private loginAdmin: Admin = {
        login: 'admin',
        password: 'pass',
    };
 
    public contacts: Contacts[] = contactsContent;

    public newsAboutFond: News[] = newsFond;

    @Get(':idContent')
    getContent(@Param('idContent') id: string){
        switch(id){
            case 'contact':
                return this.contacts;
            case 'news':
                this.newsAboutFond = this.newsAboutFond.sort((a,b)=>{
                    return new Date(b.dateOfPublication).getTime() - new Date(a.dateOfPublication).getTime();
                });
                return this.newsAboutFond;
            default:
                return 'Error content';
        }
    }

    @Post()
    login( @Body() body: Admin){
        if((this.loginAdmin.login === body.login)&&(this.loginAdmin.password === body.password))
        {
            return true;
        }
        return false;
    }

    @Post(':idContent')
    addNews(@Param('idContent') id: string, @Body() body: News){
        switch(id){
            case 'news':
                this.newsAboutFond.push(body);
                this.newsAboutFond = this.newsAboutFond.sort((a,b)=>{
                    return new Date(b.dateOfPublication).getTime() - new Date(a.dateOfPublication).getTime();
                });
                return this.newsAboutFond;
            default:
                return 'Error content';
        }        
    }

    @Put(':id')
    edithContent(@Param('id') id:string, @Body() body: any){
        switch(id){
            case 'contact':
                //изменить формат сделать проход по свойствам структурой for in
                this.contacts[0] = body;
                return this.contacts;
            case 'news':
                this.newsAboutFond = body;
                this.newsAboutFond = this.newsAboutFond.sort((a,b)=>{
                    return new Date(b.dateOfPublication).getTime() - new Date(a.dateOfPublication).getTime();
                });
                return this.newsAboutFond;
            default:
                return 'Error edith content';
        }         
    }
}
