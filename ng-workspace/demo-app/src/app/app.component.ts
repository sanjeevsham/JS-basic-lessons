// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'demo-app';
//   location='ooty';

// onBoxValueChange(paramData:any)
// {
//   console.log("app component: " + paramData.value);
// }
// }
// @Component({
//   selector: 'my-root',
//   template: '<h1>hai sanjeev<h1>',
//   styleUrls: ['./app.component.css']
// })
import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle-hooks';
}