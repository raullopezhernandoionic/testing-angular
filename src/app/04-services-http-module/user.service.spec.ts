import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let httpTestingController: HttpTestingController;

  //El beforeEach() hace referencia a una precarga antes de trealizar las diferentes pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({
      //Importamos el modulo
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //AFTER EACH --> Metodo que se ejecutara al final de cada prueba

  afterEach(() => httpTestingController.verify());

  it('should shet Users Value', () => {
    //Injectamos el servicio User Service
    const service: UserService = TestBed.inject(UserService);

    const dummyUsers = [{ name: 'John' }, { name: 'Doe' }];

    //Lamamos al metodo que queremos testear
    service.getUsers();

    // Todas las peticiones realizadas hacia aqui son o van a ser "espiadas"
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    //Ahora que ya podemos espiar cualquier peticion de http (get, delete, post ...) pasamos
    // a ejecutar la del ejemplo

    //PRUEBA 1 -- Exisgimos que el metodo sea GET
    expect(req.request.method).toBe('GET');
    //Se asigna la respuesta "dummyUsers" ya no viene la real
    req.flush(dummyUsers);

    //PRUEBA 2 - Comprobamos que los usuarios que se encuentran en el array de users son los mismos
    // que en el objeto fake o dummy que hemos creado

    expect(service.users).toEqual(dummyUsers);

    //PRUEBA3 - Queremos comprobar que la variable error sigue siendo falso para constatar
    // de que no ha cambiado a true. Cuando cambia a true es que se ha producido un error
    expect(service.error).toBeFalsy();

  });

  //EN EL CASO DE QUE DE ERROR

  it('should set error in true', () => {
    const esmg = 'deliberate 404 error';
    const service: UserService = TestBed.inject(UserService);

    service.getUsers();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    req.flush(esmg, { status: 404, statusText: 'Not found' })

    expect(service.users).toEqual([]);
    expect(service.error).toBeTruthy();
  })


});
