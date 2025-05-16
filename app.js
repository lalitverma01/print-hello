const btn = $('#button');
$(window).on("scroll", () => btn.toggleClass("show", $(window).scrollTop() > 300));
btn.on("click", (e) => { e.preventDefault(); $("html, body").animate({ scrollTop: 0 }, 300); });