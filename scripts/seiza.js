'use strict';
module.exports = (robot) => {
  robot.hear(/seiza> (.+)/i, (msg) => {
    const user_id = msg.message.user.id;
    const birthday = msg.match[1].trim();
    function your_seiza(birthday) {
      var seiza_list = 
        ['やぎ座','みずがめ座','うお座','おひつじ座','おうし座','ふたご座',
         'かに座','しし座','おとめ座','てんびん座','さそり座','いて座','やぎ座'];
      var slash = [20,19,21,20,21,22,23,23,23,24,23,22];
      let a,m,d,seiza='null';
      a = birthday.split("/");
      m = a[0];
      d = a[1];
      for(var i=1; i<=12; i++) {
        if(m == i) seiza = d<slash[i-1] ? seiza_list[i-1] : seiza_list[i];
      }
      return seiza;
    }
    msg.send(`<@${user_id}>の星座は${your_seiza(birthday)}だよ！`);
  });
};