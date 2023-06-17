import { ValidationOptions } from 'class-validator';
import { BaseValidator } from './basevalidator';
import {
  ExecutionContext,
  SetMetadata,
  UseGuards,
  applyDecorators,
  createParamDecorator,
} from '@nestjs/common';
import { CustomValidationPipe } from './customValidation';

export * from 'class-validator';
export * from './decorators';

export { BaseValidator };

export interface CustomValidationOptions extends ValidationOptions {
  whitelist?: boolean;
  schemaGroup?: string;
}

export function Validate(Dto: any, options: CustomValidationOptions = {}) {
  return applyDecorators(
    SetMetadata('dtoSchema', Dto),
    SetMetadata('dtoOptions', options),
    UseGuards(CustomValidationPipe),
  );
}

export const Dto = createParamDecorator(
  (data: Record<string, any>, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req._dto;
  },
);
