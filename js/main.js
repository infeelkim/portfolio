// 변수생성하여 .btnCall 담기
const btnCall = document.querySelector(".btnCall")
const menuMo = document.querySelector(".menuMo")

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on")
    menuMo.classList.toggle("on")
}

const outline = document.querySelector("#outline");
const hoverBox = document.querySelectorAll("#outline li");
const _top = outline.querySelector(".top");
const _right = outline.querySelector(".right");
const _left = outline.querySelector(".left");
const _bottom = outline.querySelector(".bottom");
const _inner = outline.querySelector(".inner");
const speed = 200;
console.log(hoverBox);

for(let el of hoverBox){
    el.addEventListener("mouseenter", ()=>{
        
        console.log("in");

        new Anime(_top,{
            prop: "width",
            value: "100%",
            duration: speed,
            callback:()=>{
                new Anime(_right,{
                    prop: "height",
                    value: "100%",
                    duration: speed,
                    callback:()=>{
                        new Anime(_bottom,{
                            prop: "width",
                            value: "100%",
                            duration: speed,
                            callback:()=>{
                                new Anime(_left,{
                                    prop: "height",
                                    value: "100%",
                                    duration: speed,
                                })
                            }
                        })
                    }
                })
            }
        })
    });



    el.addEventListener("mouseleave", ()=>{

        console.log("out");

        new Anime(_top,{
            prop:"width", 
            value:0, 
            duration:speed
        });
        new Anime(_right,{
            prop:"height", 
            value:0, 
            duration:speed
        })
        new Anime(_bottom,{
            prop:"width", 
            value:0, 
            duration:speed
        })
        new Anime(_left,{
            prop:"height", 
            value:0, 
            duration:speed,
        })
    }) 
}
