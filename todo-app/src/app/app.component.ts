import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // Import RouterOutlet so that the <router-outlet> tag works.
  imports: [RouterOutlet],
  template: `
    <h1>Standalone Angular App with Router</h1>
    <!-- The router outlet will display routed components -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  counter = signal(0);
  test() {}
}
