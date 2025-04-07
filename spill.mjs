//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(Velkommen);


//GLOBALE VARIABLER

const sporsmalliste = [sporsmal1, sporsmal2, sporsmal3, sporsmal4, sporsmal5, sporsmal6, sporsmal7, sporsmal8, sporsmal9, sporsmal10,
    sporsmal11, sporsmal12, sporsmal13, sporsmal14, sporsmal15, sporsmal16, sporsmal17, sporsmal18, sporsmal19,
    sporsmal20, sporsmal21, sporsmal22, sporsmal23, sporsmal24, sporsmal25];
const utfordringliste = [utfordring1, utfordring2, utfordring3, utfordring4, utfordring5, utfordring6, utfordring7, utfordring8,
    utfordring9, utfordring10, utfordring11, utfordring12, utfordring13, utfordring14, utfordring15, utfordring16, utfordring17,
    utfordring18, utfordring19, utfordring20, utfordring21, utfordring22, utfordring23, utfordring24, utfordring25];
const bruktsporsmalliste = [];
const brukturdringliste = [];

let teller = 0;

let antallKort= 0;
let nestePlanet = null;
//GLOBALE VARIABLER SLUTT

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const bakgrunn1 = new Blocks.Image("bilder/bakgrunn.jpg", {x:-8,y:-8,width:1088,height:818});
    const radiostemme = new Blocks.Sound("lyder/manuslesing/radiostemme.m4a",{loop:false,auto:true});
    radiostemme.start();
    const img1 = new Blocks.Image("bilder/startscene/startscene_startknapp.png", {x:300,y:300,width:400,height:200});
    Actions.Click(img1, () => {
        radiostemme.stop();
        GaaTil(sceneStart);
    })
}


function sceneStart()
{

	const bakgrunn1 = new Blocks.Image("bilder/bakgrunn.jpg", {x:-8,y:-8,width:1088,height:818});
    const scene1stein = new Blocks.Image("bilder/startscene/startscene_stein.png", {x:-275,y:650,width:1475,height:200});
    const romskip = new Blocks.Image("bilder/romskip.png", {x:0,y:150,width:400,height:600});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:200,y:200,width:500,height:700});
    bibop_snakke.start();
    const scenestartdialog = new Blocks.Sound("lyder/manuslesing/scene2.mp3",{loop:false,auto:true});
    scenestartdialog.start();
    const scene1snakkeboble = new Blocks.Image("bilder/manus/scene_2.png", {x:350,y:-100,width:900,height:600});
    const pilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    Actions.Click(pilE, () => {
        antallKort = 3;
        nestePlanet = planet1_ostus;
        scenestartdialog.stop();
        GaaTil(sti)
    })  
}
function tilfeldingTall(maksGrense) {
    return Math.floor(Math.random()*maksGrense)
}

function sti()
{
    
  const bakgrunn2 = new Blocks.Image("bilder/bakgrunn.jpg", {x:-8,y:-8,width:1088,height:818});
  let stidialog = null;
  if (sporsmalliste.length === 0) {
    sporsmalliste.push(...bruktsporsmalliste)
  }
  if (utfordringliste.length === 0) {
    utfordringliste.push(...brukturdringliste)
  }
  if (teller === 0) {
    stidialog = new Blocks.Sound("lyder/manuslesing/scene3.mp3",{loop:false,auto:true});
  }
    if (teller === antallKort) {
        //Gå til neste planet pil
        //Kort med gå videre
        const nesteplanet = new Blocks.Image("bilder/manus/nesteplanet.png",{x:-45,y:0,width:900,height:700});
        //Kort med gå videre slutt
        const pilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
        Actions.Click(pilE, () => {
            antallKort = 0;
            teller = 0;
            GaaTil(nestePlanet)
        })  
        return
    }
  const sporsmalkort = new Blocks.Image("bilder/click/sporsmalkort.jpg", {x:100,y:150,width:300,height:500});
  Actions.Click(sporsmalkort, () => {
    teller++;
    if (stidialog !== null) {
        stidialog.stop();
    }
    const sporsmaalsIndex = tilfeldingTall(sporsmalliste.length)
    const sporsmaal = sporsmalliste[sporsmaalsIndex];
    sporsmalliste.splice(sporsmaalsIndex,1);
    bruktsporsmalliste.push(sporsmaal);
    GaaTil(sporsmaal);
    
  })
  const utfordringskort = new Blocks.Image("bilder/click/utfordringskort.jpg", {x:600,y:150,width:300,height:500});
  Actions.Click(utfordringskort, () => {
    teller++
    const utfordringsIndex = tilfeldingTall(utfordringliste.length)
    const utfordring = utfordringliste[utfordringsIndex];
    utfordringliste.splice(utfordringsIndex,1);
    brukturdringliste.push(utfordring);
    GaaTil(utfordring);
  })

}
    


//PLANET1 OSTUS--------------------------------------------------------------------------------------------------

function planet1_ostus ()
{
    const planet1bakgrunn = new Blocks.Image("bilder/planetbakgrunn/ostusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet1romskip = new Blocks.Image("bilder/romskip.png", {x:420,y:500,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:-50,y:220,width:500,height:700});
    bibop_snakke.start();
    const planet1snakkeboble1 = new Blocks.Image("bilder/manus/scene_4.png", {x:50,y:-100,width:900,height:600});
    const planet1romvesen = new Blocks.Image("bilder/romvesen/ostus_Alien.png", {x:200,y:280,width:700,height:600});
    const planet1musikk = new Blocks.Sound("lyder/musikk/Ostus.m4a",{loop:false,auto:true,volume:0.01});
    const planet1dialog1 = new Blocks.Sound("lyder/manuslesing/scene4.mp3",{loop:false,auto:true});
    planet1dialog1.start();
    const planet1PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet1PilE, () => {
        planet1dialog1.stop();
    GaaTil(planet1_ostus2)
})
}

function planet1_ostus2 ()
{
    const planet1bakgrunn = new Blocks.Image("bilder/planetbakgrunn/ostusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet1romskip = new Blocks.Image("bilder/romskip.png", {x:420,y:500,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:-50,y:220,width:500,height:700});
    bibop_snakke.start();
    const planet1snakkeboble2 = new Blocks.Image("bilder/manus/scene_5.png", {x:50,y:-100,width:900,height:600});
    const planet1romvesen = new Blocks.Image("bilder/romvesen/ostus_Alien.png", {x:200,y:280,width:700,height:600});
    const planet1dialog2 = new Blocks.Sound("lyder/manuslesing/scene5.mp3",{loop:false,auto:true});
    planet1dialog2.start();
    const planet1PilE2 = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet1PilE2, () => {
        antallKort = 3;
        nestePlanet = planet2_tallus;
        planet1dialog2.stop();
        GaaTil(sti)
    })
}
//PLANET1 OSTUS---------------------------------------------------------------------------------------------------------

//PLANET2 TALLUS--------------------------------------------------------------------------------------------------------

function planet2_tallus ()
{
    const planet2bakgrunn = new Blocks.Image("bilder/planetbakgrunn/tallusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet2romskip = new Blocks.Image("bilder/romskip.png", {x:350,y:500,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:-50,y:220,width:500,height:700});
    bibop_snakke.start();
    const planet2snakkeboble = new Blocks.Image("bilder/manus/scene_6.png", {x:50,y:-100,width:900,height:600});
    const planet2romvesen = new Blocks.Image("bilder/romvesen/tallus_Alien.png", {x:200,y:280,width:700,height:600});
    const planet2musikk = new Blocks.Sound("lyder/musikk/Tallus.m4a",{loop:false,auto:true,volume:0.01});
    const planet2dialog = new Blocks.Sound("lyder/manuslesing/scene6.mp3",{loop:false,auto:true});
    planet2dialog.start();
    const planet2PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet2PilE, () => {
        planet2dialog.stop();
    GaaTil(planet2_tallus2)
})
}

function planet2_tallus2 ()
{
    const romskipbakgrunn = new Blocks.Image("bilder/planetbakgrunn/romskip_innside.jpg", {x:-8,y:-8,width:1088,height:818});
    const stol1 = new Blocks.Image("bilder/stol/Stol1.png", {x:350,y:260,width:600,height:500});
    const stol2 = new Blocks.Image("bilder/stol/Stol2.png", {x:600,y:350,width:600,height:500});
    const stol3 = new Blocks.Image("bilder/stol/Stol3.png", {x:-300,y:120,width:1000,height:800});
    const planet2PilE2 = new Blocks.Image("bilder/click/pilE_liten.png", {x:800,y:80,width:250,height:250});
    Actions.Click(planet2PilE2, () => {
    GaaTil(planet2_tallus3)
})
}

function planet2_tallus3 ()
{
    const romskipbakgrunn = new Blocks.Image("bilder/planetbakgrunn/romskip_innside.jpg", {x:-8,y:-8,width:1088,height:818});
    const stol1 = new Blocks.Image("bilder/stol/Stol1.png", {x:350,y:260,width:600,height:500});
    const stol2 = new Blocks.Image("bilder/stol/Stol2.png", {x:600,y:350,width:600,height:500});
    const stol3 = new Blocks.Image("bilder/stol/Stol3.png", {x:-300,y:120,width:1000,height:800});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:-50,y:220,width:500,height:700});
    bibop_snakke.start();
    const planet2snakkeboble = new Blocks.Image("bilder/manus/scene_7.png", {x:50,y:-100,width:900,height:600});
    const planet2dialog3 = new Blocks.Sound("lyder/manuslesing/scene7.mp3",{loop:false,auto:true});
    planet2dialog3.start();
    const planet2romvesen = new Blocks.Image("bilder/romvesen/tallus_Alien.png", {x:200,y:280,width:700,height:600});
    const planet2PilE3 = new Blocks.Image("bilder/click/pilE_liten.png", {x:800,y:80,width:250,height:250});
    Actions.Click(planet2PilE3, () => {
        antallKort = 3;
        nestePlanet = planet3_blubblubia;
        planet2dialog3.stop();
        GaaTil(sti)
})
}



//PLANET2 TALLUS----------------------------------------------------------------------------------------------------------

//PLANET3 BLUBBLUBIA------------------------------------------------------------------------------------------------------

function planet3_blubblubia ()
{
    const planet3bakgrunn = new Blocks.Image("bilder/planetbakgrunn/blubbbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet3romskip = new Blocks.Image("bilder/romskip.png", {x:850,y:130,width:75,height:150});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:95,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet3snakkeboble = new Blocks.Image("bilder/manus/scene_8.png", {x:50,y:-100,width:900,height:600});
    const planet3romvesen = new Blocks.Image("bilder/romvesen/blubbblubblia_Alien.png", {x:250,y:220,width:700,height:600});
    const planet3musikk = new Blocks.Sound("lyder/musikk/Blub.m4a",{loop:false,auto:true,volume:0.01});
    const planet3dialog = new Blocks.Sound("lyder/manuslesing/scene8.mp3",{loop:false,auto:true});
    planet3dialog.start();
    const planet3PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet3PilE, () => {
        planet3dialog.stop();
    GaaTil(planet3_blubblubia2)
})
}

function planet3_blubblubia2 ()
{
    const planet3bakgrunn = new Blocks.Image("bilder/planetbakgrunn/blubbbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet3romskip = new Blocks.Image("bilder/romskip.png", {x:850,y:130,width:75,height:150});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:95,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet3snakkeboble2 = new Blocks.Image("bilder/manus/scene_9.png", {x:50,y:-100,width:900,height:600});
    const planet3romvesen = new Blocks.Image("bilder/romvesen/blubbblubblia_Alien.png", {x:250,y:220,width:700,height:600});
    const planet3dialog2 = new Blocks.Sound("lyder/manuslesing/scene9.mp3",{loop:false,auto:true});
    planet3dialog2.start();
    const planet3PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet3PilE, () => {
        antallKort = 3;
        nestePlanet = planet4_sylteria;
        planet3dialog2.stop();
        GaaTil(sti)
})
}

//PLANET3 BLUBBLUBIA------------------------------------------------------------------------------------------------------


//PLANET4 SYLTERIA--------------------------------------------------------------------------------------------------------

function planet4_sylteria ()
{
    const planet4bakgrunn = new Blocks.Image("bilder/planetbakgrunn/syltusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet4romskip = new Blocks.Image("bilder/romskip.png", {x:450,y:380,width:75,height:150});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:300,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet4snakkeboble = new Blocks.Image("bilder/manus/scene_10.png", {x:250,y:-100,width:900,height:600});
    const planet4romvesen = new Blocks.Image("bilder/romvesen/Romvesen_4.png", {x:-150,y:350,width:600,height:500});
    const planet4musikk = new Blocks.Sound("lyder/musikk/Sylteria.m4a",{loop:false,auto:true,volume:0.01});
    const planet4dialog = new Blocks.Sound("lyder/manuslesing/scene10.mp3",{loop:false,auto:true});
    planet4dialog.start();
    const planet4PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet4PilE, () => {
        planet4dialog.stop();
    GaaTil(planet4_sylteria2)
})
}

function planet4_sylteria2 ()
{
    const planet4bakgrunn = new Blocks.Image("bilder/planetbakgrunn/syltusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:-75,y:130,width:300,height:500});
    bibop_snakke.start();
    const planet4snakkeboble2 = new Blocks.Image("bilder/manus/scene_11.png", {x:-30,y:-80,width:600,height:400});
    const planet4romvesen = new Blocks.Image("bilder/romvesen/Romvesen_4.png", {x:-100,y:130,width:600,height:500});
    const planet4dialog2 = new Blocks.Sound("lyder/manuslesing/scene11.mp3",{loop:false,auto:true});
    planet4dialog2.start();
    const planet4PilE2 = new Blocks.Image("bilder/click/pilE_liten.png", {x:850,y:0,width:200,height:200});
    const skje1 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:900,y:600,width:75,height:175});
    Actions.Drag(skje1);
    const skje2 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:300,y:600,width:75,height:175});
    Actions.Drag(skje2);
    const skje3 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:500,y:500,width:75,height:175});
    Actions.Drag(skje3);
    const skje4 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:700,y:400,width:75,height:175});
    Actions.Drag(skje4);
    const skje5 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:650,y:550,width:75,height:175});
    Actions.Drag(skje5);
    const skje6 = new Blocks.Image("bilder/pynt/skjeliten.png",{x:50,y:620,width:75,height:175});
    Actions.Drag(skje6);
    Actions.Click(planet4PilE2, () => {
        planet4dialog2.stop();
    GaaTil(planet4_sylteria3)
})
}

function planet4_sylteria3 ()
{
    const planet4bakgrunn = new Blocks.Image("bilder/planetbakgrunn/syltusbakgrunn.png", {x:-8,y:-8,width:1088,height:818});
    const planet4romskip = new Blocks.Image("bilder/romskip.png", {x:450,y:380,width:75,height:150});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:300,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet4snakkeboble3 = new Blocks.Image("bilder/manus/scene_12.png", {x:250,y:-100,width:900,height:600});
    const planet4romvesen = new Blocks.Image("bilder/romvesen/Romvesen_4.png", {x:-150,y:350,width:600,height:500});
    const planet4dialog3 = new Blocks.Sound("lyder/manuslesing/scene12.mp3",{loop:false,auto:true});
    planet4dialog3.start();
    const planet4PilE3 = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet4PilE3, () => {
        antallKort = 3;
        nestePlanet = planet5_rimus;
        planet4dialog3.stop();
        GaaTil(sti)
})
}

//PLANET4 SYLTERIA--------------------------------------------------------------------------------------------------------

//PLANET5 RIMUS----------------------------------------------------------------------------------------------------------

function planet5_rimus ()
{
    const planet5bakgrunn = new Blocks.Image("bilder/planetbakgrunn/rimusbakgrunn.jpeg", {x:-8,y:-8,width:1088,height:818});
    const planet5romskip = new Blocks.Image("bilder/romskip.png", {x:660,y:350,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:100,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet5snakkeboble = new Blocks.Image("bilder/manus/scene_14.png", {x:50,y:-100,width:900,height:600});
    const planet5romvesen = new Blocks.Image("bilder/romvesen/rimus_Alien.png", {x:300,y:350,width:700,height:600});
    const planet5musikk = new Blocks.Sound("lyder/musikk/Rimus.m4a",{loop:false,auto:true,volume:0.01});
    const planet5dialog = new Blocks.Sound("lyder/manuslesing/scene14.mp3",{loop:false,auto:true});
    planet5dialog.start();
    const planet5PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet5PilE, () => {
        planet5dialog.stop();
    GaaTil(planet5_rimus2)
})
}

function planet5_rimus2 ()
{
    const planet5bakgrunn = new Blocks.Image("bilder/planetbakgrunn/rimusbakgrunn.jpeg", {x:-8,y:-8,width:1088,height:818});
    const planet5romskip = new Blocks.Image("bilder/romskip.png", {x:660,y:350,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:250,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet5snakkeboble2 = new Blocks.Image("bilder/manus/scene_15.png", {x:200,y:-100,width:900,height:600});
    const planet5romvesen = new Blocks.Image("bilder/romvesen/rimus_Alien.png", {x:-100,y:350,width:700,height:600});
    const planet5dialog2 = new Blocks.Sound("lyder/manuslesing/scene15.mp3",{loop:false,auto:true});
    planet5dialog2.start();
    const planet5PilE2 = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet5PilE2, () => {
        antallKort = 4;
        nestePlanet = planet6_noffmo;
        planet5dialog2.stop();
        GaaTil(sti)
})
}

//PLANET5 RIMUS----------------------------------------------------------------------------------------------------------

//PLANET6 NOFFMO---------------------------------------------------------------------------------------------------------

function planet6_noffmo ()
{
    const planet6bakgrunn = new Blocks.Image("bilder/planetbakgrunn/noffmobakgrunn.jpeg", {x:-8,y:-8,width:1088,height:818});
    const planet6romskip = new Blocks.Image("bilder/romskip.png", {x:650,y:300,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:0,y:230,width:500,height:700});
    bibop_snakke.start();
    const planet6snakkeboble = new Blocks.Image("bilder/manus/scene_17.png", {x:-50,y:-100,width:900,height:600});
    const planet6romvesen = new Blocks.Image("bilder/romvesen/Romvesen_3.png", {x:200,y:400,width:700,height:500});
    const planet3musikk = new Blocks.Sound("lyder/musikk/Noffmo.m4a",{loop:false,auto:true,volume:0.01});
    const planet6dialog = new Blocks.Sound("lyder/manuslesing/scene17.mp3",{loop:false,auto:true});
    planet6dialog.start();
    const planet6PilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(planet6PilE, () => {
        planet6dialog.stop();
    GaaTil(planet6_noffmo2)
})
}



function planet6_noffmo2 ()
{
    const planet6bakgrunn = new Blocks.Image("bilder/planetbakgrunn/noffmobakgrunn.jpeg", {x:-8,y:-8,width:1088,height:818});
    const planet6romskip = new Blocks.Image("bilder/romskip.png", {x:650,y:300,width:100,height:200});
    const planet6romvesen = new Blocks.Image("bilder/romvesen/Romvesen_3.png", {x:-50,y:470,width:600,height:400});
    const planet6snakkeboble2 = new Blocks.Image("bilder/manus/scene_18.png", {x:270,y:350,width:700,height:500});
    const planet6dialog2 = new Blocks.Sound("lyder/manuslesing/scene18.mp3",{loop:false,auto:true});
    planet6dialog2.start();
    const planet6ulv = new Blocks.Image("bilder/dyr/Ulv.png", {x:40,y:240,width:300,height:350});
    const planet6bjorn = new Blocks.Image("bilder/dyr/Bjorn.png", {x:340,y:140,width:400,height:400});
    const planet6gaupe = new Blocks.Image("bilder/dyr/Gaupe.png", {x:730,y:200,width:300,height:350});
    const planet6pilNW = new Blocks.Image("bilder/click/pilNW.png", {x:0,y:0,width:300,height:500});
    Actions.Click(planet6pilNW, () => {
    GaaTil(asteroide)
})
    const planet6pilN = new Blocks.Image("bilder/click/pilN.png", {x:380,y:-50,width:300,height:500});
    Actions.Click(planet6pilN, () => {
    GaaTil(romstasjon)
})
    const planet6pilNE = new Blocks.Image("bilder/click/pilNE.png", {x:750,y:0,width:300,height:500});
    Actions.Click(planet6pilNE, () => {
    GaaTil(asteroide)
})
}

//PLANET6 NOFFMO---------------------------------------------------------------------------------------------------------

//ASTEROIDE--------------------------------------------------------------------------------------------------------------

function asteroide ()
{
    const asteroidebakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn10.jpg", {x:-8,y:-8,width:1088,height:818});
    const asteroidebakke = new Blocks.Image("bilder/asteroide/A2.png", {x:-1000,y:260,width:3000,height:900});
    const asteroideibakgrunn = new Blocks.Image("bilder/asteroide/A4.png", {x:-100,y:0,width:400,height:300});
    const asteroideibakgrunn2 = new Blocks.Image("bilder/asteroide/A5.png", {x:150,y:-120,width:500,height:700});
    const asteroideibakgrunn3 = new Blocks.Image("bilder/asteroide/A1.png", {x:200,y:230,width:1000,height:600});
    const asteroideromskip = new Blocks.Image("bilder/romskip.png", {x:50,y:200,width:300,height:500});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:200,y:170,width:500,height:700});
    bibop_snakke.start();
    const asteroidesnakkeboble = new Blocks.Image("bilder/manus/scene_19.png", {x:350,y:-100,width:900,height:600});
    const asteroidedialog = new Blocks.Sound("lyder/manuslesing/scene19.mp3",{loop:false,auto:true});
    asteroidedialog.start();
    const asteroidePilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(asteroidePilE, () => {
        antallKort = 3;
        nestePlanet = bibopia;
        GaaTil(sti)
})
}

//ASTEROIDE--------------------------------------------------------------------------------------------------------------

//ROMSTASJON--------------------------------------------------------------------------------------------------------------

function romstasjon ()
{
    const romstasjonbakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg", {x:-8,y:-8,width:1088,height:818});
    const romstasjon = new Blocks.Image("bilder/romstasjon/romstasjon2.png", {x:-200,y:50,width:2000,height:1000});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:350,y:20,width:300,height:500});
    bibop_snakke.start();
    const romstasjonsnakkeboble = new Blocks.Image("bilder/manus/scene_20.png", {x:400,y:-90,width:800,height:500});
    const romstasjondialog = new Blocks.Sound("lyder/manuslesing/scene20.mp3",{loop:false,auto:true});
    romstasjondialog.start();
    const romstasjonPilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:100,width:500,height:700});
    Actions.Click(romstasjonPilE, () => {
        antallKort = 4;
        nestePlanet = bibopia;
        GaaTil(sti)
})
}

//ROMSTASJON--------------------------------------------------------------------------------------------------------------

//BIBOPIA-----------------------------------------------------------------------------------------------------------------

function bibopia ()
{
    const bibopiabakgrunn = new Blocks.Image("bilder/planetbakgrunn/bibopiabakgrunn.jpeg", {x:-8,y:-8,width:1088,height:818});
    const bibopiaromskip = new Blocks.Image("bilder/romskip.png", {x:650,y:300,width:100,height:200});
    const bibop_snakke =  new Blocks.CellAnimation(["bilder/bibopsnakk/bibopsnakk1.png", "bilder/bibopsnakk/bibopsnakk2.png", "bilder/bibopsnakk/bibopsnakk3.png", "bilder/bibopsnakk/bibopsnakk4.png"], {x:0,y:230,width:500,height:700});
    bibop_snakke.start();
    const bibopiasnakkeboble = new Blocks.Image("bilder/manus/scene_21.png", {x:-50,y:-100,width:900,height:600});
    const bibopiaromvesen = new Blocks.Image("bilder/romvesen/Pappa.png", {x:500,y:150,width:600,height:750});
    const bibopiamusikk = new Blocks.Sound("lyder/musikk/Bibopia.m4a",{loop:false,auto:true,volume:0.01});
    const bibopiadialog = new Blocks.Sound("lyder/manuslesing/scene21.mp3",{loop:false,auto:true});
    bibopiadialog.start();
    const bibopiaPilE = new Blocks.Image("bilder/click/pilE.png", {x:650,y:-180,width:500,height:700});
    Actions.Click(bibopiaPilE, () => {
        bibopiadialog.stop();
    GaaTil(Velkommen)
})
}

//BIBOPIA-----------------------------------------------------------------------------------------------------------------



//SPORSMAL----------------------------------------------------------------------------------------------------------------

function sporsmal1()
{
    const sporsmal1bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal1tekstboks = new Blocks.Image("bilder/sporsmal/s1.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal1dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal1.mp3",{loop:false,auto:true});
    sporsmal1dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}


function sporsmal2()
{
    const sporsmal2bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal2tekstboks = new Blocks.Image("bilder/sporsmal/s2.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal2dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal2.mp3",{loop:false,auto:true});
    sporsmal2dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal3()
{
    const sporsmal3bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal3tekstboks = new Blocks.Image("bilder/sporsmal/s3.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal3dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal3.mp3",{loop:false,auto:true});
    sporsmal3dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal4()
{
    const sporsmal4bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal4tekstboks = new Blocks.Image("bilder/sporsmal/s4.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal4dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal4.mp3",{loop:false,auto:true});
    sporsmal4dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal5()
{
    const sporsmal5bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal5tekstboks = new Blocks.Image("bilder/sporsmal/s5.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal5dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal5.mp3",{loop:false,auto:true});
    sporsmal5dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal6()
{
    const sporsmal6bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal6tekstboks = new Blocks.Image("bilder/sporsmal/s6.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal6dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal6.mp3",{loop:false,auto:true});
    sporsmal6dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal7()
{
    const sporsmal7bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal7tekstboks = new Blocks.Image("bilder/sporsmal/s7.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal7dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal7.mp3",{loop:false,auto:true});
    sporsmal7dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal8()
{
    const sporsmal8bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal8tekstboks = new Blocks.Image("bilder/sporsmal/s8.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal8dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal8.mp3",{loop:false,auto:true});
    sporsmal8dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal9()
{
    const sporsmal9bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn2.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal9tekstboks = new Blocks.Image("bilder/sporsmal/s9.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal9dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal9.mp3",{loop:false,auto:true});
    sporsmal9dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal10()
{
    const sporsmal10bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal10tekstboks = new Blocks.Image("bilder/sporsmal/s10.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal10dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal10.mp3",{loop:false,auto:true});
    sporsmal10dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal11()
{
    const sporsmal11bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal11tekstboks = new Blocks.Image("bilder/sporsmal/s11.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal11dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal11.mp3",{loop:false,auto:true});
    sporsmal11dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal12()
{
    const sporsmal12bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal12tekstboks = new Blocks.Image("bilder/sporsmal/s12.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal12dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal12.mp3",{loop:false,auto:true});
    sporsmal12dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal13()
{
    const sporsmal13bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal13tekstboks = new Blocks.Image("bilder/sporsmal/s13.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal13dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal13.mp3",{loop:false,auto:true});
    sporsmal13dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal14()
{
    const sporsmal14bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal14tekstboks = new Blocks.Image("bilder/sporsmal/s14.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal14dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal14.mp3",{loop:false,auto:true});
    sporsmal14dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal15()
{
    const sporsmal15bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal15tekstboks = new Blocks.Image("bilder/sporsmal/s15.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal15dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal15.mp3",{loop:false,auto:true});
    sporsmal15dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal16()
{
    const sporsmal16bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal16tekstboks = new Blocks.Image("bilder/sporsmal/s16.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal16dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal16.mp3",{loop:false,auto:true});
    sporsmal16dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })

}

    function sporsmal17()
{
    const sporsmal17bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn3.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal17tekstboks = new Blocks.Image("bilder/sporsmal/s17.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal17dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal17.mp3",{loop:false,auto:true});
    sporsmal17dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal18()
{
    const sporsmal18bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn4.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal18tekstboks = new Blocks.Image("bilder/sporsmal/s18.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal18dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal18.mp3",{loop:false,auto:true});
    sporsmal18dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal19()
{
    const sporsmal19bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn4.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal19tekstboks = new Blocks.Image("bilder/sporsmal/s19.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal19dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal19.mp3",{loop:false,auto:true});
    sporsmal19dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal20()
{
    const sporsmal20bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn4.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal20tekstboks = new Blocks.Image("bilder/sporsmal/s20.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal20dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal20.mp3",{loop:false,auto:true});
    sporsmal20dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal21()
{
    const sporsmal21bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn4.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal21tekstboks = new Blocks.Image("bilder/sporsmal/s21.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal21dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal21.mp3",{loop:false,auto:true});
    sporsmal21dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal22()
{
    const sporsmal22bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn5.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal22tekstboks = new Blocks.Image("bilder/sporsmal/s22.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal22dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal22.mp3",{loop:false,auto:true});
    sporsmal22dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal23()
{
    const sporsmal23bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn5.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal23tekstboks = new Blocks.Image("bilder/sporsmal/s23.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal23dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal23.mp3",{loop:false,auto:true});
    sporsmal23dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal24()
{
    const sporsmal24bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn5.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal24tekstboks = new Blocks.Image("bilder/sporsmal/s24.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal24dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal24.mp3",{loop:false,auto:true});
    sporsmal24dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

function sporsmal25()
{
    const sporsmal25bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn5.jpg", {x:-8,y:-8,width:1088,height:818});
    const sporsmal25tekstboks = new Blocks.Image("bilder/sporsmal/s25.jpg", {x:100,y:100,width:600,height:500});
    const sporsmalpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const sporsmal25dialog = new Blocks.Sound("lyder/sporsmaldialog/sporsmal25.mp3",{loop:false,auto:true});
    sporsmal25dialog.start();
    Actions.Click(sporsmalpilE, () => {  
        GaaTil(sti)
    })
}

//UTFORDRING-----------------------------------------------------------------------------------------------------------------------

function utfordring1()
{
    const utfordring1bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring1tekstboks = new Blocks.Image("bilder/utfordring/u1.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring1dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring1.mp3",{loop:false,auto:true});
    utfordring1dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring2()
{
    const utfordring2bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring2tekstboks = new Blocks.Image("bilder/utfordring/u2.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring2dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring2.mp3",{loop:false,auto:true});
    utfordring2dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring3()
{
    const utfordring3bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring3tekstboks = new Blocks.Image("bilder/utfordring/u3.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring3dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring3.mp3",{loop:false,auto:true});
    utfordring3dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring4()
{
    const utfordring4bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring4tekstboks = new Blocks.Image("bilder/utfordring/u4.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring4dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring4.mp3",{loop:false,auto:true});
    utfordring4dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring5()
{
    const utfordring5bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring5tekstboks = new Blocks.Image("bilder/utfordring/u5.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring5dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring5.mp3",{loop:false,auto:true});
    utfordring5dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring6()
{
    const utfordring6bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring6tekstboks = new Blocks.Image("bilder/utfordring/u6.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring6dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring6.mp3",{loop:false,auto:true});
    utfordring6dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring7()
{
    const utfordring7bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring7tekstboks = new Blocks.Image("bilder/utfordring/u7.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring7dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring7.mp3",{loop:false,auto:true});
    utfordring7dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring8()
{
    const utfordring8bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn6.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring8tekstboks = new Blocks.Image("bilder/utfordring/u8.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring8dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring8.mp3",{loop:false,auto:true});
    utfordring8dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring9()
{
    const utfordring2bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring2tekstboks = new Blocks.Image("bilder/utfordring/u9.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring2dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring9.mp3",{loop:false,auto:true});
    utfordring2dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring10()
{
    const utfordring10bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring10tekstboks = new Blocks.Image("bilder/utfordring/u10.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring10dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring10.mp3",{loop:false,auto:true});
    utfordring10dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring11()
{
    const utfordring11bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring11tekstboks = new Blocks.Image("bilder/utfordring/u11.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring11dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring11.mp3",{loop:false,auto:true});
    utfordring11dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring12()
{
    const utfordring12bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring12tekstboks = new Blocks.Image("bilder/utfordring/u12.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring12dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring12.mp3",{loop:false,auto:true});
    utfordring12dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring13()
{
    const utfordring13bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring13tekstboks = new Blocks.Image("bilder/utfordring/u13.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring13dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring13.mp3",{loop:false,auto:true});
    utfordring13dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring14()
{
    const utfordring14bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring14tekstboks = new Blocks.Image("bilder/utfordring/u14.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring14dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring14.mp3",{loop:false,auto:true});
    utfordring14dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring15()
{
    const utfordring15bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring15tekstboks = new Blocks.Image("bilder/utfordring/u15.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring15dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring15.mp3",{loop:false,auto:true});
    utfordring15dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring16()
{
    const utfordring16bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring16tekstboks = new Blocks.Image("bilder/utfordring/u16.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring16dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring16.mp3",{loop:false,auto:true});
    utfordring16dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring17()
{
    const utfordring17bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring17tekstboks = new Blocks.Image("bilder/utfordring/u17.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring17dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring17.mp3",{loop:false,auto:true});
    utfordring17dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring18()
{
    const utfordring18bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn8.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring18tekstboks = new Blocks.Image("bilder/utfordring/u18.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring18dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring18.mp3",{loop:false,auto:true});
    utfordring18dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring19()
{
    const utfordring19bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring19tekstboks = new Blocks.Image("bilder/utfordring/u19.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring19dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring19.mp3",{loop:false,auto:true});
    utfordring19dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring20()
{
    const utfordring20bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring20tekstboks = new Blocks.Image("bilder/utfordring/u20.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring20dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring20.mp3",{loop:false,auto:true});
    utfordring20dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring21()
{
    const utfordring21bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring21tekstboks = new Blocks.Image("bilder/utfordring/u21.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring21dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring21.mp3",{loop:false,auto:true});
    utfordring21dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring22()
{
    const utfordring22bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring22tekstboks = new Blocks.Image("bilder/utfordring/u22.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring22dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring22.mp3",{loop:false,auto:true});
    utfordring22dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring23()
{
    const utfordring23bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring23tekstboks = new Blocks.Image("bilder/utfordring/u23.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring23dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring23.mp3",{loop:false,auto:true});
    utfordring23dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring24()
{
    const utfordring24bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring24tekstboks = new Blocks.Image("bilder/utfordring/u24.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring24dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring24.mp3",{loop:false,auto:true});
    utfordring24dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

function utfordring25()
{
    const utfordring25bakgrunn = new Blocks.Image("bilder/bakgrunn/bakgrunn7.jpg",{x:-8,y:-8,width:1088,height:818});
    const utfordring25tekstboks = new Blocks.Image("bilder/utfordring/u25.jpg",{x:100,y:100,width:600,height:500});
    const utfordringpilE = new Blocks.Image("bilder/click/pilE.png", {x:600,y:200,width:500,height:700});
    const utfordring25dialog = new Blocks.Sound("lyder/utfordringdialog/utfordring25.mp3",{loop:false,auto:true});
    utfordring25dialog.start();
    Actions.Click(utfordringpilE, () => {  
        GaaTil(sti)
    })
}

//------------------------------------------------------------------------------------------------------------------
