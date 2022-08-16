    // counter_ani(클래스명)
    // first-update: 2020-01-02
    // Author CSSLICK

    function counter_ani(el) {
      var count_el = document.querySelectorAll(el);
      var count = 0;
      var c = [];
      var timer = [];
      var duration = 25;

      for(var i = 0; i < count_el.length; i++) {
        c.push(0);
        timer.push('');
      }
      console.log(c[0], timer)

      function counter(i){
        timer[i] = setInterval(function () {
          if (c[i] < count_el[i].getAttribute('data-num')) {
            c[i]++;
          } else { clearInterval(timer[i]); }
          count_el[i].innerHTML = c[i];
        }, duration);
      }

      for (var _i = 0; _i < count_el.length; _i++) {
        counter(_i)
      }
    } //  end fun

