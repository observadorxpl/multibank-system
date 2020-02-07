import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BankingProduct } from '../_models/BankingProduct';


@Injectable({
  providedIn: 'root'
})
export class BankingproductService {
  url: string = `${environment.HOST_URL}/micro-bancario/products`;
  constructor(private http: HttpClient) { }

  listar(){
    console.log(this.url);
    return this.http.get<BankingProduct[]>(this.url);
  }
  listarxId(idBankingProduct: string){
    return this.http.get<BankingProduct>(`${this.url}/${idBankingProduct}`);
  }
  registrar(bankingProduct: BankingProduct){
    return this.http.post<BankingProduct>(`${this.url}`, bankingProduct);
  }
  modificar(bankingProduct: BankingProduct){
    return this.http.put<BankingProduct>(`${this.url}`, bankingProduct);
  }
  eliminar(idBankingProduct: string){
    return this.http.delete<BankingProduct>(`${this.url}/${idBankingProduct}`);
  }
}
