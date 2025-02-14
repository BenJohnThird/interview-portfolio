import { TestBed } from '@angular/core/testing';

import { GlobalLoaderService } from './global-loader.service';
import Spy = jasmine.Spy;

describe('GlobalLoaderService', () => {
  let service: GlobalLoaderService;

  let nextSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalLoaderService);

    nextSpy = spyOn(service.loaderStatus, 'next')
      .and
      .callThrough();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call loaderStatus.next when triggerAuto is called', () => {
    service.triggerAuto();
    expect(nextSpy)
      .toHaveBeenCalled();
  });

  it('should call loaderStatus.next when completeAuto is called', () => {
    service.completeAuto();
    expect(nextSpy)
      .toHaveBeenCalled();
  });
});
