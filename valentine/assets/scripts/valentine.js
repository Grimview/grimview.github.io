/* First Note */
var t = '<span class'+                              '="t">░</span>', r = 
'<span class="r">▓</span>',                          b = '<span class="b">█'+
'</span>', w = '<span class="w">'+                '▒</span>', n = '<br>', heart = [ t,     
t, t, t, t, t, t, t, t, t, t, t, t, t,          t, n, t, t, t, b, b, b, t, t, t, b, b, b, t, 
t, t, n, t, t, b, r, r, r, b, t, b, r, r, r,       b, t, t, n, t,  b, r, w, w, r, r, b, r, r, r, 
r, r, b, t, n, t, b, r, w, r, r, r, r, r, r, r,   r, r, b, t, n, t, b, r, r, r, r, r, r, r, r, r, r,
r, b, t, n, t, t, b, r, r, r, r, r, r, r, r, r, b, t, t, n, t, t, t, b, r, r, r, r, r, r, r, b, t, t,  
t, n, t, t, t, t, b, r, r, r, r, r, b, t, t, t, t, n, t, t, t, t, t, b, r, r, r, b, t, t, t, t, t, n,
t, t, t, t, t, t, b, r, b, t, t, t, t, t, t, n, t, t, t, t, t, t, t, b, t, t, t, t, t, t, t, n, t, 
t, t, t, t, t, t, t, t, t, t, t, t, t, t, n ], space = function(n, c){ var a = [], i = 0; while
( i < n ){a.push(c);++i;} return a.join(''); }, card = function(name){ var e = name.length 
  % 2, sp = (13 - name.length) / 2; return space(15, t) + n + space(6, w) + ' I ' + space(6, w) + n + heart.join('') + space(3, w) 
   + 'YOU, ' + name.
   toUpperCase() + "!" + space(3, w) + n + space(15, t) + n; }, out = document.getElementById
     ('card'), inp = document.getElementById('name'), plot = function(){out.
          innerHTML =  card(inp.value)}; inp.addEventListener('change',
                 plot); out.style['font-family'] = 'monospace';
                     out.style['text-align']  = 'center';
                         out.style['line-height'] = 
                            '22px'; out.style
                              ['font-size'] 
                                = '25px'; 
                                 plot
                                  ()
                                   ;
/* End First Note */

























/* Start Note */

document.getElementById("note").innerHTML =

  "For my"+   " wonde"+
 "rful Sierra, <br>Ar" +
"guments are red, funct"+
"ions are blue.<br>If l"+
"ove is a variable, I'l"+
    "l name it you.";
      // The END
        // <3

/* End Note */