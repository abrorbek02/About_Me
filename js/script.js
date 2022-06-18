//   typing animation

var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Videomaker","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


document.onkeydown=function(b) {
    if(b.ctrlKey && b.keyCode =='U'.charCodeAt(0) ) {
        return false;
    }
    if(b.keyCode ==123) {
        return false;
    }
    if(b.ctrlKey && b.shiftKey && b.keyCode=='I'.charCodeAt(0)){
        return false;
    }
}
window.oncontextmenu=function(){
    alert("Code Zashitalangan")
    return false;
}