import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>465456456454 to yoursdfsd + Webpack + ES6 Playground</h1>
    <h2>Have {{ what }}</h2>
  `
})
export default class App {
  constructor() {
    this.what = "sdljsdfj5456456dskfja46545 4564564dfsdfds time!";
  }
};
import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { enableProdMode } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    App
  ],
  bootstrap: [ App ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
