import { TestBed, inject } from '@angular/core/testing';

import { RouterService } from './router.service';
import { HttpClientModule } from '@angular/common/http';

describe('RouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: [RouterService]
    });
  });

  it('should be created', inject([RouterService], (service: RouterService) => {
    expect(service).toBeTruthy();
  }));
});
