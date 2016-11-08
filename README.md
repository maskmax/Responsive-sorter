### Responsive Sorter ###
>v.0.1

This library allows you to swap HTML elements based on browser width.

### 1.Getting Started
Set up you code like this

```html
<script src="js/sorter.js"></script>
<script type="text/javascript">
window.onload = function () {
var mysorter=new ResponsiveSorter();
		}
 </script>
 
```

```
### 2.Set up your HTML
All you need is to add your prefix (default is mrs) and sorting class to elements. sorting class starts with prefix then rank number and after that width range name.
sorting class mrs3md means when the window width is md (from 992px to 1200px) put this element in the 3th position.

```html
  <div class="mrs mrs1lg mrs1md mrs4sm"><i>1</i></div>
    <div class="mrs mrs3lg mrs2md mrs3sm"><i>2</i></div>
    <div class="mrs mrs2lg mrs3md mrs2sm"><i>3</i></div>
    <div class="mrs mrs1lg mrs4md mrs1sm"><i>4</i></div>
```

You can have your custom sorter prefix , width points like bellow
```html
<script src="js/sorter.js"></script>
<script type="text/javascript">
window.onload = function () {
var custom=new ResponsiveSorter({prefix:'cus',//default mrs
            width :[
            ,{name:'second',min:0,max:1200}
            ,{name:'first',min:1200,max:3000000} ],
              // default [ {name:'xs',min:0,max:768},
              //  {name:'sm',min:768 ,max:992}
             //  ,{name:'md',min:992,max:1200}
             // ,{name:'lg',min:1200,max:3000000} ]
            debug:true //default false
        });
		}
 </script>
 
  <div class="cus cus1first cus4second"><i>1</i></div>
    <div class="cus cus3first cus3second"><i>2</i></div>
    <div class="cus cus2first cus2second"><i>3</i></div>
    <div class="cus cus1first cus1second"><i>4</i></div>

 
```


