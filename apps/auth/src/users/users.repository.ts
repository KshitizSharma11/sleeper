import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { UsersDocument } from './models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersRepository extends AbstractRepository<UsersDocument> {
  protected readonly logger = new Logger(UsersRepository.name);
  constructor(
    @InjectModel(UsersDocument.name)
    private readonly userModel: Model<UsersDocument>,
  ) {
    super(userModel);
  }
}
