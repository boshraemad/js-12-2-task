//using promises
function getdata(link){
    return new Promise((resolve,reject)=>{
        let data=new XMLHttpRequest();
        data.open("Get",link);
        data.send();
        data.onload=function(){
            if(this.readyState===4 && this.status===200){
                resolve(JSON.parse(data.responseText));
            }else{
                reject(Error("rejected http"));
            }
        }
    }).then((maindata)=>{
        maindata.length=5;
        maindata.forEach(obj => {
                let divv=document.createElement("div");
                let title=document.createElement("h2");
                let description=document.createElement("p");
                title.textContent=obj.title;
                divv.appendChild(title);
                description.textContent=obj.description;
                divv.appendChild(description);
                document.body.appendChild(divv);
    
            
        });
        
    })
};
getdata("./objj.json");
////////////////////////////////
//using fetch
fetch("./objj.json").then((data)=>{
    let maindata=data.json();
    return maindata;
}).then((data)=>{
    data.length=5;
    data.forEach(obj => {
        let divv2=document.createElement("div");
        let title2=document.createElement("h2");
        let description2=document.createElement("p");
        title2.textContent=obj.title;
        divv2.appendChild(title2);
        description2.textContent=obj.description;
        divv2.appendChild(description2);
        document.body.appendChild(divv2);

    
});
});

