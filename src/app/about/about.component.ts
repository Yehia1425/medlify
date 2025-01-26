import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  projectcount:number=0;
  projectcountstop:any = setInterval(()=>{
    this.projectcount++;

    if(this.projectcount==232){

      clearInterval(this.projectcountstop);
    }


  },5)


  
  namecount:number=0;
  namecountstop:any = setInterval(()=>{
    this.namecount++;

    if(this.namecount==532){

      clearInterval(this.namecountstop);
    }


  },5)


  hourscount:number=0;
  hourscountstop:any = setInterval(()=>{
    this.hourscount++;

    if(this.hourscount==1432){

      clearInterval(this.hourscountstop);
    }


  },5)



  workscount:number=0;
  workscountstop:any = setInterval(()=>{
    this.workscount++;

    if(this.workscount==32){

      clearInterval(this.workscountstop);
    }


  },10)

}
