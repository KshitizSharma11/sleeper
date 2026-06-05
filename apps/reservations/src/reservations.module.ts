import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { DatabaseModule } from '@app/common';
import { ReservationsModule as Rmodule } from '../src/reservations/reservations.module';
@Module({
  imports: [DatabaseModule, Rmodule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
