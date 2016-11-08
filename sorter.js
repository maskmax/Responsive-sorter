function ResponsiveSorter(options) {
    "use strict";
     this.options={};

    if(typeof(options)==='undefiend' || typeof(options)!=='object'  ){options={};}
    this.options.prefix=options.prefix || 'mrs';
    this.options.debug=options.debug || false;
    this.options.width=options.width || [ {name:'xs',min:0,max:768},
            {name:'sm',min:768 ,max:992}
            ,{name:'md',min:992,max:1200}
            ,{name:'lg',min:1200,max:3000000} ] ;


    if(typeof(options)=="object"){

    }
    ResponsiveSorter.prototype.debug=function(txt){
        if(options.debug==true){console.log(txt);}
    }
    ResponsiveSorter.prototype.sortHtml=function() {
        this.classList=[];
        this.debug('sorting started...');
        this.debug("." + this.options.prefix);
         var nodes=document.querySelectorAll("."+this.options.prefix);

        this.debug(nodes);
        var i=0;
        while(nodes[i]){
            this.debug(nodes[i].className);
            var classNames=nodes[i].className.split(' ');
            var ii=0;
            while(classNames[ii]){

                if(classNames[ii].slice(0,this.options.prefix.length)==this.options.prefix){


                    if(classNames[ii].slice(-1*this.widthName.name.length)==this.widthName.name) {
                        this.debug(classNames[ii]);
                        var classNumber = classNames[ii].replace(this.widthName.name, "");
                         classNumber = Number(classNumber.replace(this.options.prefix, ""));
if(isNaN(classNumber)){classNumber =1;}
                        this.debug(classNumber);
                        this.classList.push(
                            { elemNumber:i,elemrank:classNumber }
                        );
                    }
                }


                ii++;
            }

            i++;
        }
        this.debug(this.classList);


          /**********************************/
         /*********sorting part************/
        /********************************/

        i=0;
        var prerank=0;

        this.classList.sort(function(a, b) {
            return Number(a.elemrank) - Number(b.elemrank);
        });
        this.debug(this.classList);

        while(this.classList[i])
        {
           // alert(this.classList[i].elemNumber);

           if((i+1)<this.classList.length){ this.insertAfter( nodes[this.classList[i+1].elemNumber], nodes[this.classList[i].elemNumber]);}

            i++;
        }


    }
    ResponsiveSorter.prototype.insertAfter=function (newElement,targetElement) {
        var parent = targetElement.parentNode;
        if(parent.lastchild == targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }


    ResponsiveSorter.prototype.findWidth=function(){

        var theWidth=this.options.width;
        var preWidthName=this.widthName || {};

      //  this.debug('width:'+window.innerWidth);
       // this.debug('check:'+theWidth);
        this.widthName={};
       var i=0;
        while(theWidth[i]){
            //this.debug('min:'+theWidth[i].min+'max:'+theWidth[i].max);
          if(theWidth[i].min<=window.innerWidth && window.innerWidth<theWidth[i].max){
              this.debug('name:'+theWidth[i].name+'----min:'+theWidth[i].min+'max:'+theWidth[i].max);
              this.widthName=theWidth[i];break;
          }
            //
            i++;
        }
        if(preWidthName.name!=this.widthName.name){ this.sortHtml(); }




    }


    this.findWidth();
    window.addEventListener("resize", this.findWidth.bind(this)   );
}

