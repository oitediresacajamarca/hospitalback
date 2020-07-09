import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Console } from 'console';

@Controller('persona')
export class PersonaController {
    constructor(private personaser: PersonaService) {

    }
    @Get(':NRO_DOCUMENTO')
    async getOne(@Param() NRO_DOCUMENTO: string) {      
        const uno = await this.personaser.devolverOne(NRO_DOCUMENTO);
        return uno;
    }
    @Post('busqueda')
    async getPersona(@Body() body){
  
        const uno = await this.personaser.busquedaPersona(body.NOMBRES,body.APELLIDO_PAT,body.APELLIDO_MAT);
        return uno;
    }
    @Post('actualiza/:NRO_DOCUMENTO')
    async actualizaPersona(@Body() body,@Param() NRO_DOCUMENTO){  
        console.log(body)
        const uno = await this.personaser.actualizaDatosPersonales(NRO_DOCUMENTO.NRO_DOCUMENTO,body.NOMBRES,body.APELLIDO_PAT,body.APELLIDO_MAT,body.DIRECCION);
        return uno;
    }



}
