import { Component } from '@angular/core';
import { AlertController, LoadingController , NavController } from 'ionic-angular';
import { BebidaProvider } from '../../providers/bebida/bebida';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  	drinks: any[] = [];
  	loader : any;
  	constructor(
  	    public navCtrl: NavController,
  	    public bebidaService: BebidaProvider,
  	    public loadingController: LoadingController,
  	    public alertCtr:AlertController
  	) {
  		this.loader = this.loadingController.create({
  		      content: "Cargando"
  		    });  
  		this.loader.present();
  	}

  	ionViewDidLoad(){
  	    this.bebidaService.getDrinks()
  	    .then(data => {
  	    	console.log(data)
  	      	this.drinks = data.drinks;
  	      	this.loader.dismiss()
  	    })
  	    .catch(error =>{
  	      	console.error(error);
  	      	this.loader.dismiss();
  	      	this.showAlert()
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
