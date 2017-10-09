import { Component } from '@angular/core';
import { AlertController , LoadingController , NavController } from 'ionic-angular';
import { ComidaProvider } from '../../providers/comida/comida';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 	foods: any[] = [];
 	loader : any;
 	constructor(
 	    public navCtrl: NavController,
 	    public comidaService: ComidaProvider,
 	    public loadingController: LoadingController,
 	    public alertCtr:AlertController
 	) {
 		this.loader = this.loadingController.create({
 		      content: "Cargando"
 		    });  
 		this.loader.present();
 	}

 	ionViewDidLoad(){
 	    this.comidaService.getFood()
 	    .then(data => {
 	    	console.log(data)
 	      	this.foods = data.food;
 	      	this.loader.dismiss()
 	    })
 	    .catch(error =>{
 	      	console.error(error);
 	      	this.loader.dismiss()
 	      	this.showAlert();
 	    })
 	}

 	showAlert(title:string="Error",message:string="Error al cargar informacion. Revisa tu conexión a internet"){
 		let alert =this.alertCtr.create({
 			title:title,
 			subTitle:message,
 			buttons:['OK']
 		});
 		alert.present();
 	}

 	itemTapped(event, item) {
    	this.navCtrl.push(ItemDetailsPage, {
      		item: item
    	});
    }
}
