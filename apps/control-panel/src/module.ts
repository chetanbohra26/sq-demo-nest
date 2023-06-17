import { Module } from '@nestjs/common';
import { ControlPanelController } from './control-panel.controller';
import { ControlPanelService } from './service';
import { BoatModule } from '@libs/boat';
import { ConsoleModule } from '@squareboat/nest-console';

@Module({
  imports: [BoatModule, ConsoleModule.register()],
  controllers: [ControlPanelController],
  providers: [ControlPanelService],
})
export class ControlPanelModule {}
