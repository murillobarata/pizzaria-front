import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getCustomers().subscribe((res: any) => {
      this.customers = res;
      console.log('Retorno do map do rxjs:', res);
    });
  }
}
