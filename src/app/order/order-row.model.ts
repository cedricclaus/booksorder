export class OrderRow{

  constructor(
    public title : string,
    public author : string,
    public price : number,
    public quantity : number
  ) {
  }

  ht(){
    return this.price * this.quantity;
  }

  ttc(){
   return  this.ht() * 1.21;

  }
}
