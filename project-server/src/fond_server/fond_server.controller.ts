import { Body, Controller, Get, Param, Patch, Put, Post} from '@nestjs/common';

import { UpdateChildInfoDTO } from 'src/basechild/dto/update-childinfo.dto';

import { childlist } from './childbase';

import { Child } from './childInfo';

@Controller('fond-server')
export class FondServerController {
    public childList: Child[] = childlist;

    @Get()
    getAllChild(){
        return this.childList;
    }

    @Get(':id')
    getChildId(@Param('id') id: string): Child[]{
        let childId = this.childList.findIndex((value)=>value.id=== +id);
        return [this.childList[childId]];
        //return 'getChild ' + id;
    }

    //доп.метод - добавление нового ребёнка в "базу данных"
    @Post()
    addChild(@Body() body: Child){
        this.childList.push(body);
        return this.childList;
    }

    @Put(':id')
    donatPlus(@Param('id') id:string, @Body() body: UpdateChildInfoDTO){
        //находим ребенка в массиве по индексу
        let childToDonateIndex: number = -1;
        for(let i =0; i<this.childList.length; i++){
            if((+id) === this.childList[i].id){
                childToDonateIndex = i;
            }
        }
        //изменяем
        if(childToDonateIndex !== -1){
            this.childList[childToDonateIndex].donatSum += body.donateSum;
            return this.childList; 
        }
        return "Not Found with this id = " + id;              
    }    
}
