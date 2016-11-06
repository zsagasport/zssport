import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ZssportModule} from '../src';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, ZssportModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}