import { Component, OnInit } from '@angular/core';
import { BankingproductService } from 'src/app/_service/bankingproduct.service';
import { BankingProduct } from 'src/app/_models/BankingProduct';

@Component({
  selector: 'app-banking-product',
  templateUrl: './banking-product.component.html',
  styleUrls: ['./banking-product.component.css']
})
export class BankingProductComponent implements OnInit {

  mostrarTabla: boolean;
  bankingProducts:BankingProduct[];
  constructor(private bankingProductService: BankingproductService) { }

  ngOnInit() {
    this.bankingProductService.listar().subscribe(data => {
      console.log(data);
      this.bankingProducts = data;
      console.log(this.bankingProducts);
    });
  }

}
