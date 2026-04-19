import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor( private alertController: AlertController){
  }
  public async presentAlert(header: string , message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    })
    await alert.present();
  }
  public async presentConfirm(header:string, message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },{
          text: 'Aceptar',
          handler:()=>{
            console.log('Confirmado');
          }
        }
      ]
    })
    await alert.present();
  }
  
}
