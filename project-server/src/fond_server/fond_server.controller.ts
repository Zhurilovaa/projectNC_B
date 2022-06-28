import { Body, Controller, Get, Param, Patch, Put, Post, HttpException, HttpStatus} from '@nestjs/common';

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
        if ((childId>-1)&&(childId<this.childList.length) )
        {
            return [this.childList[childId]];
        }
        else{
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'There is no data registered under such an index',
              }, HttpStatus.FORBIDDEN);
        }
    }

    @Post()
    addChild(@Body() body: Child){
        this.childList.push(body);
        return this.childList;
    }

    @Put(':id')
    donatPlus(@Param('id') id:string, @Body() body: UpdateChildInfoDTO){
        let childToDonateIndex: number = -1;
        for(let i =0; i<this.childList.length; i++){
            if((+id) === this.childList[i].id){
                childToDonateIndex = i;
            }
        }
        if(childToDonateIndex !== -1){
            this.childList[childToDonateIndex].donatSum += body.donateSum;
            return this.childList; 
        }
        return "Not Found with this id = " + id;              
    }    
}
