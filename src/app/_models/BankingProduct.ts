import { Bank } from './Bank';
import { ProductType } from './ProductType';

export class BankingProduct{
    "idProduct": string;
    "description": string;
    "numMaxDeposit": number;
    "numMaxWithdrawal": number;
    "commision": number;
    "productCode": number;
    "createAt": string;
    "bank": Bank;
    "productType": ProductType;
}
