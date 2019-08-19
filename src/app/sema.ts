export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public author: string,public nameSubmitter: string,public quote: string, public postDate: Date){
    this.showDescription=false;
  }
}