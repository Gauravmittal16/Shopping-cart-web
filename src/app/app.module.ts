import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DeleteProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
