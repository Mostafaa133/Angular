import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  imgSrcarr = ["https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg","https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"
  ,"https://www.w3schools.com/css/img_5terre.jpg","https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg","https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=996&t=st=1681649486~exp=1681650086~hmac=3a6372f90bcc292123e690634bbdffd46a45a6afedd1896cc3d6025b01181036"]
  imgSrc =this.imgSrcarr[0];
   i:number = 0;
     interval:any;
  next(){
   if(this.i<this.imgSrcarr.length-1){
    this.i++;
     this.imgSrc = this.imgSrcarr[this.i];

   }

  }


  prev(){
    if(this.i>0){
      this.i--;
      this.imgSrc = this.imgSrcarr[this.i];

    }

  }
  slide(){
   this.interval= setInterval(() => {
    this.next()
    if(this.i==this.imgSrcarr.length-1){
      this.i=-1;
    }
  }, 2000);

  }
  stop(){
    clearInterval(this.interval);

  }
}
