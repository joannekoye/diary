import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Entry } from '../entry';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newEntry = new Entry("","",new Date());
  @Output() addEntry = new EventEmitter<Entry>()

  submitEntry(){
    this.addEntry.emit(this.newEntry);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
