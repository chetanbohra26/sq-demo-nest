import { AuthApisModule } from './module';
import { RestServer } from '@libs/boat';

RestServer.make(AuthApisModule, { addValidationContainer: true });
