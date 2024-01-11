import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {DOCUMENT, NgForOf, NgIf} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterLink} from "@angular/router";
import {buttonSize} from "../animations";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  animations: [buttonSize],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  selected: string = "white";
  clicked = false;
  title = 'Settings';

  items= [
    {label: 'dark', value: "black"},
    {label:'light',value:"white"}
  ];
  @Output() dataUpdated = new EventEmitter<string>();
  @Input() type: 'clock' | 'timer' = "clock";
  constructor(@Inject(DOCUMENT) private document: Document) {}


  get opposite(): 'clock' | 'timer' {
    return this.type === 'clock' ? 'timer' : 'clock';
  }

  get clickType(): 'small' | 'big' {
    return this.clicked ? 'small' : 'big';
  }

  optionChange(color: string){
    this.selected = color;
    document.body.className = color;
  }
  handleClick() {
    this.clicked = !this.clicked
    if(this.clicked)
      this.dataUpdated.emit('small');
    else
      this.dataUpdated.emit('big');
  }
}
