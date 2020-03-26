export class Entry {
  showDescription : boolean
  
  constructor(public title: string, public description: string, public date: Date){
    this.showDescription = false;
  }
}
