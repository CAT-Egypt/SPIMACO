var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

var secBtns = "#secBtns";
var full_prog = "#full_prog";
var summary_agenda = "#summary_agenda";
var logo = ".logo";
var page0 = "#page0";
var page1 = "#page1";
var full_progBtn = "#full_progBtn"
var full_agendaBtn = "#full_agendaBtn"
var summary_agendaBtn = "#summary_agendaBtn"
var priority_agendaBtn = "#priority_agendaBtn"
var SecFullAgenda = "#SecFullAgenda";
var SecPriorityAgenda = "#SecPriorityAgenda";
var SecSummaryAgenda = "#SecSummaryAgenda";
var closePDF = "#closePDF";
var wrapper = "#wrapper";
var backBtn = "#backBtn";

if (isDevice) {
	 interactionUp = "touchend";
	 interactionDown = "touchstart";
     interactionOver = interactionDown;
     interactionMove = 'touchmove';
        } else {
     interactionUp = "click";
     interactionDown = "mousedown";
     interactionOver = "mouseover";
     interactionMove = 'mousemove';
		};

$(full_progBtn).on(interactionDown,function(){
	$(full_progBtn).css({"transform":"scale(.7)","-webkit-transition-duration":"1s"});
});

$(full_progBtn).on(interactionUp,function(){
	$(full_progBtn).css({"transform":"scale(1)","-webkit-transition-duration":"1s"});
});

$(full_agendaBtn).on(interactionDown,function(){
	$(full_agendaBtn).css({"transform":"scale(.7)","-webkit-transition-duration":"1s"});
});

$(full_agendaBtn).on(interactionUp,function(){
	$(full_agendaBtn).css({"transform":"scale(1)","-webkit-transition-duration":"1s"});
	fullAgenda();
//	$(SecFullAgenda).show(100).animate({left:0},600);
//	var pdf = PDFReader.open('/pdf/FullAgenda.pdf', options, success, error);
//	$(SecFullAgenda).html(pdf);
});

$(summary_agendaBtn).on(interactionDown,function(){
	$(summary_agendaBtn).css({"transform":"scale(.7)","-webkit-transition-duration":"1s"});
});

$(summary_agendaBtn).on(interactionUp,function(){
	$(summary_agendaBtn).css({"transform":"scale(1)","-webkit-transition-duration":"1s"});
	 SecSummaryAgendaF();
});

$(priority_agendaBtn).on(interactionDown,function(){
	$(priority_agendaBtn).css({"transform":"scale(.7)","-webkit-transition-duration":"1s"});
});

$(priority_agendaBtn).on(interactionUp,function(){
	$(priority_agendaBtn).css({"transform":"scale(1)","-webkit-transition-duration":"1s"});
	SecPriorityAgendaF();
});

$(logo).on(interactionUp, plyToggle);
$(full_progBtn).delay(500).bind(interactionUp,plyToggle);
$(backBtn).delay(500).bind(interactionUp,plyToggle);

function plyToggle(){
	var leftPage0 = parseInt($(page0).css("left"));
	if(leftPage0 ==0){
    	$(page0).animate({left:-720},500).hide(setTimeout(700));
		$(page1).animate({left:0},500).show();
  
	}else{
	$(page0).show().animate({left:0},500);
	$(page1).animate({left:720},500).hide(setTimeout(700));
	}
}

function fullAgenda(){
	var leftAgenda = parseInt($(SecFullAgenda).css("left"));
	if(leftAgenda ==0){
    	$(SecFullAgenda).animate({left:1200},700).hide(setTimeout(700));
	}else{
	$(SecFullAgenda).show(100).animate({left:0},600);
	}
}

function SecSummaryAgendaF(){
	var leftAgenda = parseInt($(SecSummaryAgenda).css("left"));
	if(leftAgenda ==0){
    	$(SecSummaryAgenda).animate({left:1200},700).hide(setTimeout(700));
	}else{
	$(SecSummaryAgenda).show(100).animate({left:0},600);
	}
}

function SecPriorityAgendaF(){
	var leftAgenda = parseInt($(SecPriorityAgenda).css("left"));
	if(leftAgenda ==0){
    	$(SecPriorityAgenda).animate({left:1200},700).hide(setTimeout(700));
	}else{
	$(SecPriorityAgenda).show(100).animate({left:0},600);
	}
}


