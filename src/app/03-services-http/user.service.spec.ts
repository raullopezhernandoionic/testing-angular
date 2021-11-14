import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from './user.service';

describe('Service : User', () => {

  let httpClientSpy = { get: jasmine.isSpy }
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy as any);

    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
  });

  // it('should return expected users (HttpClient called once)', () => {

  //   //Definimos un mock para hacer la prueba
  //   const expectedUsers = [
  //     { id: 1, name: 'A' },
  //     { id: 2, name: 'B' }
  //   ]

  //   //httpClientSpy.get.and.returnValue(of(expectedUsers));

  //   userService.getUsers();
  //   // expect(userService.users.length).toBe(2);
  //   // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');


    // Si quisieramos saltarnos una prueba ponemos delante del "it" una "x" . Ejemplo
    // xit('should return an error when the server returns as 404', () => {
    // it('should return an error when the server returns as 404', () => {
    //   const errorResponse = new HttpErrorResponse({
    //     error: 'test 404 error',
    //     status: 404,
    //     statusText: 'Not Found'
    //   });

    //   //httpClientSpy.get.and.returnValue(throwError(errorRespoonse));

    //   userService.getUsers();

    //   expect(userService.users).toBeUndefined();

    // })
  });

