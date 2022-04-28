// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule,Routes} from '@angular/router'
// import {FormsModule, ReactiveFormsModule} from '@angular/forms'
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AppHeaderComponent } from './app.header.component';
// import { BoxaComponent } from './boxa/boxa.component';
// import { CustomerFormComponent } from './customer-form/customer-form.component';
// import { RtPcrComponent } from './rt-pcr/rt-pcr.component';
// import { SearchComponent } from './search/search.component';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { BookListComponent } from './book-list/book-list.component';
// import { PriceDiscountPipe } from './price-discount.pipe';
// import { BookComponent } from './book/book.component';
// import { TabComponent } from './tab/tab.component';
// import { BookCatlogComponent } from './book-catlog/book-catlog.component';
// import { NewsComponent } from './news/news.component';
// import { MenuComponent } from './menu/menu.component';
// import { BookformComponent } from './bookform/bookform.component';
// import { LifeCycleComponent } from './life-cycle/life-cycle.component';
// import { ChildComponent } from './child/child.component';
// import { ParentComponent } from './parent/parent.component';
// const routes: Routes=[
//   {path:'',component:HomeComponent},
//   {path:'news',component:NewsComponent},
//   {path:'books',component:BookCatlogComponent},
//   {path:'addbooks',component:BookformComponent}
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AppHeaderComponent,
//     BoxaComponent,
//     CustomerFormComponent,
//     RtPcrComponent,
//     SearchComponent,
//     EmployeeFormComponent,
//     BookListComponent,
//     PriceDiscountPipe,
//     BookComponent,
//     TabComponent,
//     BookCatlogComponent,
//     NewsComponent,
//     MenuComponent,
//     BookformComponent,
//     LifeCycleComponent,
//     ChildComponent,
//     ParentComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule,
//     RouterModule.forRoot(routes)
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }