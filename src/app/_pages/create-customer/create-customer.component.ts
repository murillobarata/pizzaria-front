import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.initCustomer();
  }

  initCustomer() {
    this.customer = new Customer();
  }

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe((res) => {
      console.table(res);
      this.initCustomer();
    });
  }
}
