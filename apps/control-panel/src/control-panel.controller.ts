import { Controller, Get } from '@nestjs/common';
import { ControlPanelService } from './service';

@Controller()
export class ControlPanelController {
  constructor(private readonly controlPanelService: ControlPanelService) {}

  @Get()
  getHello(): string {
    return this.controlPanelService.getHello();
  }
}
