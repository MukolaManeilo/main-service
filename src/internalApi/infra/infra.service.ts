import { Injectable } from '@nestjs/common';

@Injectable()
export class InfraService {
  create() {
    return 'This action adds a new infra';
  }

  findAll() {
    return `This action returns all infra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infra`;
  }

  update(id: number) {
    return `This action updates a #${id} infra`;
  }

  remove(id: number) {
    return `This action removes a #${id} infra`;
  }
}
