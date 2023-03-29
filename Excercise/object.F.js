let Pig = function(namep,yearp,location){
    this.namep = namep;
    this.yearp = yearp;
    this.location = location;
    this.Cut = function(){
        console.log(`${namep} is Cut pig`);
    }
};

let butcer = new Pig('COCO',5,'Brazill');
console.log(butcer);
butcer.Cut()