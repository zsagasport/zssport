import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { expect } from 'chai';
import { MatchComponent } from '../src/match/match.component';
import { ZssportModule } from '../src';

describe('Match component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ZssportModule]});
  });

  it('should say ', () => {
    const fixture: ComponentFixture<MatchComponent> = TestBed.createComponent(MatchComponent);

    fixture.detectChanges();

   // expect(fixture.nativeElement.innerHTML.trim()).to.equal('');
  });

});
