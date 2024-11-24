
	!function () {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
 
    function e(n) {
        return document.getElementsByTagName(n)
    }
 
    function t() {
        var t = e("script"), o = t.length, i = t[o - 1];
        return {l: o, z: n(i, "zIndex", -1), o: n(i, "opacity", 1), c: n(i, "color", "255,255,255"), n: n(i, "count", 500)}
    }
 
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
 
    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function (i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e], null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
        }), x(i)
    }
 
    var a, c, u, m = document.createElement("canvas"), d = t(), l = "c_n" + d.l, r = m.getContext("2d"),
        x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (n) {
            window.setTimeout(n, 1e3 / 45)
        }, w = Math.random, y = {x: null, y: null, max: 2e4};
    m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.onresize = o, window.onmousemove = function (n) {
        n = n || window.event, y.x = n.clientX, y.y = n.clientY
    }, window.onmouseout = function () {
        y.x = null, y.y = null
    };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a, g = w() * c, v = 2 * w() - 1, p = 2 * w() - 1;
        s.push({x: h, y: g, xa: v, ya: p, max: 6e3})
    }
    u = s.concat([y]), setTimeout(function () {
        i()
    }, 100)
}();




    var selfLogin = false;
    var follow = $('#profile_block').find('#p_b_follow');
    var block = follow.length >= 1 ? follow[0] : "";
    var followText = (block != null && block != undefined) ? block.innerHTML : "";
    if(followText == "") selfLogin = true;
 
    var pageInfo = '\r\n---------------------\r\n著作权归作者所有。\r\n'
        + '商业转载请联系作者获得授权，非商业转载请注明出处。\r\n'
        + '作者：hory-ai\r\n源地址：' + document.location.href
        + '\r\n来源：hory-ai.com\r\n© 版权声明：本文为博主原创文章，转载请附上博文链接！';
 
    document.addEventListener('copy', function (ev) {
        var targetHTML = $.trim($(ev.target).html());
        // console.log("targetHTML:" + targetHTML)
        if (targetHTML == "") return;
        if (!(targetHTML.startsWith('<table class="hljs-ln"') && targetHTML.endsWith('</table>')) || !selfLogin)  // isLogined
        {
            var selected = window.getSelection();
            var selectedText = selected.toString();  
            let copyRightStr = (selectedText + pageInfo).replace(/\n/g, '\r\n'); // Solve the line breaks conversion issue
 
            ev.clipboardData.setData('text/plain', `${copyRightStr}`);
            ev.preventDefault();
        }
    });




        (function (w, d) {
            var domDiv = d.createElement('div');

            domDiv.style.cssText = 'position: fixed; top: 0; left: 0; width: 0; height: 3px;' +
                'box-shadow: 0 0 3px #999; background: -webkit-linear-gradient(left, red,orange,yellow,green,blue,indigo,violet );z-index: 999999;-webkit-transition:width .3s linear;'

            d.body.appendChild(domDiv);

            var domH = w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight;

            w.addEventListener('scroll', function () {
                var divsw = domDiv.style.width = Math.round(pageYOffset / (d.body.offsetHeight - domH) *
                    100) + '%';
            }, false);
        })(window, document);
  