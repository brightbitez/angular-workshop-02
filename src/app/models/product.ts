export class Product {
    public code: string;
    public name: string;
    public price: number;
    public rating: number;
    public avaiable: boolean;
    public imageUrl: string;

    constructor(code: string,name: string,price:number){
        this.code = code;
        this.name = name;
        this.price = price;
        
    }
}
