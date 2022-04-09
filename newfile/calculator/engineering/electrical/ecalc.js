function ec1(ef1) {
var iphase = document.ef1.phase.selectedIndex;
var row0 = document.getElementById("pf0");
var row1 = document.getElementById("pf1");
if( iphase==0 )
{
document.ef1.pf.disabled = true;
document.ef1.pf.style.backgroundColor = "#f0f0f0";
row0.style.display = 'none';
row1.style.display = 'none';
}
else if( iphase==1 )
{
document.ef1.pf.disabled = false;
document.ef1.pf.style.backgroundColor = "#ffffff";
row0.style.display = 'none';
row1.style.display = '';
}
else
{
document.ef1.pf.disabled = false;
document.ef1.pf.style.backgroundColor = "#ffffff";
row0.style.display = '';
row1.style.display = '';
}
}
function ec2(ef2) {
var iphase = document.ef2.phase.selectedIndex;
var row1 = document.getElementById("row1");
if( iphase==0 )
{
row1.style.display = 'none';
}
else
{
row1.style.display = '';
}
}
function nconvert2(x1,x2) {
var iphase = document.ef2.phase.selectedIndex;
var ivolt = document.ef2.volt.selectedIndex;
var kva = x1*x2/1000;
if( iphase==1 )
{
if( ivolt==0 )
kva*=Math.sqrt(3);
else
kva*=3;
}
kva = kva.toFixed(3);
return kva;
}
function ec4(ef4) {
var isel = document.ef4.C1.selectedIndex;
var w1 = document.getElementById("w1");
var o1 = document.getElementById("o1");
if( isel==0 )
{
w1.style.display = '';
o1.style.display = 'none';
}
else
{
w1.style.display = 'none';
o1.style.display = '';
}
}
function ec5(ef5) {
var iphase = document.ef5.phase.selectedIndex;
var row0 = document.getElementById("pff0");
var row1 = document.getElementById("pff1");
if( iphase==0 )
{
document.ef5.pf.disabled = true;
document.ef5.pf.style.backgroundColor = "#f0f0f0";
row0.style.display = 'none';
row1.style.display = 'none';
}
else if( iphase==1 )
{
document.ef5.pf.disabled = false;
document.ef5.pf.style.backgroundColor = "#ffffff";
row0.style.display = 'none';
row1.style.display = '';
}
else
{
document.ef5.pf.disabled = false;
document.ef5.pf.style.backgroundColor = "#ffffff";
row0.style.display = '';
row1.style.display = '';
}
}
function ec6(ef6)
{
look=[3000,2400,1600,2000,70,2000,800,100,50,200,200,70,1000,1600,2000,4000];
i = document.ef6.Select4.selectedIndex;
if(i==0) return;
document.ef6.Text1.value = look[i-1];
document.ef6.Select2.selectedIndex=0;
}
function ec7(ef7) {
var ictype = document.ef7.charge_type.selectedIndex;
var row1 = document.getElementById("ppf1");
var row3 = document.getElementById("ppf3");
if( ictype==0 )
{
row1.style.display = '';
row3.style.display = 'none';
}
else
{
row1.style.display = 'none';
row3.style.display = '';
}
}
function ec10(ef10) {
var iphase = document.ef10.phase.selectedIndex;
var row1 = document.getElementById("rrow1");
if( iphase==0 )
{
row1.style.display = 'none';
}
else
{
row1.style.display = '';
}
}
function ec14(ef14) {
var iphase = document.ef14.phase.selectedIndex;
var row0 = document.getElementById("p_pf0");
var row1 = document.getElementById("p_pf1");
if( iphase==0 )
{
document.ef14.pf.disabled = true;
document.ef14.pf.style.backgroundColor = "#f0f0f0";
row0.style.display = 'none';
row1.style.display = 'none';
}
else if( iphase==1 )
{
document.ef14.pf.disabled = false;
document.ef14.pf.style.backgroundColor = "#ffffff";
row0.style.display = 'none';
row1.style.display = '';
}
else
{
document.ef14.pf.disabled = false;
document.ef14.pf.style.backgroundColor = "#ffffff";
row0.style.display = '';
row1.style.display = '';
}
}
function ec15(ef15) {
var iphase = document.ef15.phase.selectedIndex;
var row1 = document.getElementById("pf1_1");
if( iphase==0 )
{
document.ef15.pf.disabled = true;
document.ef15.pf.style.backgroundColor = "#f0f0f0";
row1.style.display = 'none';
}
else
{
document.ef15.pf.disabled = false;
document.ef15.pf.style.backgroundColor = "#ffffff";
row1.style.display = '';
}
}
function ef25calc() {
var iphase = document.ef25.phase.selectedIndex;
var ivolt = document.ef25.volt_type.selectedIndex;
var kw   = document.ef25.kw.value;
var amp  = document.ef25.amp.value;
var volt = document.ef25.volt.value;
var hz = document.ef25.hz.value;
if( volt=='' ) volt=120;
if( hz=='' ) hz=60;
var kva = volt*amp/1000;
if( iphase==1 )
{
if( ivolt==0 )
{
kva*=Math.sqrt(3);
volt/=Math.sqrt(3);
}
else
kva*=3;
}
pf = kw/kva;
kvar = Math.sqrt(kva*kva-kw*kw);
var kvar2 = kvar;
if( iphase==1 )	kvar2/=3;
if( pf>1 ) {alert("Error: power factor > 1"); return;}
c = 1000000000*kvar2/(2*Math.PI*hz*volt*volt);
pf = pf.toFixed(3);
kva = kva.toFixed(6);
kvar = kvar.toFixed(6);
c = c.toFixed(6);
document.ef25.pf.value = pf;
document.ef25.kva.value = kva;
document.ef25.kvar.value = kvar;
document.ef25.c.value = c;
}
function ef25pc() {
var iphase = document.ef25.phase.selectedIndex;
var row1 = document.getElementById("erow1");
if( iphase==0 )
{
row1.style.display = 'none';
}
else
{
row1.style.display = '';
}
}
function ec32(ef32) {
v  = document.ef32.v.value;
r1 = document.ef32.r1.value;
r2 = document.ef32.r2.value;
r3 = document.ef32.r3.value;
v  = parseFloat(v);
r1 = parseFloat(r1);
r2 = parseFloat(r2);
r  = r1+r2;
if( r3 == "" ) {
document.ef32.v1.value = v*r1/r;
document.ef32.v2.value = v*r2/r;
document.ef32.v3.value = "";
}
else {
r3 = parseFloat(r3);
r += r3;
document.ef32.v1.value = v*r1/r;
document.ef32.v2.value = v*r2/r;
document.ef32.v3.value = v*r3/r;
}
}
function reschg()
{
var itype = document.ef33.type.selectedIndex;
var ilook=[1.72e-8, 2.82e-8, 1.43e-7, 4.6e-7, 2.44e-8, 1.1e-6, 6.99e-8, 1.59e-8];
var res='';
if( itype>0 ) {
res = ilook[itype-1];
res = res.toExponential();
}
document.ef33.res.value = res;
}
function resichg()
{
document.ef33.type.selectedIndex = 0;
}
function ec33_ef33()
{
var issel = document.ef33.ssel.selectedIndex;
var ilsel = document.ef33.lsel.selectedIndex;
var iphase = document.ef33.phase.selectedIndex;
n = document.ef33.s.value;
len  = document.ef33.l.value;
v = document.ef33.v.value;
i = document.ef33.i.value;
var res = document.ef33.res.value;
var d;
if( issel==0 )
{
if( n=="000000" || n=="6/0" ) n=-5;
if( n=="00000" || n=="5/0" ) n=-4;
if( n=="0000" || n=="4/0" ) n=-3;
if( n=="000" || n=="3/0" ) n=-2;
if( n=="00" || n=="2/0" ) n=-1;
if( n>40 ) {
alert("AWG>40 is not valid");
document.ef33.s.focus();
document.ef33.s.select();
return;
}
d = 0.127e-3*Math.pow(92,((36-n)/39));
}
else if( issel==1 )
{
d = 25.4*n/1000;
}
else
{
d = n/1000;
}
if( ilsel==0 )
len*=0.3048;
a = Math.PI/4*d*d;
r = 2*res*len/a;
vd = i*r;
if( iphase==2 ) vd*=(1.732/2);
vdp = vd/v*100;
document.ef33.vd.value  = vd.toPrecision(6);
document.ef33.vdp.value = vdp.toPrecision(6);
document.ef33.r.value   = r.toPrecision(6);
}
function ec34() {
var isel = document.ef34.C1.selectedIndex;
var w1 = document.getElementById("qw1");
var o1 = document.getElementById("qo1");
if( isel==0 )
{
w1.style.display = '';
o1.style.display = 'none';
}
else
{
w1.style.display = 'none';
o1.style.display = '';
}
}
function ec35(ef35) {
var iphase = document.ef35.phase.selectedIndex;
var row1 = document.getElementById("vpf1");
if( iphase==0 )
{
document.ef35.pf.disabled = true;
document.ef35.pf.style.backgroundColor = "#f0f0f0";
row1.style.display = 'none';
}
else
{
document.ef35.pf.disabled = false;
document.ef35.pf.style.backgroundColor = "#ffffff";
row1.style.display = '';
}
}
function ec36() {
var iphase = document.ef36.phase.selectedIndex;
var row1 = document.getElementById("mpf1");
if( iphase==0 )
{
document.ef36.pf.disabled = true;
document.ef36.pf.style.backgroundColor = "#f0f0f0";
row1.style.display = 'none';
}
else
{
document.ef36.pf.disabled = false;
document.ef36.pf.style.backgroundColor = "#ffffff";
row1.style.display = '';
}
}
function ec38(ef38) {
var ictype = document.ef38.charge_type.selectedIndex;
var row1 = document.getElementById("opf1");
var row3 = document.getElementById("opf3");
if( ictype==0 )
{
row1.style.display = '';
row3.style.display = 'none';
}
else
{
row1.style.display = 'none';
row3.style.display = '';
}
}
var pIndex=["0","2","2","2"];
function ec39(obj) {
r = document.ef39.r.value;
i = document.ef39.i.value;
v = document.ef39.v.value;
p = document.ef39.p.value;
count = 0;
if( r!="" ) count++;
if( i!="" ) count++;
if( v!="" ) count++;
if( p!="" ) count++;
if( count<2 )
document.ef39.bcalc4.disabled=true;
else
document.ef39.bcalc4.disabled=false;
if( obj.value!="" ) return;
if( count>=2 ) docal_39();
}
function ef39_1(sel, i) {
if( i==0 ) txt=document.ef39.r;
else if( i==1 ) txt=document.ef39.i;
else if( i==2 ) txt=document.ef39.v;
else if( i==3 ) txt=document.ef39.p;
if( txt.value=='' ) return;
di = sel.selectedIndex-pIndex[i];
txt.value = roundnum(txt.value/Math.pow(1000, di), 8);
pIndex[i] = sel.selectedIndex;
}
function docal_39() {
fr = Math.pow(10,3*document.ef39.cr.selectedIndex);
fi = Math.pow(10,3*document.ef39.ci.selectedIndex-6);
fv = Math.pow(10,3*document.ef39.cv.selectedIndex-6);
fp = Math.pow(10,3*document.ef39.cp.selectedIndex-6);
r = fr*document.ef39.r.value;
i = fi*document.ef39.i.value;
v = fv*document.ef39.v.value;
p = fp*document.ef39.p.value;
if( r!="" && v!="" ) {i=v/r; p=v*i;}
else if( r!="" && i!="" ) {v=i*r; p=v*i;}
else if( r!="" && p!="" ) {v=Math.sqrt(p*r); i=p/v;}
else if( i!="" && v!="" ) {r=v/i; p=v*i;}
else if( i!="" && p!="" ) {v=p/i; r=v/i;}
else if( v!="" && p!="" ) {i=p/v; r=v/i;}
r /= fr;
i /= fi;
v /= fv;
p /= fp;
document.ef39.r.value = roundnum(r,8);
document.ef39.i.value = roundnum(i,8);
document.ef39.v.value = roundnum(v,8);
document.ef39.p.value = roundnum(p,8);
}
function ec40() {
var iphase = document.ef40.phase.selectedIndex;
var row0 = document.getElementById("h2pf0");
var row1 = document.getElementById("h2pf1");
if( iphase==0 )
{
document.ef40.pf.disabled = true;
document.ef40.pf.style.backgroundColor = "#f0f0f0";
row0.style.display = 'none';
row1.style.display = 'none';
}
else if( iphase==1 )
{
document.ef40.pf.disabled = false;
document.ef40.pf.style.backgroundColor = "#ffffff";
row0.style.display = 'none';
row1.style.display = '';
}
else
{
document.ef40.pf.disabled = false;
document.ef40.pf.style.backgroundColor = "#ffffff";
row0.style.display = '';
row1.style.display = '';
}
}
function ec43(ef43) {
var iphase = document.ef43.phase.selectedIndex;
var row1 = document.getElementById("h3pf1");
if( iphase==0 )
{
document.ef43.pf.disabled = true;
document.ef43.pf.style.backgroundColor = "#f0f0f0";
row1.style.display = 'none';
}
else
{
document.ef43.pf.disabled = false;
document.ef43.pf.style.backgroundColor = "#ffffff";
row1.style.display = '';
}
}
function ec47()
{
var i = document.ef47.awgsel.selectedIndex;
if( i==1 ) awg = "0000";
if( i==2 ) awg = "000";
if( i==3 ) awg = "00";
if( i>3 )  awg = i-4;
document.ef47.x.value = awg;
}
function ec47_1()
{
var i = document.ef47.type.selectedIndex;
var ilook=[1.72e-8, 2.82e-8, 1.43e-7, 4.6e-7, 2.44e-8, 1.1e-6, 6.99e-8, 1.59e-8];
var res = ilook[i];
res = res.toExponential().toString();
document.ef47.r.value = res;
}
function docal_ec47()
{
n = document.ef47.x.value;
if( n=="000000" || n=="6/0" ) n=-5;
if( n=="00000" || n=="5/0" ) n=-4;
if( n=="0000" || n=="4/0" ) n=-3;
if( n=="000" || n=="3/0" ) n=-2;
if( n=="00" || n=="2/0" ) n=-1;
din = 0.005*Math.pow(92,((36-n)/39));
dmm = 0.127*Math.pow(92,((36-n)/39));
amil = 1000*din*din;
ain = Math.PI/4*din*din;
amm = Math.PI/4*dmm*dmm;
document.ef47.din.value = din.toFixed(4);
document.ef47.dmm.value = dmm.toFixed(4);
document.ef47.amil.value = amil.toFixed(4);
document.ef47.ain.value  = ain.toFixed(4);
document.ef47.amm.value  = amm.toFixed(4);
var res = document.ef47.r.value;
rft = 0.3048e9*res/(25.4*25.4*ain);
rm = 1e9*res/amm;
document.ef47.rft.value = rft.toFixed(4);
document.ef47.rm.value  = rm.toFixed(4);
}
function nconvert1(x1,x2) {
var iphase = document.ef1.phase.selectedIndex;
var ivolt = document.ef1.volt.selectedIndex;
var pf = document.ef1.pf.value;
var kw = x1*x2/1000;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef1.pf.focus();
return;
}
if( iphase==1 )
kw*=pf;
else if( iphase==2 )
{
if( ivolt==0 )
kw*=(pf*Math.sqrt(3));
else
kw*=(pf*3);
}
return kw;
}
function nconvert3(x1,x2) {
var iphase = document.ef3.phase.selectedIndex;
var kva = x1*x2;
if( iphase==1 )
kva*=Math.sqrt(3);
return kva;
}
function nconvert4(x1,x2,x3) {
var isel = document.ef4.C1.selectedIndex;
var v;
if( isel==0 )
v=x2/x1;
else
v=x3*x1;
return v;
}
function nconvert5(x1,x2) {
var iphase = document.ef5.phase.selectedIndex;
var ivolt = document.ef5.volt.selectedIndex;
var pf = document.ef5.pf.value;
var w = x1*x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef5.pf.focus();
return;
}
if( iphase==1 )
w*=pf;
else if( iphase==2 )
{
if( ivolt==0 )
w*=(pf*Math.sqrt(3));
else
w*=(pf*3);
}
return w;
}
function nconvert8(x1,x2) {
return x1/x2;
}
function nconvert9(x1,x2) {
return x1/x2;
}
function nconvert10(x1,x2) {
var iphase = document.ef10.phase.selectedIndex;
var ivolt = document.ef10.volt.selectedIndex;
var amps = 1000*x1/x2;
if( iphase==1 )
{
if( ivolt==0 )
amps/=Math.sqrt(3);
else
amps/=3;
}
amps = amps.toFixed(3);
return amps ;
}
function nconvert11(x1,x2) {
return x1*x2*1000;
}
function nconvert12(x1,x2) {
if( x2>1 || x2<0 )
{
alert('power factor from 0 to 1');
document.ef12.x2.value = '';
return Number.NaN;
}
else
return x1*x2;
}
function nconvert13(x) {
return x*1000;
}
function nconvert14(x1,x2) {
var iphase = document.ef14.phase.selectedIndex;
var ivolt = document.ef14.volt.selectedIndex;
var pf = document.ef14.pf.value;
var kw = 1000*x1/x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef14.pf.focus();
return;
}
if( iphase==1 )
kw/=pf;
else if( iphase==2 )
{
if( ivolt==0 )
kw/=(pf*Math.sqrt(3));
else
kw/=(pf*3);
}
return kw;
}
function nconvert15(x1,x2) {
var iphase = document.ef15.phase.selectedIndex;
var pf = document.ef15.pf.value;
var kw = 1000*x1/x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef15.pf.focus();
return;
}
if( iphase==1 )
kw/=pf;
else if( iphase==2 )
kw/=(pf*Math.sqrt(3));
return kw;
}
function nconvert16(x1,x2) {
return x1*x2;
}
function nconvert17(x1,x2) {
return x1/x2*1000;
}
function nconvert18(x1,x2) {
if( x2>1 || x2<0 )
{
alert('power factor from 0 to 1');
document.ef18.x2.value = '';
return Number.NaN;
}
else
return x1/x2;
}
function nconvert19(x1,x2) {
return x1/x2;
}
function nconvert20(x1,x2) {
return(1000*x1/x2);
}
function nconvert21(x1,x2) {
var wh = x1*x2/1000;
return wh;
}
function nconvert26(x1,x2) {
var iphase = document.ef26.phase.selectedIndex;
var amps = x1/x2;
if( iphase==1 )
amps/=Math.sqrt(3);
return amps ;
}
function nconvert27(x1,x2) {
if( x2>1 || x2<0 )
{
alert('power factor from 0 to 1');
document.ef27.x2.value = '';
return Number.NaN;
}
else
return x1*x2;
}
function nconvert28(x1,x2) {
return x1*x2/1000;
}
function nconvert29(x1,x2) {
if( x2>1 || x2<0 )
{
alert('power factor from 0 to 1');
document.ef29.x2.value = '';
return Number.NaN;
}
else
return x1*x2;
}
function nconvert30(x1,x2) {
return x1*x2/1000;
}
function nconvert31(x) {
return x/1000;
}
function nconvert34(x1,x2,x3) {
var isel = document.ef34.C1.selectedIndex;
var i;
if( isel==0 )
i=x2/x1;
else
i=x1/x3;
return i;
}
function nconvert35(x1,x2) {
var iphase = document.ef35.phase.selectedIndex;
var pf = document.ef35.pf.value;
var w = x1*x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef35.pf.focus();
return;
}
if( iphase==1 )
w*=pf;
else if( iphase==2 )
w*=(pf*Math.sqrt(3));
return w;
}
function nconvert36(x1,x2) {
var iphase = document.ef36.phase.selectedIndex;
var pf = document.ef36.pf.value;
var kw = x1*x2/1000;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef36.pf.focus();
return;
}
if( iphase==1 )
kw*=pf;
else if( iphase==2 )
kw*=(pf*Math.sqrt(3));
return kw;
}
function nconvert37(x1,x2) {
return x1*x2;
}
function nconvert38(x1,x2,x3) {
var ictype = document.ef38.charge_type.selectedIndex;
var ev,y;
if( ictype==0 )
ev = x1*x2;
else
ev = x1*x3/1.602176565e-19;
return ev;
}
function nconvert40(x1,x2) {
var iphase = document.ef40.phase.selectedIndex;
var ivolt = document.ef40.volt.selectedIndex;
var pf = document.ef40.pf.value;
var w = x1/x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef40.pf.focus();
return;
}
if( iphase==1 )
w/=pf;
else if( iphase==2 )
{
if( ivolt==0 )
w/=(pf*Math.sqrt(3));
else
w/=(pf*3);
}
return w;
}
function nconvert41(x1,x2) {
return x1*x2;
}
function nconvert42(x1,x2) {
return(x1*x2/1000);
}
function nconvert43(x1,x2) {
var iphase = document.ef43.phase.selectedIndex;
var pf = document.ef43.pf.value;
var w = x1/x2;
if( pf<0 || pf>1 )
{
alert('Please enter power factor from 0 to 1');
document.ef43.pf.focus();
return;
}
if( iphase==1 )
w/=pf;
else if( iphase==2 )
w/=(pf*Math.sqrt(3));
return w;
}
function nconvert44(x1,x2) {
if( x2>1 || x2<0 )
{
alert('power factor from 0 to 1');
document.ef44.x2.value = '';
return Number.NaN;
}
else
return x1/x2;
}
function nconvert45(x1,x2) {
return x1/x2/1000;
}
function nconvert46(x1,x2) {
var mah = 1000*x1/x2;
return mah;
}
function setfocus(form) {
form.x.focus();
}
function calc(form) {
x = form.x.value;
y = nconvert13(x);
y = roundresult(y);
form.y.value = y;
}
function calctest(form) {
x = form.x.value;
y = convert(x);
y = roundresult1(y);
form.y.value = y;
}
function docalpa(form) {
if (form.name == "ef1")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert1(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef2")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert2(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef3")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert3(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef5")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert5(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef8")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert8(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef9")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert9(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef10")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert10(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef11")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert11(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef12")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert12(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef14")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert14(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef15")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert15(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef16")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert16(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef17")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert17(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef18")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert18(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef19")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert19(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef20")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert20(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef21")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert21(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef26")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert26(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef27")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert27(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef28")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert28(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef29")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert29(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef30")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert30(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef31")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert31(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef35")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert35(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef36")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert36(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef37")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert37(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef40")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert40(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef41")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert41(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef42")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert42(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef43")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert43(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef44")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert44(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef45")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert45(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef46")
{
x1 = form.x1.value;
x2 = form.x2.value;
y  = nconvert46(x1,x2);
y  = roundresult(y);
form.y.value = y;
}
}
function docalpa_1(form) {
if (form.name == "ef4")
{
x1 = form.x1.value;
x2 = form.x2.value;
x3 = form.x3.value;
y  = nconvert4(x1,x2,x3);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef34")
{
x1 = form.x1.value;
x2 = form.x2.value;
x3 = form.x3.value;
y  = nconvert34(x1,x2,x3);
y  = roundresult(y);
form.y.value = y;
}
else if (form.name == "ef38")
{
x1 = form.x1.value;
x2 = form.x2.value;
x3 = form.x3.value;
y  = nconvert38(x1,x2,x3);
y  = roundresult(y);
form.y.value = y;
}
}
function calc5(form) {
x = form.x.value;
y  = convert1(x);
y  = roundresult(y);
form.y1.value = y;
y  = convert2(x);
y  = roundresult(y);
form.y2.value = y;
}
function calcbase(form,b1,b2) {
x = form.x.value;
form.y.value = convertbase(x,b1,b2);
}
function calcbase2(form) {
x = form.x.value;
y = convert(x);
form.y.value = y;
}
function calc6(form)
{
i2 = form.Select2.selectedIndex;
p = form.Text1.value;
h = form.Text2.value;
if( p=='' || h=='' ) return;
if( i2==0 ) p/=1000;
kwh_day   = p*h;
kwh_month = kwh_day*30;
kwh_year  = kwh_day*365;
kwh_day   = roundnum(kwh_day,5);
kwh_month = roundnum(kwh_month,5);
kwh_year  = roundnum(kwh_year,5);
form.Text8.value  = kwh_day;
form.Text9.value  = kwh_month;
form.Text10.value = kwh_year;
}
function calc7(form) {
var x1 = form.x1.value;
var x2 = form.x2.value;
var x3 = form.x3.value;
var ictype = form.charge_type.selectedIndex;
var v,y;
if( ictype==0 )
v = x1/x2;
else
v = 1.602176565e-19*x1/x3;
y  = roundresult(v);
yy = y.toString();
if( yy.length>12 ) {
y = parseFloat(y);
y = y.toPrecision(10);
}
form.y.value = y;
}
function roundresult(x) {
y = parseFloat(x);
y = roundnum(y,10);
return y;
}
function roundnum(x,p) {
var i;
var n=parseFloat(x);
var m=n.toPrecision(p+1);
var y=String(m);
i=y.indexOf('e');
if( i==-1 )	i=y.length;
j=y.indexOf('.');
if( i>j && j!=-1 )
{
while(i>0)
{
if(y.charAt(--i)=='0')
y = removeAt(y,i);
else
break;
}
if(y.charAt(i)=='.')
y = removeAt(y,i);
}
return y;
}
function removeAt(s,i) {
s = s.substring(0,i)+s.substring(i+1,s.length);
return s;
}
var prevIndex =["0","2","2","2"];
var prevIndex2=["0","2","0","0"];
function valu703(obj) {
e = document.ef24.e.value;
t = document.ef24.t.value;
p = document.ef24.p0.value;
count = 0;
if( e!="" ) count++;
if( t!="" ) count++;
if( p!="" ) count++;
if( count<2 )
document.ef24.bcalc3.disabled=true;
else
document.ef24.bcalc3.disabled=false;
}
function valu714() {
e = document.ef24.e.value;
t = document.ef24.t.value;
p = document.ef24.p0.value;
if( e!="" && t!="" ) p=e/t;
else if( e!="" && p!="" ) t=e/p;
else if( p!="" && t!="" ) e=p*t;
document.ef24.e.value = roundnum(e,8);
document.ef24.t.value = roundnum(t,8);
document.ef24.p0.value = roundnum(p,8);
}
function valu705(obj) {
r = document.ef22.r.value;
i = document.ef22.i.value;
v = document.ef22.v.value;
p = document.ef22.p.value;
count = 0;
if( r!="" ) count++;
if( i!="" ) count++;
if( v!="" ) count++;
if( p!="" ) count++;
if( count<2 )
document.ef22.bcalc.disabled=true;
else
document.ef22.bcalc.disabled=false;
}
function valu708(sel, i) {
if( i==0 ) txt=document.ef22.r;
else if( i==1 ) txt=document.ef22.i;
else if( i==2 ) txt=document.ef22.v;
else if( i==3 ) txt=document.ef22.p;
if( txt.value=='' ) return;
di = sel.selectedIndex-prevIndex[i];
txt.value = roundnum(txt.value/Math.pow(1000, di), 8);
prevIndex[i] = sel.selectedIndex;
}
function valu709() {
fr = Math.pow(10,3*document.ef22.cr.selectedIndex);
fi = Math.pow(10,3*document.ef22.ci.selectedIndex-6);
fv = Math.pow(10,3*document.ef22.cv.selectedIndex-6);
fp = Math.pow(10,3*document.ef22.cp.selectedIndex-6);
r = fr*document.ef22.r.value;
i = fi*document.ef22.i.value;
v = fv*document.ef22.v.value;
p = fp*document.ef22.p.value;
if( r!="" && v!="" ) {i=v/r; p=v*i;}
else if( r!="" && i!="" ) {v=i*r; p=v*i;}
else if( r!="" && p!="" ) {v=Math.sqrt(p*r); i=p/v;}
else if( i!="" && v!="" ) {r=v/i; p=v*i;}
else if( i!="" && p!="" ) {v=p/i; r=v/i;}
else if( v!="" && p!="" ) {i=p/v; r=v/i;}
r /= fr;
i /= fi;
v /= fv;
p /= fp;
document.ef22.r.value = roundnum(r,8);
document.ef22.i.value = roundnum(i,8);
document.ef22.v.value = roundnum(v,8);
document.ef22.p.value = roundnum(p,8);
}
function valu704(obj) {
z = document.ef23.z.value;
i = document.ef23.i2.value;
v = document.ef23.v2.value;
s = document.ef23.s.value;
zdeg = document.ef23.zdeg.value;
ideg = document.ef23.ideg.value;
vdeg = document.ef23.vdeg.value;
sdeg = document.ef23.sdeg.value;
zcar = document.ef23.z_car.value;
scar = document.ef23.s_car.value;
count = 0;
if( (z!="" && zdeg!="" ) || zcar!="" ) count++;
if( i!=""  && ideg!="" ) count++;
if( v!=""  && vdeg!="" ) count++;
if( (s!="" && sdeg!="" ) || sdeg!="" ) count++;
if( count<2 )
document.ef23.bcalc2.disabled=true;
else
document.ef23.bcalc2.disabled=false;
}
function valu710(sel, i) {
if( i==0 ) txt=document.ef23.z;
else if( i==1 ) txt=document.ef23.i2;
else if( i==2 ) txt=document.ef23.v2;
else if( i==3 ) txt=document.ef23.s;
if( txt.value=='' ) return;
di = sel.selectedIndex-prevIndex2[i];
txt.value = roundnum(txt.value/Math.pow(1000, di), 8);
prevIndex2[i] = sel.selectedIndex;
}
function valu713() {
fz = Math.pow(10,3*document.ef23.cz.selectedIndex);
fi = Math.pow(10,3*document.ef23.ci2.selectedIndex-6);
fv = Math.pow(10,3*document.ef23.cv2.selectedIndex);
fs = Math.pow(10,3*document.ef23.cs.selectedIndex);
z = fz*document.ef23.z.value;
i = fi*document.ef23.i2.value;
v = fv*document.ef23.v2.value;
s = fs*document.ef23.s.value;
zdeg = document.ef23.zdeg.value;
ideg = document.ef23.ideg.value;
vdeg = document.ef23.vdeg.value;
sdeg = document.ef23.sdeg.value;
_zdeg = parseFloat(zdeg);
_ideg = parseFloat(ideg);
_vdeg = parseFloat(vdeg);
_sdeg = parseFloat(sdeg);
if( z!="" && v!="" && zdeg!="" && vdeg!="" ) {i=v/z; s=v*i; ideg=_vdeg-_zdeg; sdeg=_zdeg; }
else if( z!="" && i!="" && zdeg!="" && ideg!="" ) {v=i*z; s=v*i; vdeg=_zdeg+_ideg; sdeg=_zdeg; }
else if( z!="" && s!="" && zdeg!="" && sdeg!="" ) {v=Math.sqrt(s*z); i=s/v; vdeg=(_sdeg+_zdeg)/2; ideg=_sdeg-vdeg; }
else if( i!="" && v!="" && ideg!="" && vdeg!="" ) {z=v/i; s=v*i; zdeg=_vdeg-_ideg; sdeg=zdeg;}
else if( i!="" && s!="" && ideg!="" && sdeg!="" ) {v=s/i; z=v/i; zdeg=_sdeg; vdeg=zdeg+_ideg; }
else if( v!="" && s!="" && vdeg!="" && sdeg!="" ) {i=s/v; z=v/i; zdeg=_sdeg; ideg=_vdeg-zdeg; }
z /= fz;
i /= fi;
v /= fv;
s /= fs;
document.ef23.z.value  = roundnum(z,8);
document.ef23.i2.value = roundnum(i,8);
document.ef23.v2.value = roundnum(v,8);
document.ef23.s.value  = roundnum(s,8);
document.ef23.zdeg.value = roundnum(zdeg,5);
document.ef23.ideg.value = roundnum(ideg,5);
document.ef23.vdeg.value = roundnum(vdeg,5);
document.ef23.sdeg.value = roundnum(sdeg,5);
if( document.ef23.z_car.value=='' ) valu712(0);
if( document.ef23.s_car.value=='' ) valu712(1);
}
function valu712(ix)
{
if( ix==0 )
{
r = document.ef23.z.value;
ang = document.ef23.zdeg.value;
}
else
{
r = document.ef23.s.value
ang = document.ef23.sdeg.value;
}
if( r=='' || ang=='' ) return;
ang = ang/180*Math.PI;
x = r*Math.cos(ang);
y = r*Math.sin(ang);
if( y<0 ) { y=-y; sign='-'; } else sign='+';
x = x.toFixed(2);
y = y.toFixed(2);
p = x+sign+'j'+y;
if( ix==0 )
document.ef23.z_car.value = p;
else
document.ef23.s_car.value = p;
}
function valu711(ix)
{
if( ix==0 )
{
car = document.ef23.z_car.value;
c   = document.ef23.cz.selectedIndex;
}
else
{
car = document.ef23.s_car.value
c   = document.ef23.cs.selectedIndex;
}
if( car=='' ) return;
i = car.indexOf('j');
if( i==-1 ) car+='+j0';
if( i==0  ) car='0+'+car;
if( i==1  ) car='0'+car;
len = car.length;
i1 = car.indexOf('+');
i2 = car.indexOf('-');
i3 = car.indexOf(' ');
if( i2==0 ) sign1=-1; else sign1=1;
if( i1<1 ) i1=100;
if( i2<1 ) i2=100;
if( i3<1 ) i3=100;
i = Math.min(i1,i2,i3);
if( i==i2 ) sign2=-1; else sign2=1;
x = car.substring(0,i);
x = parseFloat(x);
i = car.indexOf('j');
y = car.substring(i+1,len);
y = parseFloat(y);
y*= sign2;
mag = Math.sqrt(x*x+y*y);
if( x!=0 )
ang = Math.atan(y/x)*180/Math.PI;
else
ang = (y>0 ? 90 : (y<0 ? -90 : 0));
if( sign1==-1 && ang!=0 )
{
if( ang>0 )
ang-=180;
else
ang+=180;
}
mag /= Math.pow(10,(c*3));
mag = mag.toFixed(2);
ang = ang.toFixed(0);
if( ix==0 )
{
document.ef23.z.value = mag;
document.ef23.zdeg.value = ang;
}
else
{
document.ef23.s.value = mag;
document.ef23.sdeg.value = ang;
}
}
