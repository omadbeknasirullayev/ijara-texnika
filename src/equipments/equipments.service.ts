import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BelongsTo } from 'sequelize-typescript';
import { FilesService } from 'src/files/files.service';
import { User } from 'src/users/users.model';
import { CreateEquipmentDto } from './dto/create-equipments.dto';
import { Equipment } from './equipments.model';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectModel(Equipment) private equipmentRepository: typeof Equipment,
    private readonly fileService: FilesService,
  ) {}

  //========================================================================================
  // Instrument yaratish
  //========================================================================================

  async create(createEquipmentDto: CreateEquipmentDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const newEquipment = await this.equipmentRepository.create({
      ...createEquipmentDto,
      image: fileName,
    });
    return newEquipment;
  }

  //========================================================================================
  // Instrument olish id bo'yicha
  //========================================================================================

  async getOne(id: number) {
    const equipment = await this.equipmentRepository.findByPk(id);
    if (!equipment) {
      throw new HttpException('Instrument topilmadi', HttpStatus.NOT_FOUND);
    }
    return equipment;
  }

  //========================================================================================
  // Instrument olish name bo'yicha
  //========================================================================================

  async getByName(name: string) {
    const equipments = await this.equipmentRepository.findAll({
      where: { name },
    });
    if (!equipments) {
      throw new HttpException(
        'Bunday nomdagi instrument topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return equipments;
  }

   //========================================================================================
  // Instrument olish id bo'yicha
  //========================================================================================

  async update(id: number) {
    // const updated = await th
  }


  
}
