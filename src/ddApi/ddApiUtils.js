import {Toast} from 'mint-ui';

let loadingToast
  , functionDeal = (func, res) => {
  if (func) {
    func(res);
  }
};

export const ddAlert = (message, title, buttonName, successCallback, failCallback) => {
  if (isInDD) {
    window.dd.device.notification.alert({
      message: message,
      title: title, // 可传空
      buttonName: buttonName || '确定',
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    alert(message);
  }
};

export const ddConfirm = (message, title, buttonLabels, successCallback, failCallback) => {
  if (isInDD) {
    dd.device.notification.confirm({
      message: message,
      title: title,
      buttonLabels: buttonLabels && buttonLabels.length !== 0 ? buttonLabels : ['否', '是'],
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    confirm(message) ? successCallback({buttonIndex: 1}) : failCallback({buttonIndex: 0});
  }
};

export const ddPrompt = (title, message, text, buttonLabels, successCallback, failCallback) => {
  if (isInDD) {
    dd.device.notification.prompt({
      title: title || '提示',
      message: message,
      defaultText: text,
      buttonLabels: buttonLabels && buttonLabels.length !== 0 ? buttonLabels : ['否', '是'],
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    let value = prompt(message, text);
    if (value !== null && value !== '') {
      successCallback({value: value, buttonIndex: 1});
    } else {
      failCallback({value: value, buttonIndex: 0});
    }
  }
};

export const ddSetTitle = (title, successCallback, failCallback) => {
  if (isInDD) {
    window.dd.biz.navigation.setTitle({
      title: title,
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    document.title = title;
  }
};

export const ddToast = (icon, msg, duration, delay, successCallback, failCallback) => {
  if (isInDD) {
    window.dd.device.notification.toast({
      icon: icon || '', //success和error，默认为空
      text: msg,
      duration: duration || 2,
      delay: delay || 0,
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    Toast({
      message: msg,
      duration: (duration || 2) * 1000
    });
  }
};

export const ddShowPreloader = (msg, icon, successCallback, failCallback) => {
  if (isInDD) {
    dd.device.notification.showPreloader({
      text: msg || '加载中',
      showIcon: icon,
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    loadingToast = Toast({
      message: msg,
      duration: -1
    });
  }
};

export const ddHidePreloader = (successCallback, failCallback) => {
  if (isInDD) {
    dd.device.notification.hidePreloader({
      onSuccess: (result) => {
        return functionDeal(successCallback, result);
      },
      onFail: (err) => {
        return functionDeal(failCallback, err);
      }
    });
  } else {
    loadingToast.close();
  }
};

export const ddSetRight = (text, showbj, successCallback, failCallback) => {
  if (isInDD) {
    dd.biz.navigation.setRight({
      show: showbj,//控制按钮显示， true 显示， false 隐藏， 默认true
      control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
      text: text,//控制显示文本，空字符串表示显示默认文本
      onSuccess: function (result) {
        return functionDeal(successCallback, result);
      },
      onFail: function (err) {
        return functionDeal(failCallback, err);
      }
    });
  }
};

export const ddBounceDisable = () => {
  if (isInDD) {
    dd.ready(() => {
      dd.ui.webViewBounce.disable();
    });
  }
};

// export const ddClose = (successCallback, failCallback) => {
//   window.dd.ready(() => {
//     window.dd.biz.navigation.close({
//       onSuccess: (result) => {
//         successCallback(result);
//       },
//       onFail: (err) => {
//         failCallback(err);
//       }
//     });
//   });
// };
//
// export const ddOpenLink = (url, corpId) => {
//   if (corpId && typeof corpId === 'string') {
//     if (url && url.indexOf('$CORPID$') !== -1) {
//       url = url.replace(/\$CORPID\$/, corpId);
//     }
//   }
//   if (isInDD) {
//     window.dd.ready(() => {
//       window.dd.biz.util.openLink({
//         url: url,
//         onSuccess: () => {
//           if (typeof corpId === 'function') {
//             corpId();
//           }
//         },
//         onFail: () => {
//           if (typeof corpId === 'function') {
//             corpId();
//           }
//         }
//       });
//     });
//
//   } else {
//     window.open(url);
//   }
// };
//
// /**
//  * [back 返回-安卓]
//  */
// export const ddAndroidBack = () => {
//   window.dd.ready(() => {
//     document.addEventListener('backbutton', (e) => {
//       // 在这里处理你的业务逻辑
//       //e.preventDefault(); //backbutton事件的默认行为是回退历史记录，如果你想阻止默认的回退行为，那么可以通过preventDefault()实现
//     });
//   });
// };
