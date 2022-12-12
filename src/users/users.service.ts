import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRapository: typeof User) {}

  //========================================================================================
  // Create User
  //========================================================================================

  async create(createUserDto: CreateUsersDto) {
    const newUser = await this.userRapository.create(createUserDto);
    return newUser;
  }

  //========================================================================================
  // GetAll Users
  //========================================================================================

  async getAll() {
    const users = await this.userRapository.findAll();
    return users;
  }

  //========================================================================================
  // GetById User
  //========================================================================================

  async getOne(id: number) {
    const user = await this.userRapository.findByPk(id, {include: {all: true}});
    if (!user) {
      throw new HttpException('Not found user', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  //========================================================================================
  // Updated User
  //========================================================================================

  async updateUser(id: number, updateUserDto: UpdateUsersDto) {
    const user = await this.userRapository.findByPk(id);
    if (!user) {
      throw new HttpException('Not found user', HttpStatus.NOT_FOUND);
    }
    const updatedUser = await this.userRapository.update(updateUserDto, {
      where: { id },
    });
    console.log(updatedUser);
    return { message: 'Successfully updated' };
  }

  //========================================================================================
  // Updated User
  //========================================================================================

  async getUserByEmail(email: string) {
   const user = await this.userRapository.findOne({
     where: { email },
     include: { all: true },
   });
   return user;
 }

  //========================================================================================
  // Updated User
  //========================================================================================

  async delete(id: number) {
    const deletedUser = await this.userRapository.destroy({ where: { id } });
    return { message: 'Successfully deleted' };
  }
}
