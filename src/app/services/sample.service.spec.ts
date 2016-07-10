/**
 * Created by dilunika on 10/07/16.
 */
import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {SampleService} from './sample.service';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing'
import {provide} from "@angular/core";

beforeEachProviders(() => [
  SampleService,
  MockBackend,
  BaseRequestOptions,
  provide(Http, {
    useFactory: (backend, options) => new Http(backend, options),
    deps: [MockBackend, BaseRequestOptions]
  })
]);

describe('Sample Service', () => {

  let service, mockbackend;

  beforeEach(inject([SampleService, MockBackend],(svc: SampleService, be: MockBackend) => {
    service = svc;
    mockbackend = be;
  }));

  it('should be available.', () => {
    expect(service).toBeDefined();
  });

  it('should return user details.', () => {
    let response = {
      name: 'Kasun Dilunika',
      email: 'kasundilunika@gmail.com'
    };

    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(response)})));
    });

    service.userDetails().subscribe(user => {
      expect(user.name).toBe('Kasun Dilunika');
    });

  });

});
