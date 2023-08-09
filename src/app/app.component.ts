
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
//import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  // count=0;
  // so1=0;
  // so2=0;
  contentButton = "Button";


  currentColor = true;
  black = false;
  color2 = false;
  color3 = false;
  color4 = false;
  color5 = false;
  color6 = false;

  changeColor()
  {
    //console.log("change");
    this.black = true;
    this.color2 = false;
    this.color3 = false;
    this.color4 = false;
    this.color5 = false;
    this.color6 = false;
    //this.currentColor = this.black;
  }

  changeColor2()
  {
    //console.log("change");
    this.color2=true;
    this.black = false;
    this.color3 = false;
    this.color4 = false;
    this.color5 = false;
    this.color6 = false;
    //this.currentColor = this.color2;
  }

  changeColor3()
  {
    this.color3=true;
    this.color2=false;
    this.black = false;
    this.color4 = false;
    this.color5 = false;
    this.color6 = false;
    //this.currentColor = this.color3;
  }

  changeColor4()
  {
    this.color4=true;
    this.color2=false;
    this.black = false;
    this.color3 = false;
    this.color5 = false;
    this.color6 = false;
    //this.currentColor = this.color4;
  }

  changeColor5()
  {
    this.color5=true;
    this.color2=false;
    this.black = false;
    this.color3 = false;
    this.color4 = false;
    this.color6 = false;
    //this.currentColor = this.color5;
  }

  changeColor6()
  {
    this.color6=true;
    this.color2=false;
    this.black = false;
    this.color3 = false;
    this.color4 = false;
    this.color5 = false;
    //this.currentColor = this.color6;
  }


  fonts = ["Times New Roman","Arial","Roboto","Comic Sans MS"];
  selectedFont = "Times New Roman";
  times = true;
  roboto = false;
  arial = false;
  comic = false;
  
  changeFont(){
    //console.log("changeFont"); 
    var value = this.selectedFont;
    //console.log("current: "+value);
    if(value=="Times New Roman")
    {
      console.log(value);
      this.times = true;
      this.roboto = false;
      this.arial = false;
      this.comic = false;
      //this.times = this.times;
    }
    if(value=="Roboto")
    {
      console.log(value);
      this.roboto = true;
      this.times = false;
      this.arial = false;
      this.comic = false;
      //this.times = this.roboto;
    }
    if(value=="Arial")
    {
      this.arial = true;
      this.times = false;
      this.roboto = false;
      this.comic = false;
      //this.times = this.arial;
    }
    if(value=='Comic Sans MS')
    {
      this.comic = true;
      this.arial = false;
      this.times = false;
      this.roboto = false;
      //this.times = this.comic;
    }

  }


  kichThuocCurrent = 16;
  font16 = true;
  font14 = false;
  font15 = false;
  font17 = false;
  font18 = false;

  changeSize(){
    //console.log("changeSize");
    var value = this.kichThuocCurrent;
    //console.log(value);
    if(value==14)
    {
      console.log(value);
      this.font14 = true;
      this.font15 = false;
      this.font16 = false;
      this.font17 = false;
      this.font18 = false;
      //this.font14 = this.font14;
    }
    if(value==15)
    {
      console.log(value);
      this.font15 = true;
      this.font14 = false;
      this.font16 = false;
      this.font17 = false;
      this.font18 = false;
      //this.font14 = this.font15;
    }
    if(value==16)
    {
      console.log(value);
      this.font16 = true;
      this.font14 = false;
      this.font15 = false;
      this.font17 = false;
      this.font18 = false;
      //this.font14 = this.font16;
    }
    if(value==17)
    {
      console.log(value);
      this.font17 = true;
      this.font14 = false;
      this.font15 = false;
      this.font16 = false;
      this.font18 = false;
      //this.font14 = this.font17;
    }
    if(value == 18)
    {
      this.font18 = true;
      this.font17 = false;
      this.font14 = false;
      this.font15 = false;
      this.font16 = false;
      //this.font14 = this.font18;
    }
  }

  normal = true;
  bold = false;
  italic = false;
  underline = false;
  uppercase = false;
  fontB = "NoChange";
  fontI = "NoChange";
  fontU = "NoChange";
  fontUp = "NoChange";

  changeBold(){
   
    var flag = "NoChange"
    var result = 0;
    if(this.fontB==flag)
    {
      result = 1;
    }
    if(result==1)
    {
      console.log("changeBOld");
      this.bold = true;
      this.normal = false;
      //this.underline = false;
      //this.italic = false;
      const styleB = document.getElementById("styleB");
      if(styleB)
      {
        styleB.style.background = "#007f00";
        styleB.style.color = "white"; 
      }
      this.fontB = "Changed";  
    }

    if(result==0)
    {
      console.log("back");
      this.normal = true;
      this.bold = false;

      const styleB = document.getElementById("styleB");
      if(styleB)
      {
        styleB.style.background= "none";
        styleB.style.color = "black";
      }
      this.fontB = "NoChange";
    }    
  }

  changeItalic(){
    var flag = "NoChange";
    var result = 0;
    if(this.fontI == flag)
    {
      result = 1;
    }

    if(result == 1)
    {
      console.log('changeItalic');
      this.italic = true;
      //this.bold = false;
      //this.underline = false;
      this.normal = false;
      const styleI = document.getElementById("styleI");
      if(styleI)
      {
        styleI.style.background = "#007f00";
        styleI.style.color = "white";
      }
      this.fontI = "Changed";
    }

    if(result == 0)
    {
      console.log('back');
      this.normal = true;
      this.italic = false;
      //this.bold = false;
      //this.underline = false;
      const styleI = document.getElementById("styleI");
      if(styleI)
      {
        styleI.style.background = "none";
        styleI.style.color = "black";
      }
      this.fontI = "NoChange";
    }
    
  }

  changeUnderline()
  {
    var flag = "NoChange";
    var result = 0;
    if(this.fontU == flag)
    {
      result =1;
    }
    if(result == 1)
    {
      console.log("changeUnderline");
      this.underline = true;
      this.normal = false;
      const styleU = document.getElementById("styleU");
      if(styleU)
      {
        styleU.style.background = "#007f00";
        styleU.style.color = "white";
      }
      this.fontU = "Changed";
    }

    if(result==0)
    {
      console.log("back");
      this.normal = true;
      this.underline = false;
      const styleU = document.getElementById("styleU");
      if(styleU)
      {
        styleU.style.background = "none";
        styleU.style.color = "black";
      }
      this.fontU = "NoChange";
    }
  }

  changeUppercase()
  {
  
    var flag = "NoChange";
    var result = 0;
    if(this.fontUp == flag)
    {
      result =1;
    }
    if(result == 1)
    {
      console.log("changeUppercase");
      this.uppercase = true;
      this.normal = false;
      const styleUp = document.getElementById("styleUp");
      if(styleUp)
      {
        styleUp.style.background = "#007f00";
        styleUp.style.color = "white";
      }
      this.fontUp = "Changed";
    }

    if(result==0)
    {
      console.log("back");
      this.normal = true;
      this.uppercase = false;
      const styleUp = document.getElementById("styleUp");
      if(styleUp)
      {
        styleUp.style.background = "none";
        styleUp.style.color = "black";
      }
      this.fontUp = "NoChange";
    }
  }

  left = false;
  center = true;
  right = false;

  changeLeft()
  {
    console.log("changeLeft");
    this.left = true;
    this.center = false;
    this.right = false;
    const styleLeft = document.getElementById("po-left");
    const styleCenter = document.getElementById("po-center");
    const styleRight = document.getElementById("po-right");
    if(styleLeft && styleCenter && styleRight)
    {
      styleLeft.style.background = "#007f00";
      styleLeft.style.color = "white";
      styleCenter.style.background = "none";
      styleCenter.style.color = "black";
      styleRight.style.background= "none";
      styleRight.style.color = "black";
    }
  }

  changeCenter()
  {
    this.center = true;
    this.left = false;
    this.right = false;
    const styleCenter = document.getElementById("po-center");
    const styleLeft = document.getElementById("po-left");
    const styleRight = document.getElementById("po-right");
    if(styleCenter && styleLeft && styleRight)
    {
      styleCenter.style.background = "#007f00";
      styleCenter.style.color = "white";
      styleLeft.style.background = "none";
      styleLeft.style.color = "black";
      styleRight.style.background = "none";
      styleRight.style.color="black";
    }
  }

  changeRight()
  {
    this.right = true;
    this.center = false;
    this.left = false;
    const styleRight = document.getElementById("po-right");
    const styleCenter = document.getElementById("po-center");
    const styleLeft = document.getElementById("po-left");
    if(styleRight && styleCenter && styleLeft)
    {
      styleRight.style.background = "#007f00";
      styleRight.style.color = "white";
      styleCenter.style.background = "none";
      styleCenter.style.color = "black";
      styleLeft.style.background = "none";
      styleLeft.style.color = "black";
    } 
  }

  bot = false;
  mid = true;
  top = false;

  changeBot(){
    console.log("changeBot");
    this.bot = true;
    this.mid = false;
    this.top = false;
    const styleBot = document.getElementById("wo-bot");
    const styleMid = document.getElementById("wo-mid");
    const styleTop = document.getElementById("wo-top");
    if(styleBot && styleMid && styleTop)
    {
      styleBot.style.background = "#007f00";
      styleBot.style.color = "white";
      styleMid.style.background = "none";
      styleMid.style.color = "black";
      styleTop.style.background = "none";
      styleTop.style.color = "black";
    }
  }

  changeMid(){
    console.log("changeMid");
    this.mid = true;
    this.bot = false;
    this.top = false;
    const styleMid = document.getElementById("wo-mid");
    const styleBot = document.getElementById("wo-bot");
    const styleTop = document.getElementById("wo-top");
    if(styleMid && styleBot && styleTop)
    {
      styleMid.style.background = "#007f00";
      styleMid.style.color = "white";
      styleBot.style.background = "none";
      styleBot.style.color = "black";
      styleTop.style.background = "none";
      styleTop.style.color = "black";
    }
  }

  changeTop()
  {
    this.top = true;
    this.mid = false;
    this.bot = false;
    const styleMid = document.getElementById("wo-mid");
    const styleBot = document.getElementById("wo-bot");
    const styleTop = document.getElementById("wo-top");
    if(styleMid && styleBot && styleTop)
    {
      styleTop.style.background = "#007f00";
      styleTop.style.color = "white";
      styleBot.style.background = "none";
      styleBot.style.color = "black";
      styleMid.style.background = "none";
      styleMid.style.color = "black";
    }
  }
  
  
}

// bootstrapApplication(AppComponent);