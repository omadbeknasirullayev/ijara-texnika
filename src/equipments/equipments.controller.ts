import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateEquipmentDto } from './dto/create-equipments.dto';
import { EquipmentsService } from './equipments.service';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly equipmentservice: EquipmentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createEquipmentDto: CreateEquipmentDto,
    @UploadedFile() image,
  ) {
    return this.equipmentservice.create(createEquipmentDto, image);
  }
}
