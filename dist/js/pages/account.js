

$(function() {

    $.validator.setDefaults({
        onkeyup: false,
        // wrapper: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        },
        submitHandler:function(form){
            form.submit();
        }
    });

    // 登录
    $(".j-login").validate({
        rules: {
            'email': {
              required: true,
              email: true
            },
            'password': {
              required: true,
              minlength: 6
            }
        },
        messages: {
            'email': {
                required: '请输入邮箱！',
                email: '请输入正确的邮箱格式！'
            },
            'password': {
                required: '请输入密码！',
                minlength: '请输入至少6位密码！'
            }
        } 
    });

    // 注册
    $(".j-register").validate({
        rules: {
            'email': {
              required: true,
              email: true
            },
            'password': {
              required: true,
              minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            'email': {
                required: '请输入邮箱！',
                email: '请输入正确的邮箱格式！'
            },
            'password': {
                required: '请输入密码！',
                minlength: '请输入至少6位密码！'
            },
            confirmPassword: {
                required: '请再次输入密码！',
                equalTo: "两次密码输入不一致！"
            }
        } 
    });

     // 找回密码
    $(".j-findPwd").validate({
        rules: {
            'email': {
              required: true,
              email: true
            }
        },
        messages: {
            'email': {
                required: '请输入邮箱！',
                email: '请输入正确的邮箱格式！'
            }
        },
        errorLabelContainer: '#errorFindPwd'
    });


    // ie8的placeholder属性支持
    // if($.browser.msie && $.browser.version <=9.0){
    //     $("[placeholder]").focus(function(){
    //         if($(this).val()==$(this).attr("placeholder")) $(this).val("");
    //     }).blur(function(){
    //         if($(this).val()=="") $(this).val($(this).attr("placeholder"));
    //     }).blur();

    //     $("[placeholder]").parents("form").submit(function() {
    //         $(this).find('[placeholder]').each(function() {
    //             if ($(this).val() == $(this).attr("placeholder")) {
    //                 $(this).val("");
    //             }
    //         })
    //     });
    // }

});

  // var check, checkAccount, confirmPwd;

  // checkAccount = function(i, name) {
  //   var v;
  //   v = i.validity;
  //   if (v.valueMissing) {
  //     if (name === 'email') {
  //       return i.setCustomValidity('请输入邮箱！');
  //     } else {
  //       return i.setCustomValidity('请输入密码！');
  //     }
  //   } else if (v.typeMismatch || v.patternMismatch) {
  //     if (name === 'email') {
  //       return i.setCustomValidity('请输入正确的邮箱格式！');
  //     } else {
  //       return i.setCustomValidity('请输入至少6位密码！');
  //     }
  //   } else {
  //     i.setCustomValidity('');
  //   }
  // };

  // confirmPwd = function(i) {
  //   var conPwd, pwd, v;
  //   v = i.validity;
  //   pwd = document.getElementById("pwd");
  //   conPwd = document.getElementById("conmPwd");
  //   if (v.valueMissing) {
  //     return i.setCustomValidity('请再次输入密码!');
  //   } else if (pwd.value !== conPwd.value) {
  //     return i.setCustomValidity('两次密码输入不一致!');
  //   } else {
  //     i.setCustomValidity('');
  //   }
  // };

  // check = function() {
  //   var conPwd, email, pwd;
  //   email = document.getElementById("email");
  //   pwd = document.getElementById("pwd");
  //   conPwd = document.getElementById("conmPwd");
  //   if (conPwd) {
  //     confirmPwd;
  //   }
  //   checkAccount(email, 'email');
  //   checkAccount(pwd, 'pwd');
  // };


