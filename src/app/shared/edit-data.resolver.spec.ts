import { TestBed } from '@angular/core/testing';

import { EditDataResolver } from './edit-data.resolver';

describe('EditDataResolver', () => {
  let resolver: EditDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EditDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
