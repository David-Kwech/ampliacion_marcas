/*
4. 
*/

function menor2(a,b) 
{
    if (a<b) return a;
    else return b;
}

//console.log(menor2(a,b,c,d));

function menor4(a,b,c,d) 
{
    let m1 = menor2(a,b);
    let m2 = menor4(c,d);

    return menor2(m1,m2);
    //return menor2(menor2(a,b),menor2(c,d));
}

//console.log(menor4(4,2,-6,20));

function menor16(a,b,c,d,e,f,g,h,i,j,k,l,n,m,o,p) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(n,m,o,p);

    return menor4(m1,m2,m3,m4);
}

//console.log(menor16(4,2,-6,20,2,-6,20,2,-666,20,2,-6,20));



function menor3(a,b,c) 
{
    let r1 = menor2(a,b);
    return menor2(r1,c);
}

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,n,m,o) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor3(n,m,o);

    return menor4(m1,m2,m3,m4);
}

console.log(menor15(10,50,48,37,-4,5,7,8,2,34,23,12,67,89,100));

function menor15(a,b,c,d,e,f,g,h,i,j,k,l,n,m,o) 
{
    let m1 = menor4(a,b,c,d);
    let m2 = menor4(e,f,g,h);
    let m3 = menor4(i,j,k,l);
    let m4 = menor4(m,n,o,m3);

    return menor4(m1,m2,m3,m4);
}