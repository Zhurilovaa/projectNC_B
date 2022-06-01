import { Controller } from '@nestjs/common';
import { Get, Param, Post, Body, Put } from '@nestjs/common';

import { News, newsFond } from './config-news.base';

import { contactsContent } from './config-contact.base';

import { Admin } from './config-admin.base';

@Controller('config')
export class ConfigController {

    private loginAdmin: Admin = {
        login: 'admin',
        password: 'pass',
    };
 
    public contacts = contactsContent;

    public newsAboutFond: News[] = newsFond;

    @Get(':idContent')
    getContent(@Param('idContent') id: string, @Body() body?: Admin){
        switch(id){
            case 'login':
                if((this.loginAdmin.login === body.login)&&(this.loginAdmin.password === body.password))
                {
                    return true;
                }
                return false;
            case 'contact':
                return this.contacts;
            case 'news':
                return this.newsAboutFond;
            default:
                return 'Error content';
        }
    }

    @Post()
    addNews(@Body() body: News){
        this.newsAboutFond.push(body);
        return this.newsAboutFond;
    }

    @Put(':id')
    edithContent(@Param('id') id:string, @Body() body: any){
        switch(id){
            case 'contact':
                this.contacts = body;
                return this.contacts;
            case 'news':
                this.newsAboutFond = body;
                return this.newsAboutFond;
            default:
                return 'Error edith content';
        }         
    }


}
