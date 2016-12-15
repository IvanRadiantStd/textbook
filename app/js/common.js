$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".left-sidebar ul li .course").click(function(){
		$(this).toggleClass("active");
		$(this).parent().find(".subject").slideToggle();
	});

	$(".left-sidebar ul li .subject h3").click(function(){
		$(this).parent().parent().parent().parent().toggleClass("active");
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	

	MathJax.Hub.Config({
	  config: ["MMLorHTML.js"],
	  jax: ["input/TeX","input/MathML","input/AsciiMath","output/HTML-CSS","output/NativeMML", "output/PreviewHTML"],
	  extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js", "fast-preview.js", "AssistiveMML.js", "[Contrib]/a11y/accessibility-menu.js"],
	  TeX: {
	    extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
	  }
	});



	


});
