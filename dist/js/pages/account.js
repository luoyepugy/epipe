// (function() {
  var check, checkAccount, confirmPwd;

  checkAccount = function(i, name) {
    var v;
    v = i.validity;
    if (v.valueMissing) {
      if (name === 'email') {
        return i.setCustomValidity('请输入邮箱！');
      } else {
        return i.setCustomValidity('请输入密码！');
      }
    } else if (v.typeMismatch || v.patternMismatch) {
      if (name === 'email') {
        return i.setCustomValidity('请输入正确的邮箱格式！');
      } else {
        return i.setCustomValidity('请输入至少6位密码！');
      }
    } else {
      i.setCustomValidity('');
    }
  };

  confirmPwd = function(i) {
    var conPwd, pwd, v;
    v = i.validity;
    pwd = document.getElementById("pwd");
    conPwd = document.getElementById("conmPwd");
    if (v.valueMissing) {
      return i.setCustomValidity('请再次输入密码!');
    } else if (pwd.value !== conPwd.value) {
      return i.setCustomValidity('两次密码输入不一致!');
    } else {
      i.setCustomValidity('');
    }
  };

  check = function() {
    var conPwd, email, pwd;
    email = document.getElementById("email");
    pwd = document.getElementById("pwd");
    conPwd = document.getElementById("conmPwd");
    if (conPwd) {
      confirmPwd;
    }
    checkAccount(email, 'email');
    checkAccount(pwd, 'pwd');
  };

// }).call(this);
