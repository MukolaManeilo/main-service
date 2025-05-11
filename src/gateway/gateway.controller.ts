import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @MessagePattern('createGateway')
  create(@Payload() createGatewayDto: any) {
    return this.gatewayService.create(createGatewayDto);
  }

  @MessagePattern('findAllGateway')
  findAll() {
    return this.gatewayService.findAll();
  }

  @MessagePattern('findOneGateway')
  findOne(@Payload() id: number) {
    return this.gatewayService.findOne(id);
  }

  @MessagePattern('updateGateway')
  update(@Payload() updateGatewayDto: any) {
    return this.gatewayService.update(updateGatewayDto.id, updateGatewayDto);
  }

  @MessagePattern('removeGateway')
  remove(@Payload() id: number) {
    return this.gatewayService.remove(id);
  }
}
