import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../_models/customer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer) {
    const url = 'https://pizzaria-mentoria.herokuapp.com/api/client';
    return this.http.post(url, customer);
  }

  getCustomers() {
    const url = 'https://pizzaria-mentoria.herokuapp.com/api/client';
    return this.http.get(url).pipe(map((res:any) => {
      console.log('Resposta da API:', res);
      let novaResposta = res.map(i => {
        console.log('Mapeando resposta:', i);
        return i;
      });
      return novaResposta;
    }));
  }
}
