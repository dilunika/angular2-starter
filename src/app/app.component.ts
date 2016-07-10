import { Component } from '@angular/core';
import {SampleComponent} from './components/sample/sample.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.template.html',
    directives: [SampleComponent]
})
export class AppComponent {

}


// import {Component} from '@angular/core';
// import {GreetingComponent} from './greeting-component';
// import {BorderComponent} from './border-component';

// @Component({
//   selector: 'my-app',
//   template: `
//     <my-fancy-border title="The PIN Machine">
//       <my-greeting></my-greeting>
//     </my-fancy-border>
//   `,
//   directives: [GreetingComponent, BorderComponent]
// })
// export class AppComponent {
// ,
// directives: [NavbarComponent,BannerComponent, PortfolioComponent]
// }
