import { TestBed, inject } from '@angular/core/testing';

import { FolderLoadService } from './folder-load.service';

describe('FolderLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderLoadService]
    });
  });

  it('should be created', inject([FolderLoadService], (service: FolderLoadService) => {
    expect(service).toBeTruthy();
  }));
});
