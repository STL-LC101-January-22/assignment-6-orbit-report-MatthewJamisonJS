import { style } from "@angular/animations";

export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		//let td= document.getElementsByTagName('td')
		if( this.type ==='Space Debris'){
			//td.setAttribute(class, warning)
			return true;
		} else { 
			//console.log(this)
		return false;
	}
   }

}

// TODO 3a: fix isSpaceDebris check
