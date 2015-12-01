
$(function() {

	var lenProduct = 0;										// 计算商品总个数
	var lenShop = 0;										// 计算店铺总个数
	var lenShopTotal = $('.j-choiceShop').length;			// 店铺总个数，固定值
	var totalNum = 0;										// 统计商品总件数
	var totalPrice = Number($('.j-totalPrice').text());		// 统计商品总金额

	// 全选按钮点击事件
	$('.j-choiceAll').click(function() {
		var flag = $(this).prop('checked');
		// 执行店铺按钮点击事件
		$(this).closest('.j-cart').find('.j-choiceShop').each(function() {
			if($(this).prop('checked') == !flag) {
				$(this).trigger('click');
			}
		});
		$('.j-choiceAll').prop('checked', flag);			// 所有全选按钮统一标记

	});

	// 选择店铺按钮点击事件
	$('.j-choiceShop').click(function() {
		var flag = $(this).prop('checked');
		// 执行商品按钮点击事件
		$(this).closest('.j-shop').find('.j-choiceProduct').each(function() {
			if($(this).prop('checked') == !flag) {
				$(this).trigger('click');
			}
		});
	});

	// 选择商品按钮点击事件
	$('.j-choiceProduct').click(function() {
		var flag = $(this).prop('checked');													// 标记当前选中状态
		var len = $(this).closest('.j-shop').find('.j-choiceProduct').length;				// 当前店铺商品总个数
		var price = Number($(this).closest('.content-detail').find('.j-price').text());		// 当前商品总金额

		// 判断商品选择
		if(flag) {
			// 当前商品样式变化
			$('.j-settle').addClass('btn-settleOn');
			$(this).closest('.content-detail').addClass('highlight');
			// 当前店铺商品+1
			lenProduct += 1;
			// 商品总件数+1
			totalNum += 1;
			// 统计商品总金额
			totalPrice += price;
			$('.j-totalPrice').text(totalPrice.toFixed(2));
		} else {
			// 当前商品样式变化
			$(this).closest('.content-detail').removeClass('highlight');
			// 当商品满时，且取消其中一个商品时，店铺数量-1
			if(lenProduct == 0 && lenShop > 0) {
				lenShop -= 1;
				lenProduct = len;
			};
			// 当前店铺商品-1
			lenProduct -= 1;
			// 当商品满时，取消其中一个商品，且直到店铺数量为0时，不结算
			if(lenProduct == 0 && lenShop <= 0) {
				$('.j-settle').removeClass('btn-settleOn');
			};
			// 商品总件数-1
			totalNum -= 1;
			// 统计商品总金额
			totalPrice -= price;
			$('.j-totalPrice').text(totalPrice.toFixed(2));
		};
		
		// 判断商品长度，循环到与当前店铺商品总个数相同时，店铺数量+1，商品个数归零
		if(len == lenProduct && len > 0) {
			$(this).closest('.j-shop').find('.j-choiceShop').prop('checked', true);
			lenProduct = 0;
			lenShop += 1;
		} else {
			$(this).closest('.j-shop').find('.j-choiceShop').prop('checked', false);
		};

		// 判断店铺长度，循环到与店铺总个数相同时，全选按钮同步
		if(lenShop == lenShopTotal) {
			$('.j-choiceAll').prop('checked', true);
		} else {
			$('.j-choiceAll').prop('checked', false);
		};

		// console.log(lenProduct);
		// console.log(lenShop);
		// console.log(lenShopTotal);

		// 总件数
		$('.j-totalNum').text(totalNum);
	});


	// 数量增减
	$('.j-add').click(function() {
		var num = Number($(this).prev('input').val()) + 1;					// 当前商品数量
		var price = $(this).parent().prev().text();							// 当前商品价格
		$(this).prev('input').attr('value', num);
		$(this).parent().next().text((price * num).toFixed(2));				// 计算变化后的总价格
		// 判断当前商品是否为选中状态，若是，则总金额变化	
		var flag = $(this).closest('.content-detail').find('.j-choiceProduct').prop('checked');
		totalPrice += Number(price);
		if(flag) {
			$('.j-totalPrice').text(totalPrice.toFixed(2));
		}
	});
	$('.j-minus').click(function() {
		var num = Number($(this).next('input').val());						// 当前商品数量
		var price = $(this).parent().prev().text();							// 当前商品价格
		// 数量必须大于1，输入框值才变化
		if(num > 1) {
			$(this).next('input').attr('value', num - 1);
			$(this).parent().next().text((price * (num - 1)).toFixed(2));	// 计算变化后的总价格
		} else {
			return;
		}
		// 判断当前商品是否为选中状态，若是，则总金额变化
		var flag = $(this).closest('.content-detail').find('.j-choiceProduct').prop('checked');
		totalPrice -= Number(price);
		if(flag) {
			$('.j-totalPrice').text(totalPrice.toFixed(2));
		}
	});

});