import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/service/switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalSS: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }


}
