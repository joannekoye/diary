import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  entries: Entry[] = [
    new Entry('Flowers', 'I got flowers today', new Date(2020,3,14))
  ]

  showDetails(index){
    this.entries[index].showDescription = true
  }
  hideDetails(index){
    this.entries[index].showDescription = false
  }
  
  addNewEntry(entry){
    let entryLength = this.entries.length;
    entry.id = entryLength+1;
    entry.date = new Date(entry.date)
    this.entries.push(entry)
  }
 
  deleteEntry(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.entries[index].title}?`)
      
      if (toDelete){
        this.entries.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
