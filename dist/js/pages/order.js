


$(function() {

	// 显示隐藏内容
	$('.j-show').click(function() {
		var flag = $(this).parent().next('.j-showContent');
		if(flag.length > 0) {
			flag.toggleClass('none');
		} else {
			$(this).next('.j-showContent').toggleClass('none');
		}
	});

    // 开始时间与结束时间
    $('.j-startTime').datetimepicker({
        dateFormat: 'yy-mm-dd',
        timeFormat: 'HH:mm:ss',
        onClose: function( selectedDate ) {
        $( ".j-endTime" ).datepicker( "option", "minDate", selectedDate );
      }
    });

    $('.j-endTime').datetimepicker({
        dateFormat: 'yy-mm-dd',
        timeFormat: 'HH:mm:ss',
        onClose: function( selectedDate ) {
        $( ".j-startTime" ).datepicker( "option", "maxDate", selectedDate );
      }
    });

});