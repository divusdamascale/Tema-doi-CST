import { Component } from '@angular/core';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html'
})
export class Modal1Component {
  isVisible = false;
  currentInformation = "@input() works fine with information passed from parent component";
  constructor() {}
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  
}
