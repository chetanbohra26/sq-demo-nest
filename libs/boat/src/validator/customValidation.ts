import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { BaseValidator, CustomValidationOptions } from '.';

@Injectable()
export class CustomValidationPipe implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const schema = this.reflector.get('dtoSchema', context.getHandler());
    const options = {
      ...this.reflector.get<CustomValidationOptions>(
        'dtoOptions',
        context.getHandler(),
      ),
    };

    if (options.schemaGroup) {
      options['groups'] = [req.all()[options.schemaGroup]];
      delete options.schemaGroup;
    }

    const validator = new BaseValidator();
    req._dto = await validator.fire(req.all(), schema);

    return true;
  }
}
