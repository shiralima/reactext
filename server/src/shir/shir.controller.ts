import { Controller, Get } from '@nestjs/common';

@Controller('shir')
export class ShirController {

      /**
     * @tag public
     */
      @Get("public")
      public public(): void {}
   
}
