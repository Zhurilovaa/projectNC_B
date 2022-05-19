import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateChildInfoDTO } from './dto/create-childinfo.dto';
import { UpdateChildInfoDTO } from './dto/update-childinfo.dto';

@Controller('basechild')
export class BasechildController {

    //первый пример
    //попробуем какой-нибудь метод, например getAll
    //@Get() - говорит что это методо отвечает на http запрос getS
    @Get()
    getAll(){
        return 'getAll work!';
    }

    //как получать что-то одно, а не всё, нужен динамический параметр
    //такой способ работает, но он не самый "чистый"
    /*@Get(':id')
    getOneofAll(@Param() params ){
        return ('getOneofAll '+ params.id);
    }*/
    //контроллер не видит между ними разницы и поэтому вызывает первый!!!

    //есть способ, который рекомендует сам nest
    //нам нужен не весь объект, а только его совйство
    @Get(':id')
    getOne(@Param('id') id: string): string{
        return ('getOne '+ id);
    }

    //попробуем что-то создать
    //в данном случае в качестве параметра нужно получить "тело запроса"
    //правильным решением будет создать DTO =data transfer object (не содержит никакого поведения)
    @Post()
    create(@Body() createChildInfoDTO: CreateChildInfoDTO){
        return `nameChild: ${createChildInfoDTO.nameChild}, Sym:  ${createChildInfoDTO.monSym}`;
    }

    //удаление
    @Delete(':id')
    remove(@Param('id') id: string){
        return 'remove '+id; 
    }

    //ОБНОВЛЕНИЕ КАКОГО-ТО ЭЛЕМЕНТА!
    @Put(':id')
    updateEl(@Body() updateChildInfoDTO: UpdateChildInfoDTO, @Param('id') id: string){
        return `nameChild: ${id}, Sym:  ${updateChildInfoDTO.donateSum}`;
    }
}
