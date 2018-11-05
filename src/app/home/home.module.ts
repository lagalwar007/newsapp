import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { PostComponent } from '../post/post.component';
import { PostModule } from '../post/post.module';
import { PostService } from '../shared/post.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [HomeComponent,PostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PostModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers:[PostService] 
})
export class HomeModule { }
