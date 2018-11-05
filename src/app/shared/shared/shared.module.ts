import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { HeaderModule } from './../header/header.module';
import { FooterModule } from '../footer/footer.module';


//import { NavComponent } from './../nav/nav.component';
//import { HeaderComponent } from './../header/header.component';
//import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavModule,
    HeaderModule,
    FooterModule,
  ],
  exports:[
    NavModule,
    HeaderModule,
    FooterModule,
  ]
})
export class SharedModule { }
