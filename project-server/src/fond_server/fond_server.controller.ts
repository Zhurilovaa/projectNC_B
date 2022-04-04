import { Body, Controller, Get, Param, Put } from '@nestjs/common';
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
    getChildId(@Param('id') idCh){
        idCh = +idCh;
        for(let i=0; i<this.childList.length; i++){
            if(this.childList[i].id === idCh){
                return this.childList[i];
            }
        } 
        return 'Не найдено!';
    }

    @Put()
    donatPlus(@Body() updateChildInfoDTO: UpdateChildInfoDTO){
        let idCh: number = updateChildInfoDTO.idChild;
        //предположим, что проверка на существование такого id в базе происходит в сервисе на фронте
        for(let i=0; i<this.childList.length; i++){
            if(this.childList[i].id === idCh){
                this.childList[i].donatSym += updateChildInfoDTO.donateSym;
            }            
        }
        return this.childList;
    }
    
}
