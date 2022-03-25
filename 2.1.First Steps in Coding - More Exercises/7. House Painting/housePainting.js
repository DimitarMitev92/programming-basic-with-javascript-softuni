function housePainting(input){
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);

    const prednaIZadnaStrana = (2*x*x) - (1.2*2);
    const stranichni = (2*x*y) - (2*1.5*1.5);
    const zeleno = prednaIZadnaStrana + stranichni;
    console.log((zeleno / 3.4).toFixed(2));

    const triygylnici = (x*h/2)*2;
    const pokrivPravoygylnik = 2*x * y;
    const cherveno = triygylnici + pokrivPravoygylnik;
    console.log((cherveno/4.3).toFixed(2)); 
}
