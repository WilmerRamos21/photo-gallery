import { Component } from '@angular/core';
import {AlertService} from '../services/alert.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,

})
export class Tab1Page {

  constructor(public alertService: AlertService) {

  }
  mostrarAlerta(){
    this.alertService.presentAlert('Hola','Esta es una alerta');
  }
  confirmar(){
    this.alertService.presentConfirm('Confirmación','¿Estás seguro?');
  }
}

