import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => console.log('hello world'),
      multi: true,
      deps: []
    }
  ]
})
export class CoreModule {}
