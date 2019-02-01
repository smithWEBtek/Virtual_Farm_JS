
// $(function () {
// 	$(".js-next").on("click", function () {
// 		var nextId = parseInt($(".js-next").attr("data-id")) + 1;
// 		console.log(nextId)
// 		$.get("/farms/" + nextId + ".json", function (data) {
// 			var farm = data;
// 			console.log(farm["name"]);
// 			console.log(farm["description"]);
// 			console.log(farm["id"]);
// 			$(".farmName").text(farm["name"]);
// 			$(".farmDescription").text(farm["description"]);
// 			// re-set the id to current on the link
// 			$(".js-next").attr("data-id", farm["id"]);
// 		});
// 	});
// });