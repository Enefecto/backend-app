import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }

    @Get()
    getUser(){
        return 'Saluda al usuario: ';
    }

    @Post()
    postUser(){
        return 'Usuario nuevo creado';
    }

    @Patch()
    putUser(){
        return 'Usuario actualizado correctamente';
    }

    @Delete()
    deleteUser(){
        return 'Usuario eliminado correctamente';
    }
    

}