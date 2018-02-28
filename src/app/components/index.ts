import { LandingComponent } from './landing/landing.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';

export const components: any[] = [
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  LandingComponent
];

export * from './first/first.component';
export * from './second/second.component';
export * from './third/third.component';
export * from './landing/landing.component';
