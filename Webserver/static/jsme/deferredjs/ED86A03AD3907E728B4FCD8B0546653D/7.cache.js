$wnd.jsme.runAsyncCallback7('var J8="!a",K8=\'" fill="\',L8="M",M8="r";function N8(a){var b;b=a.N.c*O8(a.J);a.U=0.06*b;a.P=0.15*b;a.O=0.38*b;a.S=0.47*b;a.T=Sr(0.6*b*a.H+0.5);a.R=0.12*b;a.V=0.4*b;a.B=0.5*b+0.5}\nfunction P8(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new Q8;R8(a.J,Iq(a.J,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);S8(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;T8(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;T8(a,e);S8(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;T8(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;T8(a,e);S8(a,a.M)}\nfunction U8(a,b,c,d){if(R8(a.J,Iq(a.J,c,d)))S8(a,-3),T8(a,b),S8(a,a.M);else if(a.r[c]!=a.r[d]){var e,f;e=new Q8;f=new Q8;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;V8(a,e)&&(S8(a,a.r[c]),T8(a,e));V8(a,f)&&(S8(a,a.r[d]),T8(a,f));S8(a,a.M)}else 0!=a.r[c]?(S8(a,a.r[c]),T8(a,b),S8(a,a.M)):T8(a,b)}\nfunction W8(a,b){var c;for(c=0;c<a.W.c;++c)a.w=X8(a.w,yo(a.W,c));var d,e,f,g,h;d=C(oo,en,-1,a.J.o,2);for(c=0;c<a.J.p;++c)0!=(a.J.C[c]&131072)&&(d[D(a.J,0,c)]=!0,d[D(a.J,1,c)]=!0);f=new GL;for(c=0;c<a.J.o;++c)e=0!=(a.J.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=Y8(a.N,Ko(a.J,c)),h=Z8(a.N,Lo(a.J,c)),TK(f,g-e,h-e,2*e,2*e),a.w=X8(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction $8(a,b){var c,d;if(0!=(a.E&128))return a.r[b];d=a9(a,b);if(-1==d){c=a.J;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=a9(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction a9(a,b){var c,d,e;d=e=-1;if(0!=(a.E&128))return-1;0!=(a.J.s[b]&134217728)&&(e=iq(a.J,b),d=jq(a.J,b));c=Jp(a.J,b);-1!=c&&(e=(a.J.C[c]&3072)>>10,d=kq(a.J,c));-1!=e&&0!=e&&(e|=d<<8);return e}function b9(a,b){var c;if(0==uo(a.J,b))return!1;for(c=0;c<uo(a.J,b);++c)if(!R8(a.J,ro(a.J,b,c)))return!1;return!0}function c9(a){var b;a.s=C(oo,en,-1,a.J.o,2);for(b=0;b<a.J.p;++b)a.s[D(a.J,0,b)]=!0,a.s[D(a.J,1,b)]=!0}\nfunction d9(a,b,c,d,e){var f,g,h,j,l,n,q;n=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=So(a.J,b,c);for(j=0;j<a.J.f[b];++j)g=ro(a.J,b,j),h=q,D(a.J,0,g)==b?l=D(a.J,1,g):l=D(a.J,0,g),l!=c&&(g=So(a.J,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(n=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.P*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(n=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.P*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return n}function e9(a,b,c,d){0==b?(0>c?d.a=a.P:d.a=-a.P,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.P*Math.sin(c)),d.b=a.P*Math.cos(c))}\nfunction f9(a,b,c,d){var e,f,g,h,j,l,n,q;e=new Q8;h=new Q8;l=new EL;j=new EL;f=D(a.J,0,c);g=D(a.J,1,c);d&&(n=b.a,b.a=b.b,b.b=n,n=b.c,b.c=b.d,b.d=n,n=f,f=g,g=n);if(V8(a,b))if(Oo(a.J,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-g9(a,c):g9(a,c);0==d&&(d=1);e9(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,d9(a,f,g,1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,d9(a,f,g,-1,j)||1<a.J.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.J.E[c]&&\nh9(e,h);V8(a,e)&&U8(a,e,f,g);64==a.J.E[c]?V8(a,h)&&P8(a,h,f,g):V8(a,h)&&U8(a,h,f,g)}else{e9(a,b.b-b.a,b.d-b.c,l);n=l.a/2;q=l.b/2;d=!1;e.a=b.a+n;e.c=b.c+q;e.b=b.b+n;e.d=b.d+q;if(1<a.J.f[f])if(d9(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new i9(e.a,e.c);h.a=b.a-n;h.c=b.c-q;h.b=b.b-n;h.d=b.d-q;if(1<a.J.f[f])if(d9(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.J.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new i9(h.a,h.c),d=!0;26==a.J.E[c]&&h9(e,h);64==\na.J.E[c]?d?(P8(a,e,f,g),U8(a,h,f,g)):(U8(a,e,f,g),P8(a,h,f,g)):(U8(a,e,f,g),U8(a,h,f,g))}}\nfunction j9(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;a.I||(r=Z8(a.N,Lo(a.J,b)),r=\'<circle id="\'+(null!=a.k?a.k:mk+k9)+":Atom:"+b+\'" class="event" cx="\'+Sr(100*Y8(a.N,Ko(a.J,b)))/100+Ea+Sr(100*r)/100+\'" r="8" fill-opacity="0"/>\',rq(a.b,r));h=null;0!=a.J.q[b]&&(r=1==yr(a.J.q[b])?m:m+yr(a.J.q[b]),h=0>a.J.q[b]?r+cc:r+Vb);g=null;r=a.J.w[b];0!=r&&(0!=(r&2)&&(g=Nh),0!=(r&4)&&(g=null==g?J8:g+",!a"),0!=(r&4096)&&(g=null==g?vl:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?ri:g+",c":8==e?g=null==g?M8:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+((r&29360128)>>\n22):g+",rs"+((r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.J.v[b]&&(g=null==g?m+a.J.v[b]:g+Xb+(m+a.J.v[b]));r=0;if(0!=(a.J.s[b]&48))switch(a.J.s[b]&48){case 16:h=null==h?vm:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.E&64))if(0!=(a.J.s[b]&67108864))e=fe;else if(0!=(a.J.s[b]&98304)>>15)if(2==a.J.f[b])switch((a.J.s[b]&98304)>>15){case 2:e=0!=(a.J.s[b]&4)?Ok:Kg;break;case 1:e=0!=(a.J.s[b]&4)?Tj:L8;break;default:e=Qb}else switch((a.J.s[b]&98304)>>15){case 1:e=0!=\n(a.J.s[b]&4)?M8:Ng;break;case 2:e=0!=(a.J.s[b]&4)?vl:hh;break;default:e=Qb}0!=(a.E&1792)&&(e=null==e?m+(null==a.J.b.d?-1:a.J.b.d[b]):e+Xb+(m+(null==a.J.b.d?-1:a.J.b.d[b])));n=null;0!=(a.E&16)&&0!=yr(a.J.u[b])&&(n=m+yr(a.J.u[b]));l=null;a:{j=a.J;no(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<uo(j,j.e[b][d]);++c){if(Xq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(Xq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=a9(a,b),\n-1!=j&&(l=0==j?Oh:(1==(j&255)?Ab:Lk)+(1+(j>>8))));j=0;a.J.H?((6!=a.J.A[b]||!a.s[b])&&0!=(a.J.w[b]&2048)&&0!=a.J.q[b]||0!=(a.J.s[b]&48))&&(j=yp(a.J,b)):(6!=a.J.A[b]||!a.s[b]||0!=(a.J.s[b]&48))&&(j=yp(a.J,b));c=eq(a.J,b);if(null!=c)j=0;else if(null!=Up(a.J,b)){d=0!=(a.J.w[b]&1)?"[!":Ch;c=a.J;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?m:Yq[c.A[b]];else{t=m;for(q=0;q<c.t[b].length;++q)0<q&&(t+=Xb),f=c.t[b][q],t+=Yq[f];c=t}c=d+c+Kh;5<c.length&&(c=d+Up(a.J,b).length+Kh);0!=(a.J.w[b]&2048)&&(j=-1)}else 0!=\n(a.J.w[b]&1)?(c=fe,0!=(a.J.w[b]&2048)&&(j=-1)):(6!=a.J.A[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=Yq[a.J.A[b]]);d=0;!hq(a.J,b)&0!=(a.J.w[b]&536870912)&&S8(a,-8);if(null!=c)d=l9(a,c),m9(a,Y8(a.N,Ko(a.J,b)),Z8(a.N,Lo(a.J,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.J.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.J.j[b][c]){c=!1;break a}c=!0}c&&(c=Y8(a.N,Ko(a.J,b)),f=Z8(a.N,Lo(a.J,b)),rq(a.W,new HL(c-a.R,f-a.R,2*a.R,2*a.R)),a.I||rq(a.Q,new n9(c,f,b9(a,b)?-3:a.r[b])))}null!=h&&(o9(a,~~((2*a.T+1)/3)),f=Y8(a.N,Ko(a.J,b))+\n((d+l9(a,h))/2+1),c=Z8(a.N,Lo(a.J,b))-~~((4*a.o-4)/8),m9(a,f,c,h,!0),o9(a,a.T));0!=(a.E&2)&&(g=m+b);null!=g&&(o9(a,~~((2*a.T+1)/3)),f=Y8(a.N,Ko(a.J,b))-(d+l9(a,g))/2,c=Z8(a.N,Lo(a.J,b))-~~((4*a.o-4)/8),m9(a,f,c,g,!0),o9(a,a.T));null!=e&&(o9(a,~~((2*a.T+1)/3)),f=Y8(a.N,Ko(a.J,b))-(d+l9(a,e))/2,c=Z8(a.N,Lo(a.J,b))+~~((4*a.o+4)/8),q=a.C,S8(a,448),m9(a,f,c,e,!1),S8(a,q),o9(a,a.T));null!=n&&(o9(a,~~((2*a.T+1)/3)),f=Y8(a.N,Ko(a.J,b))+((d+l9(a,n))/2+1),c=Z8(a.N,Lo(a.J,b))+~~((4*a.o+4)/8),q=a.C,S8(a,0>a.J.u[b]?\n384:448),m9(a,f,c,n,!0),S8(a,q),o9(a,a.T));if(null!=l){var w,u;c=C(Jo,mn,-1,uo(a.J,b),1);for(f=0;f<uo(a.J,b);++f)c[f]=So(a.J,b,so(a.J,b,f));zp(c);q=p9(c,0);t=q9(c,0,q);for(f=1;f<c.length;++f)w=p9(c,f),u=q9(c,f,w),t<u&&(t=u,q=w);c=q;o9(a,~~((2*a.T+1)/3));f=Y8(a.N,Ko(a.J,b))+0.7*a.o*Math.sin(c);c=Z8(a.N,Lo(a.J,b))+0.7*a.o*Math.cos(c);q=a.C;S8(a,$8(a,b));m9(a,f,c,l,!1);S8(a,q);o9(a,a.T)}if(!(0==j&&0==r)){l=C(Jo,mn,-1,4,1);for(c=0;c<uo(a.J,b);++c){f=ro(a.J,b,c);for(q=0;2>q;++q)D(a.J,q,f)==b&&(t=So(a.J,\nD(a.J,q,f),D(a.J,1-q,f)),-1.5707963267948966>t?(l[0]-=t+1.5707963267948966,l[3]+=t+3.141592653589793):0>t?(l[2]+=t+1.5707963267948966,l[3]-=t):1.5707963267948966>t?(l[1]+=t,l[2]+=1.5707963267948966-t):(l[0]+=t-1.5707963267948966,l[1]+=3.141592653589793-t))}0==a.J.f[b]?Nr(a.J.A[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=n)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=m;0!=j&&(f=l9(a,Hf),n=0,-1==j?(e=wk,o9(a,~~((2*a.T+1)/3)),n=l9(a,e)):1<j&&(e=m+j,o9(a,~~((2*a.T+1)/3)),n=l9(a,e)),0.6>l[1]||0.6>\nl[3]?(h=Z8(a.N,Lo(a.J,b)),l[1]<=l[3]?(l[1]+=10,g=Y8(a.N,Ko(a.J,b))+(d+f)/2):(l[3]+=10,g=Y8(a.N,Ko(a.J,b))-(d+f)/2-n)):(g=Y8(a.N,Ko(a.J,b)),l[0]<l[2]?(l[0]+=10,h=Z8(a.N,Lo(a.J,b))-a.o):(l[2]+=10,h=Z8(a.N,Lo(a.J,b))+a.o)),0<n&&(c=h+~~((4*a.o+4)/8),m9(a,g+(f+n)/2,c,e,!0),o9(a,a.T)),m9(a,g,h,Hf,!0));e=0;if(0!=r){n=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<n?(e=c,n=l[c],g=l[h]):l[c]==n&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=Y8(a.N,Ko(a.J,b));h=Z8(a.N,Lo(a.J,b))-a.R-d/2;break;case 1:g=Y8(a.N,Ko(a.J,b))+\na.R+d/2;h=Z8(a.N,Lo(a.J,b));break;case 2:g=Y8(a.N,Ko(a.J,b));h=Z8(a.N,Lo(a.J,b))+a.R+d/2;break;default:g=Y8(a.N,Ko(a.J,b))-a.R-d/2,h=Z8(a.N,Lo(a.J,b))}if(1==r)rq(a.W,new HL(g-a.R,h-a.R,2*a.R,2*a.R)),a.I||rq(a.Q,new n9(g,h,b9(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.R;e=0;g-=a.R;break;case 1:r=0;e=2*a.R;h-=a.R;break;default:r=0,e=2*a.R,h-=a.R}rq(a.W,new HL(g-a.R,h-a.R,2*a.R,2*a.R));a.I||rq(a.Q,new n9(g,h,b9(a,b)?-3:a.r[b]));rq(a.W,new HL(g+r-a.R,h+e-a.R,2*a.R,2*a.R));a.I||rq(a.Q,new n9(g+\nr,h+e,b9(a,b)?-3:a.r[b]))}}}-8==a.C&&S8(a,-9)}\nfunction r9(a,b){var c,d,e,f,g,h,j,l,n,q,r,t;n=new Q8;c=new Q8;f=new Q8;j=new EL;h=new EL;d=D(a.J,0,b);e=D(a.J,1,b);var w=Z8(a.N,Lo(a.J,d)),u=Y8(a.N,Ko(a.J,e)),y=Z8(a.N,Lo(a.J,e)),w=\'<line id="\'+(null!=a.k?a.k:mk+k9)+":Bond:"+d+cc+e+\'" class="event" x1="\'+Sr(100*Y8(a.N,Ko(a.J,d)))/100+Va+Sr(100*w)/100+Ua+Sr(100*u)/100+Wa+Sr(100*y)/100+\'" stroke-width="8" stroke-opacity="0"/>\';rq(a.c,w);!hq(a.J,d)&&!hq(a.J,e)&&0!=((a.J.w[d]|a.J.w[e])&536870912)&&S8(a,-8);a.q[d]?(n.a=a.q[d].a,n.c=a.q[d].b):(n.a=Y8(a.N,\nKo(a.J,d)),n.c=Z8(a.N,Lo(a.J,d)));a.q[e]?(n.b=a.q[e].a,n.d=a.q[e].b):(n.b=Y8(a.N,Ko(a.J,e)),n.d=Z8(a.N,Lo(a.J,e)));if(0!=(a.J.D[b]&16320))V8(a,n)&&(g=m+Sr(100*n.a)/100,l=m+Sr(100*n.b)/100,q=m+Sr(100*n.c)/100,r=m+Sr(100*n.d)/100,t=\'<line stroke-dasharray="3, 3" x1="\'+g+Va+q+Ua+l+Wa+r+Pa+a.e+\'" stroke-width:\'+Sr(100*a.n)/100+Ya,s9(a,t)),S8(a,-9);else{g=64==a.J.E[b]?0:32==a.J.E[b]?1:vo(a.J,b);switch(g){case 1:switch(a.J.E[b]){case 1:V8(a,n)&&U8(a,n,d,e);break;case 17:t9(a,n,d,e);break;case 9:h=n.b-n.a;\nj=n.d-n.c;R8(a.J,Iq(a.J,d,e))?f=e=-3:(e=a.r[d],f=$8(a,d),e==(a.J.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=n.a+d*h/17-d*j/128,c.c=n.c+d*j/17+d*h/128,c.b=n.a+d*h/17+d*j/128,c.d=n.c+d*j/17-d*h/128,V8(a,c)&&(S8(a,9>d?e:f),T8(a,c),S8(a,a.M));break;case 32:if(V8(a,n)){f=n.b-n.a;j=n.d-n.c;c=Math.sqrt(f*f+j*j);c=2*I(J(L(c/(4*a.U))));f/=c-1;j/=c-1;R8(a.J,Iq(a.J,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=n.a-a.U/2;n=n.c-a.U/2;S8(a,d);for(d=0;d<~~(c/2);++d)u9(a,h,n,a.U),h+=f,n+=j;S8(a,e);for(d=0;d<~~(c/2);++d)u9(a,h,\nn,a.U),h+=f,n+=j;S8(a,a.M)}}break;case 0:case 2:if((a.t[d]||2==a.J.k[d])&&(a.t[e]||2==a.J.k[e])&&!Oo(a.J,b)&&2==g){if(!V8(a,n))break;e9(a,n.b-n.a,n.d-n.c,j);h=j.a/2;j=j.b/2;c.a=n.a+h;c.c=n.c+j;c.b=n.b+h;c.d=n.d+j;f.a=n.a-h;f.c=n.c-j;f.b=n.b-h;f.d=n.d-j;26==a.J.E[b]&&h9(c,f);U8(a,c,d,e);U8(a,f,d,e)}else if((a.t[e]||2==a.J.k[e])&&2==g)f9(a,n,b,!1);else if((a.t[d]||2==a.J.k[d])&&2==g)f9(a,n,b,!0);else{l=g9(a,b);0==l&&(l=1);c.a=n.a;c.c=n.c;c.b=n.b;c.d=n.d;e9(a,n.b-n.a,n.d-n.c,j);if(0<l){f.a=n.a+j.a;f.c=\nn.c+j.b;f.b=n.b+j.a;f.d=n.d+j.b;if(d9(a,d,e,1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(d9(a,e,d,-1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=n.a-j.a;f.c=n.c-j.b;f.b=n.b-j.a;f.d=n.d-j.b;if(d9(a,d,e,-1,h)||1<a.J.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(d9(a,e,d,1,h)||1<a.J.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.J.E[b]&&h9(c,f);V8(a,c)&&U8(a,c,d,e);2==g?V8(a,f)&&U8(a,f,d,e):V8(a,f)&&P8(a,f,d,e)}break;case 3:V8(a,n)&&(U8(a,n,d,e),e9(a,n.b-n.a,n.d-n.c,j),c.a=n.a+j.a,c.c=n.c+j.b,c.b=n.b+j.a,c.d=n.d+j.b,\nU8(a,c,d,e),c.a=n.a-j.a,c.c=n.c-j.b,c.b=n.b-j.a,c.d=n.d-j.b,U8(a,c,d,e))}-8==a.C&&S8(a,-9)}}function m9(a,b,c,d,e){var f;e&&(e=l9(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Vb||d==cc)&&(f=2*f/3),rq(a.W,new HL(b-e,c-f,2*e,2*f)));a.I||v9(a,d,b,c)}function w9(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction q9(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function x9(a){var b;b=new GL;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function p9(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction t9(a,b,c,d){var e,f,g;g=new Q8;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=x9(g);for(b=0;b<a.W.c;++b)if(e=yo(a.W,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(y9(a,g.a,g.c,b)){if(y9(a,g.b,g.d,b))return;z9(a,g,0,b);t9(a,g,c,d);return}if(y9(a,g.b,g.d,b)){z9(a,g,1,b);t9(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(Jo,mn,-1,3,1);e=C(Jo,mn,-1,3,1);f=C(Jo,mn,-1,4,1);h=C(Jo,mn,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];R8(a.J,Iq(a.J,c,d))?g=d=-3:(d=a.r[c],g=$8(a,c),d==(a.J.s[c]&448)&&(d=g));S8(a,d);a.Hd(b,e,3);S8(a,g);a.Hd(f,h,4);S8(a,a.M)}}function y9(a,b,c,d){if(0!=(a.E&1))return!1;a=yo(a.W,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function h9(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction g9(a,b){var c,d,e,f,g,h,j,l,n,q;j=C(oo,en,-1,16,2);l=C(oo,en,-1,16,2);c=C(Jo,mn,-1,16,1);f=C(Jo,mn,-1,2,1);for(h=d=0;2>h;++h){e=D(a.J,h,b);for(n=0;n<a.J.f[e];++n)if(g=ro(a.J,e,n),g!=b){if(4==d)return 0;j[d]=Io(a.J,g);l[d]=Oo(a.J,g);c[d++]=So(a.J,e,so(a.J,e,n))}}f[0]=So(a.J,D(a.J,0,b),D(a.J,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction V8(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.W.c;++d)if(e=yo(a.W,d),RK(e,b.a,b.c))return!1;return!0}f=x9(b);c=!1;b.a>b.b&&(w9(b),c=!0);for(d=0;d<a.W.c;++d)if(e=yo(a.W,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(y9(a,b.a,b.c,d)){if(y9(a,b.b,b.d,d))return c&&w9(b),!1;z9(a,b,0,d);d=V8(a,b);c&&w9(b);return d}if(y9(a,b.b,b.d,d))return z9(a,b,1,d),d=V8(a,b),c&&w9(b),d}c&&w9(b);return!0}\nfunction z9(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=yo(a.W,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction A9(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+b.b-c;break}case 0:a.A.a=a.w.d+a.w.c/2;a.A.b=a.w.e+a.w.b+c;b&&a.A.b>b.e+b.b-c&&(a.A.b=b.e+b.b-c);break;case 524288:if(b){a.A.a=b.d+b.c/2;a.A.b=b.e+c;break}case 262144:a.A.a=a.w.d+a.w.c/2,a.A.b=a.w.e-c,b&&a.A.b<b.e+c&&(a.A.b=b.e+c)}}\nfunction S8(a,b){if(!a.I&&(-10==b&&(a.C=-999,b=a.M),!(b==a.C||-8==a.C&&-9!=b)))switch(-8==b&&(a.L=a.C),-9==b&&(b=a.L),a.C=b,b){case 0:a.Id((LJ(),TJ));break;case -6:a.Id(a.D);break;case -4:a.Id(a.K);break;case -2:a.Id(a.u);break;case -3:a.Id(a.v);break;case -7:a.Id(a.F);break;case -8:a.Id(a.G);break;case 64:a.Id(fo);break;case 128:a.Id(go);break;case 256:a.Id(io);break;case 192:a.Id(ho);break;case 320:a.Id(jo);break;case 384:a.Id(ko);break;case 448:a.Id(lo);break;case 1:a.Id((LJ(),QJ));break;default:a.Id((LJ(),\nTJ))}}function B9(a){var b,c,d,e,f;e=Y8(a.N,a.J.G[0].a);c=Y8(a.N,a.J.G[0].a);f=Z8(a.N,a.J.G[0].b);d=Z8(a.N,a.J.G[0].b);for(b=0;b<a.J.o;++b)e>Y8(a.N,Ko(a.J,b))&&(e=Y8(a.N,Ko(a.J,b))),c<Y8(a.N,Ko(a.J,b))&&(c=Y8(a.N,Ko(a.J,b))),f>Z8(a.N,Lo(a.J,b))&&(f=Z8(a.N,Lo(a.J,b))),d<Z8(a.N,Lo(a.J,b))&&(d=Z8(a.N,Lo(a.J,b)));a.w=new HL(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.A=null;_.B=0;_.C=0;_.D=null;_.E=0;_.F=null;_.G=null;_.H=0;_.I=!1;_.J=null;_.K=null;_.L=0;_.M=0;_.N=null;\n_.O=0;_.P=0;_.Q=null;_.R=0;_.S=0;_.T=0;_.U=0;_.V=0;_.W=null;function n9(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},n9);_.a=0;_.b=0;_.c=0;function Q8(){}x(5,1,{},Q8);_.a=0;_.b=0;_.c=0;_.d=0;function C9(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function D9(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function Y8(a,b){return b*a.c+a.a}function Z8(a,b){return b*a.c+a.b}function E9(){this.b=this.a=0;this.c=1}\nfunction F9(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},E9,F9);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Xb+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function O8(a){return kr(a,a.o,a.p,24)}function R8(a,b){return 0!=(a.C[b]&262144)}\nfunction T8(a,b){var c,d,e,f;c=m+Sr(100*b.a)/100;d=m+Sr(100*b.b)/100;e=m+Sr(100*b.c)/100;f=m+Sr(100*b.d)/100;c=Xd+c+Va+e+Ua+d+Wa+f+\'" style="stroke:\'+a.e+";stroke-width:"+Sr(100*a.n)/100+Ya;s9(a,c)}function v9(a,b,c,d){l9(a,b);b=ce+Sr(100*c)/100+\'" text-anchor="middle" y="\'+Sr(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+K8+a.e+db+b+Wd;s9(a,b)}function u9(a,b,c,d){b=\'<circle cx="\'+Sr(100*b)/100+Ea+Sr(100*c)/100+\'" r="\'+Sr(100*d)/100+K8+a.e+\'" />\';s9(a,b)}\nfunction l9(a,b){var c;c=xT();if(-1<c&&9>c)return!a.i&&(a.i=(KI(),new LI(a.f))),c=cL(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=G9;e||(G9=e=$doc.createElement("canvas"));d=m+d.b+$k+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new HL(0,0,c.width,0)).c}function o9(a,b){a.o!=b&&(a.o=b,a.f=new yK(Kf,0,b))}\nfunction H9(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:mk+k9)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Md(ca)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ca+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:mk+k9)+" {pointer-events:none; }  #"+(null!=a.k?a.k:mk+k9)+" .event  { pointer-events:all;}  <\/style>\\n";d+=aa;d+=b;for(c=new wq(a.c);c.b<c.d.Bg();)b=xq(c),s9(a,b);for(c=new wq(a.b);c.b<c.d.Bg();)b=xq(c),s9(a,b);return d+a.Ld(aa)+a.d.a.a+Td}\nfunction s9(a,b){bs(a.d,aa);bs(a.d,b);bs(a.d,ba)}x(28,3,{});_.Ld=ry;_.Md=ry;_.Hd=function(a,b,c){var d,e;e=new YC(\'<polygon points="\');for(d=0;d<c;++d){var f=m+Sr(100*a[d])/100;zw(e.a,f);e.a.a+=Xb;f=m+Sr(100*b[d])/100;zw(e.a,f);e.a.a+=ca}zw(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');s9(this,e.a.a)};_.Id=function(a){this.e=kl+(a.d>>16&255)+Xb+(a.d>>8&255)+Xb+(a.d&255)+Pb};_.tS=function(){return H9(this)};_.e=ii;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var k9=0;\nfunction I9(a){var b;no(a,15);b=a.F&65535;switch(a.F&-65536){case 65536:return null;case 131072:return 1==b?"meso":m+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":m+b+" stereo isomers"}}function J9(){J9=z;K9=A(gK,fn,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction L9(a,b){J9();var c,d,e,f,g,h;c=!b?1:(K9[0]*(b.d>>16&255)+K9[1]*(b.d>>8&255)+K9[2]*(b.d&255))/255;f=!a?1:(K9[0]*(a.d>>16&255)+K9[1]*(a.d>>8&255)+K9[2]*(a.d&255))/255;e=Uq(c-f);if(0.30000001192092896<e)return a;d=C(gK,fn,-1,3,1);M9(b.d>>16&255,b.d>>8&255,b.d&255,d);g=C(gK,fn,-1,3,1);M9(a.d>>16&255,a.d>>8&255,a.d&255,g);h=Uq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=Uq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;else if(e=(f>c?1<\nf+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(gK,fn,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(a.d>>24&255)/255,f=c,null==f&&(f=C(gK,fn,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(a.d>>8&255)/255,f[0]=(a.d>>16&255)/255),f=!a?1:(K9[0]*(a.d>>16&255)+K9[1]*(a.d>>8&255)+K9[2]*(a.d&255))/255,0==f)c=new fK(f,f,f,c[3]);else{d=e/(!a?1:(K9[0]*(a.d>>16&255)+K9[1]*(a.d>>8&255)+K9[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=K9[e]:(h+=(c[e]-1)*K9[e],c[e]=1);if(0!=h){for(e=\nd=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*K9[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/K9[e],1<c[e]&&(c[e]=1))}c=new fK(c[0],c[1],c[2],c[3])}return c}var K9;function N9(a){LJ();this.d=a|-16777216}function M9(a,b,c,d){LJ();var e,f,g,h,j,l;null==d&&(d=C(gK,fn,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(495,1,{60:1,69:1,73:1},N9);\nvar G9=null;function i9(a,b){this.a=a;this.b=b}x(547,518,{82:1,83:1},i9);function X8(a,b){var c;c=new GL;SK(a,b,c);return c}\nfunction O9(a){var b,c;b=iO(a,!1,!0);c=null;a=new Hs;if(os(new Es,a,new PL(new TL(b)))){a=new P9(a,b);b=new HL(0,0,400,300);var d;if(0!=a.J.o){a.p=Sr(b.c);a.j=Sr(b.b);0==a.J.o?c=null:(B9(a),c=a.N.c*O8(a.J),d=new F9(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(C9(d,a.N),D9(d,a.w)),A9(a,b,c,131072),c=d);no(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);c9(a);a.Q.gh();a.W.gh();N8(a);o9(a,a.T);a.I=!0;for(d=0;d<a.J.o;++d)j9(a,d);a.I=!1;d=a.N.c*O8(a.J);W8(a,d);A9(a,b,d,131072);var e;if(!(e=!b)){var f=\na.w;e=f.d;var g=f.e,h=f.c,f=f.b,j,l,n,q;b.qg()||0>=h||0>=f?e=!1:(j=b.d,n=b.e,l=j+b.c,q=n+b.b,e=j<=e&&e+h<=l&&n<=g&&g+f<=q)}e||(b=new F9(a.w,b,d),C9(b,a.N),D9(b,a.w),d=a.A,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&C9(b,c))}if(0!=a.J.o){no(a.J,0!=(a.E&256)?31:0!=(a.E&512)?47:0!=(a.E&1024)?79:15);N8(a);b=!1;a.r=C(B,v,-1,a.J.o,1);for(c=0;c<a.J.o;++c)a.r[c]=a.J.s[c]&448,0!=a.r[c]&&(b=!0),hq(a.J,c)&&(a.r[c]=128),0!=(a.J.s[c]&131072)&&0==(a.E&4096)&&(a.r[c]=256);S8(a,-10);if(a.J.H){d=a.S;S8(a,-7);for(c=0;c<a.J.c;++c)0!=\n(a.J.w[c]&536870912)&&u9(a,Y8(a.N,Ko(a.J,c))-d,Z8(a.N,Lo(a.J,c))-d,2*d);a.n=2*a.S;g=new Q8;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.w[c]&a.J.w[d]&536870912)&&(g.a=Y8(a.N,Ko(a.J,c)),g.c=Z8(a.N,Lo(a.J,c)),g.b=Y8(a.N,Ko(a.J,d)),g.d=Z8(a.N,Lo(a.J,d)),T8(a,g))}a.n=2*a.O;g=new Q8;for(e=0;e<a.J.p;++e)c=D(a.J,0,e),d=D(a.J,1,e),0!=(a.J.C[e]&131072)&&(g.a=Y8(a.N,Ko(a.J,c)),g.c=Z8(a.N,Lo(a.J,c)),g.b=Y8(a.N,Ko(a.J,d)),g.d=Z8(a.N,Lo(a.J,d)),S8(a,-2),T8(a,g));if(a.J.H){S8(a,320);if(0!=(a.E&8))for(c=\n0;c<a.J.c;++c)0!=(a.J.w[c]&-536870913)&&u9(a,Y8(a.N,Ko(a.J,c))-a.V/2,Z8(a.N,Lo(a.J,c))-a.V/2,a.V);for(e=0;e<a.J.d;++e)0!=a.J.D[e]&&(c=D(a.J,0,e),d=D(a.J,1,e),u9(a,(Y8(a.N,Ko(a.J,c))+Y8(a.N,Ko(a.J,d))-a.V)/2,(Z8(a.N,Lo(a.J,c))+Z8(a.N,Lo(a.J,d))-a.V)/2,a.V))}0==(a.E&32)&&(d=I9(a.J),null!=d&&(0==a.A.a&&0==a.A.b&&(c=a.N.c*O8(a.J),B9(a),W8(a,c),A9(a,null,c,0)),o9(a,Sr(a.B)),S8(a,448),v9(a,d,a.A.a,a.A.b+0.30000001192092896*a.B)));o9(a,a.T);a.n=a.U;S8(a,a.M);c9(a);a.Q.gh();a.W.gh();for(c=0;c<a.J.o;++c)b9(a,\nc)?(S8(a,-3),j9(a,c),S8(a,a.M)):0!=a.r[c]?(S8(a,a.r[c]),j9(a,c),S8(a,a.M)):!b&&1!=a.J.A[c]&&6!=a.J.A[c]&&0==(a.E&2048)&&null==Up(a.J,c)&&a.J.A[c]<Zn.length?(d=a,e=Zn[a.J.A[c]],h=g=void 0,g=(LJ(),MJ),h=new N9(e),e=L9(h,g),d.C=-5,d.e=kl+(e.d>>16&255)+Xb+(e.d>>8&255)+Xb+(e.d&255)+Pb,j9(a,c),S8(a,a.M)):j9(a,c);for(c=new wq(a.Q);c.b<c.d.Bg();)b=xq(c),S8(a,b.a),u9(a,b.b-a.R/2,b.c-a.R/2,a.R);S8(a,a.M);c=!1;for(b=0;b<a.J.d;++b)d=null,0!=(a.J.D[b]&16320)?(e=(a.J.D[b]&960)>>6,d=((a.J.D[b]&960)>>6)+((a.J.D[b]&\n15360)>>10),d=e==d?Ch+e+Kh:Ch+e+Id+d+Kh):0!=(a.J.D[b]&786432)?d=262144==(a.J.D[b]&786432)?Nh:32==(a.J.D[b]&48)?"r!a":J8:0!=(a.J.D[b]&48)&&(d=32==(a.J.D[b]&48)?M8:"!r"),e=(a.J.D[b]&114688)>>14,0!=e&&(d=(null==d?m:d)+e),null!=d&&(f=D(a.J,0,b),j=D(a.J,1,b),c||(o9(a,~~((2*a.T+1)/3)),c=!0),g=(Y8(a.N,Ko(a.J,f))+Y8(a.N,Ko(a.J,j)))/2,h=(Z8(a.N,Lo(a.J,f))+Z8(a.N,Lo(a.J,j)))/2,e=Y8(a.N,Ko(a.J,j))-Y8(a.N,Ko(a.J,f)),j=Z8(a.N,Lo(a.J,j))-Z8(a.N,Lo(a.J,f)),f=Math.sqrt(e*e+j*j),n=0.6*l9(a,d),l=0.55*a.o,0!=f&&(0<\ne?m9(a,g+n*j/f,h-l*e/f,d,!0):m9(a,g-n*j/f,h+l*e/f,d,!0)));c&&o9(a,a.T);a.q=C(Q9,o,83,a.J.o,0);for(b=0;b<a.J.p;++b)(2==a.J.E[b]||26==a.J.E[b]||64==a.J.E[b])&&r9(a,b);for(b=0;b<a.J.p;++b)2!=a.J.E[b]&&26!=a.J.E[b]&&64!=a.J.E[b]&&r9(a,b);if(0==(a.E&64))for(b=0;b<a.J.p;++b)if(0!=(a.J.C[b]&48)>>4){switch((a.J.C[b]&48)>>4){case 1:h=2==vo(a.J,b)?uf:0!=(a.J.C[b]&4)?Ok:Kg;break;case 2:h=2==vo(a.J,b)?"Z":0!=(a.J.C[b]&4)?Tj:L8;break;default:h=fe}o9(a,~~((2*a.T+1)/3));S8(a,R8(a.J,b)?-3:448);e=D(a.J,0,b);g=D(a.J,\n1,b);c=(Y8(a.N,Ko(a.J,e))+Y8(a.N,Ko(a.J,g)))/2;d=(Z8(a.N,Lo(a.J,e))+Z8(a.N,Lo(a.J,g)))/2;f=(Y8(a.N,Ko(a.J,e))-Y8(a.N,Ko(a.J,g)))/3;e=(Z8(a.N,Lo(a.J,e))-Z8(a.N,Lo(a.J,g)))/3;m9(a,c+e,d-f,h,!0);S8(a,a.M);o9(a,a.T)}if(0!=(a.E&4)){o9(a,~~((2*a.T+1)/3));S8(a,384);for(b=0;b<a.J.p;++b)e=D(a.J,0,b),g=D(a.J,1,b),h=0!=(a.J.C[b]&512)?"d":Io(a.J,b)?Nh:m,c=(Y8(a.N,Ko(a.J,e))+Y8(a.N,Ko(a.J,g)))/2,d=(Z8(a.N,Lo(a.J,e))+Z8(a.N,Lo(a.J,g)))/2,m9(a,c,d,h+m+b,!0);S8(a,a.M);o9(a,a.T)}}c=H9(a)}return c}x(733,632,Hn);\n_.he=function(){this.b.Ig(O9(this.a))};x(736,632,Hn);_.he=function(){fO(O9(this.a))};\nfunction P9(a,b){var c;Yn();this.w=new GL;this.J=a;this.E=0;this.H=1;this.N=new E9;this.W=new nq;this.Q=new nq;this.t=C(oo,en,-1,this.J.o,2);this.A=new EL;this.M=0;this.C=-1;c=(LJ(),MJ);var d=bo;J9();this.u=new ao(Sr((c.d>>16&255)+0.30000001192092896*((d.d>>16&255)-(c.d>>16&255))),Sr((c.d>>8&255)+0.30000001192092896*((d.d>>8&255)-(c.d>>8&255))),Sr((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=L9($n,c);this.F=eo;this.G=co;this.c=new nq;this.b=new nq;this.d=new yw;this.f=new yK(Kf,0,\n12);new yK(Kf,0,120);this.k=m;++k9;this.a=b}x(769,28,{},P9);_.Ld=function(a){var b;b=m;null!=this.a&&0<this.a.length&&(b=zT(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",Hh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Md=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Y(3);Y(28);Y(769);var Q9=TU(1005,FL);Y(4);Y(5);Y(19);N(s0)(7);function ry(){return m};\n//# sourceURL=7.js\n')