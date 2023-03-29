import { TestBed } from '@angular/core/testing';

import { BlogpostResolver } from './blogpost.resolver';

describe('BlogpostResolver', () => {
  let resolver: BlogpostResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogpostResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
