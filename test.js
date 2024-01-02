let d=document.querySelectorAll(".cell")
let cellist=Array.from(d)
let btn=document.querySelector("button");
const { L, C } = window._;


_.go(
    L.range(0,100),
    L.filter(el=>(el%10!==0 && el>10)),
    _.map(el=>{
        let i=document.createElement("input");
        let j=document.createElement("form");
        j.appendChild(i)
        cellist[el].appendChild(j)        




    })
)

_.go(
    
    L.range(0,99),
    L.filter(el=>(el%10==0 && el>0)),
    _.map(el=>cellist[el].textContent=`${el/10}`),
    

)

_.go(
    
    L.range(0,99),
    L.filter(el=>(el%10==0 && el>0)),
    _.map(el=>cellist[el].addEventListener("click",()=>{
        _.go(
            L.range(1,10),
            _.map(els=>{

                if(cellist[el+els].firstElementChild.firstElementChild.style.backgroundColor===""){
                    cellist[el+els].firstElementChild.firstElementChild.style.backgroundColor="lightblue"}
                else{cellist[el+els].firstElementChild.firstElementChild.style.backgroundColor=""}



            })

        )



    })),
    

)




_.go(
    
    L.range(1,10),
    _.map(el=>cellist[el].addEventListener("click",()=>{
        _.go(
            L.range(1,10),
            _.map(els=>{

                if(cellist[el+els*10].firstElementChild.firstElementChild.style.backgroundColor===""){
                    cellist[el+els*10].firstElementChild.firstElementChild.style.backgroundColor="lightblue"}
                else{cellist[el+els*10].firstElementChild.firstElementChild.style.backgroundColor=""}



            })

        )



    })),
    

)














_.go(
    L.range(1,10),
    _.map(el=>cellist[el].textContent=String.fromCharCode(64+el))
)

_.go(
    L.range(0,100),
    L.filter(el=>el%10!==0&& el>10),
    _.map(el=>cellist[el].firstElementChild.firstElementChild.addEventListener("focus",()=>{
        
        cellist[Math.floor(el/10)*10].style.backgroundColor="green"
        cellist[0].textContent=`${cellist[el%10].textContent}${Math.floor(el/10)}`

        cellist[el%10].style.backgroundColor="green"
    

    }))

)
_.go(
    L.range(0,100),
    L.filter(el=>el%10!==0&& el>10),
    _.map(el=>cellist[el].firstElementChild.firstElementChild.addEventListener("blur",()=>{
        
        cellist[Math.floor(el/10)*10].style.backgroundColor="white"


        cellist[el%10].style.backgroundColor="white"
    

    }))
)


_.go(
    L.range(0,100),
    L.filter(el=>el%10!==0&& el>10),
    _.map(el=>cellist[el].firstElementChild.addEventListener("submit",(e)=>{
        
        e.preventDefault()
    

    }))
)


cellist[0].addEventListener("click",()=>{


    console.log("click")
    let t=_.go(
    _.range(0,100),
    _.filter(el=>el%10!==0&& el>10),
    )
        console.log(t)
        console.log(cellist[12])
    for(let el of t){
        if(cellist[el].firstElementChild.firstElementChild.style.backgroundColor===""){
        cellist[el].firstElementChild.firstElementChild.style.backgroundColor="lightblue"}
        else{cellist[el].firstElementChild.firstElementChild.style.backgroundColor=""}

    }

})




btn.addEventListener("click",()=>{
    let datas=[[],[],[],[],[],[],[],[],[]]

    let csvd= _.go(
        _.range(0,100),
        _.filter(el=>el%10!==0 && el>10),
        //_.map(el=>console.log(cellist[el].firstElementChild.firstElementChild))
        _.map(el=>datas[Math.floor(el/10)-1].push(cellist[el].firstElementChild.firstElementChild.value))
    )

   
    console.log(csvd,datas)


    let f=_.go(
        datas,
        _.map(el=>el.join(","))
        
        
        
    )
    
    
    f=f.join("\n")

    let csvContent="data:text/csv;charset=utf-8,"+f

        console.log(csvContent)
    var encodedUri = encodeURI(csvContent); 
    window.open(encodedUri);

    
    

})





