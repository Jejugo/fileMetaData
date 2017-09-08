$(document).ready(function(){
	$("#pathValue").html("o path value é <%=path%>");

	$('form').submit(function(){
		$("#pathValue").html("o path value é <%=path%>");
		//$("img").attr('src', '<%=path%>');
	});
});