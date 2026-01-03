let jsCorrect = 0
let jquerryCorrect = 0
$(".span4").click(function(){
    $(".section_first_item_second").text("universal function, which is the main entry point to the library")
})
$(".span5").click(function(){
    $(".section_first_item_second").text("The selector to which the action will be applied")
})
$(".span6").click(function(){
    $(".section_first_item_second").text("The action itself")
})
$(".method1").click(function(){
    $(".section_second_item_second_img").hide(500)
})
$(".method2").click(function(){
    $(".section_second_item_second_img").show(500)
})
$(".method3").click(function(){
    $(".section_second_item_second_img").toggle(500)
})
$(".method4").click(function(){
    $(".section_second_item_second_img").slideDown(500)
})
$(".method5").click(function(){
    $(".section_second_item_second_img").slideUp(500)
})
$(".method6").click(function(){
    $(".section_second_item_second_img").slideToggle(500)
})
$(".method7").click(function(){
    $(".section_second_item_second_img").fadeIn(500)
})
$(".method8").click(function(){
    $(".section_second_item_second_img").fadeOut(500)
})
$(".method9").click(function(){
    $(".section_second_item_second_img").fadeToggle(500)
})
$(".animations_left_button").click(function animate1(){
    $(".car_img").animate({left:"-330px"}, 1000)
    .animate({left:"260px"}, 1000, animate1)
})
$(".animations_right_button").click(function animate1(){
    $(".sun_img").animate({top:"0px"}, 1000)
})
    let blocks = JSON.parse(localStorage.getItem("blocks")) || []
    $(".aside_item_right").empty()
    blocks.forEach(item => {
        $(".aside_item_right").append(`<div class='aside_item_first'><h5>${item.a}</h5><p>${item.b}</p></div>`)
    });
$(".add_button").click(function(){
    let a = $(".methodName").val().trim()
    let b = $(".description").val().trim()
    blocks.push({a,b})
    localStorage.setItem("blocks", JSON.stringify(blocks))
    let block = $("<div class='aside_item_first'><h5>"+a+"</h5><p>"+b+"</div>")
    $(".aside_item_right").append(block)

})
$(".completed").hide()
$(".pazle_image").sortable({
    update: function(){
        let order = $(this).sortable("toArray")
        let complete = ["second_pazzle","third_pazzle","first_pazzle","fourth_pazzle"]
        if(order.join()==complete.join()){
            $(".pazle_image").css("opacity","30%")
            $(".completed").show()
        }
    }
})
$(".reset_button").click(function(){
location.reload()
})
$("li").draggable({
    revert:"invalid"
})
$("#JavaScriptBox").droppable({
    accept:".jas",
    over:function(){
        $(".jsBox").css("border","2px dotted blue")
    },
    out:function(){
                $(".jsBox").css("border","none")
    },
    drop:function(event, ui){
        ui.draggable.draggable("disable")

if(ui.draggable.hasClass("jas")){
    jsCorrect++
}
if(jsCorrect === 5){
    alert("GOOD!")
}

    }
})
$("#jqueryBox").droppable({
    accept:".jquer",
    over:function(){
        $(".jquerybox").css("border","2px dotted blue")
    },
    out:function(){
                $(".jquerybox").css("border","none")
    },
    drop:function(event, ui){
        ui.draggable.draggable("disable")

if(ui.draggable.hasClass("jquer")){
    jquerryCorrect++
}                       
if(jquerryCorrect === 6){
    alert("Good!")
}

    }
})
$(".accordion").accordion({
    collapsible:true,
    active:0,
      icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
})
$(".accordeon_img").click(
    function(){
        $(".accordeon_img").css("width","20%")
        $(this).css("width","40%")  
    }
)
$(".switcher").click(function(){
    $('*').toggleClass("active")
})