//All expenses are stored in variables
let loyer = document.getElementById('loyer');
let credits = document.getElementById('credits');
let eau = document.getElementById('eau');
let internet = document.getElementById('internet');
let habitation = document.getElementById('habitation');
let vehicule = document.getElementById('vehicule');
let sante = document.getElementById('sante');
let garde = document.getElementById('garde');
let revenu = document.getElementById('revenu');
let locaux = document.getElementById('locaux');
let courses = document.getElementById('courses');
let essence = document.getElementById('essence');
let activites = document.getElementById('activites');
let sorties = document.getElementById('sorties');
let autre = document.getElementById('autre');

//Creating a function to create an expense item
let ajouteDep = document.getElementById('depense');
let cout = document.getElementById('cout');
let variable = 1;
let frais = [];

ajouteDep.addEventListener('click', function () {
    let div = document.createElement('div');
    div.className = 'bloc';
    let label = document.createElement('label');
    label.innerHTML = 'autre dépense:';
    label.for = 'autre' + variable;
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'my-autre' + variable;
    input.id = 'autre' + variable;
    div.append(label);
    div.append(input);
    cout.append(div);
    variable += 1;
    frais.push(input);
})

//We store all recipes in variables
let salaires = document.getElementById('salaire');
let aides = document.getElementById('aides');
let rentes = document.getElementById('rentes');
let autres = document.getElementById('autres');

//Creating a function to create a recipe item
let ajouteRec = document.getElementById('recette');
let paye = document.getElementById('paye');
let compte = 1;
let payer = [];

ajouteRec.addEventListener('click', function () {
    let div = document.createElement('div');
    div.className = 'bloc';

    let label = document.createElement('label');
    label.innerHTML = 'autre recette:';
    label.for = 'autres' + compte;
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'my-autres' + compte;
    input.id = 'autres' + compte;
    div.append(label);
    div.append(input);
    paye.append(div);
    compte += 1;
    payer.push(input);
})

//Creating the validate function
let valider = document.getElementById('valider');
valider.addEventListener('click', function () {

    //Reconversion calculations are made for certain values
    let calcul1 = (courses.value / 7) * 31;
    let calcul2 = (essence.value / 7) * 31;
    let calcul3 = activites.value / 12;
    let calcul4 = (sorties.value / 7) * 31;

    //We put the expenditure values in a table
    let depense = [loyer.value, credits.value, eau.value, internet.value, habitation.value, vehicule.value, sante.value, garde.value, revenu.value, locaux.value, calcul1, calcul2, calcul3, calcul4, autre.value];

    //We put the recipe values in a table
    let recette = [salaires.value, aides.value, rentes.value, autres.value];


    let epargne = document.getElementById('epargne');
    let result = document.getElementById('result');

    let somDepense = 0;
    for (let i = 0; i < depense.length; i++) {
        if(depense[i] > 0) {
            somDepense += parseFloat(depense[i].toString());
        } else {
            depense[i] = 0;
            somDepense += parseFloat(depense[i].toString());
        }
    }
    console.log(somDepense);
    if(frais.length > 0) {
        for(let i = 0; i < frais.length; i++) {
            if(frais[i].value > 0) {
                somDepense += parseFloat(frais[i].value.toString());
            } else {
                frais[i].value = 0;
                somDepense += parseFloat(frais[i].value.toString());
            }
        }
    }
    console.log(somDepense);
    let somRecette = 0;
    for (let i = 0; i < recette.length; i++) {

        if(recette[i] > 0) {
            somRecette += parseInt(recette[i].toString());
        } else {
            recette[i] = 0;
            somRecette += parseInt(recette[i].toString());
        }
    }
    console.log(somRecette);
    if(payer.length > 0) {
        for(let i = 0; i < payer.length; i++) {
            if(payer[i].value > 0) {
                somRecette += parseFloat(payer[i].value.toString());
            } else {
                payer[i].value = 0;
                somRecette += parseFloat(payer[i].value.toString());
            }
        }
    }
    console.log(somRecette);
    let resultat = somRecette - somDepense;
    console.log(resultat);
    epargne.value = resultat.toFixed(2);

    //Creating validation conditions
    if (resultat > 0) {
        if (resultat > 500) {
            result.innerText = "budget positif, faite un voyage à l'étranger";
        } else if (resultat > 100) {
            result.innerText = "budget positif, parter en vacances";
        } else if (resultat > 50) {
            result.innerText = "budget positif, faites quel-que aménagement dans votre maison";
        } else {
            result.innerText = "budget positif, faites quel-que courses";
        }
    } else if (resultat < 0) {
        result.innerText = "budget négatif";
    } else {
        result.innerText = "budget nul";
    }


//Creating the reset button
    let reset = document.getElementById('reset')

    reset.addEventListener('click', function () {
        loyer.value = "";
        credits.value = "";
        eau.value = "";
        internet.value = "";
        habitation.value = "";
        vehicule.value = "";
        sante.value = "";
        garde.value = "";
        revenu.value = "";
        locaux.value = "";
        courses.value = "";
        essence.value = "";
        activites.value = "";
        sorties.value = "";
        autre.value = "";
        salaires.value = "";
        aides.value = "";
        rentes.value = "";
        autres.value = "";
        epargne.value = "";
        result.innerText = "";

        if(frais.length > 0) {
            for(let i = 0; i < frais.length; i++) {
                frais[i].value = "";
            }
        }

        if(payer.length > 0) {
            for(let i = 0; i < payer.length; i++) {
                payer[i].value = "";
            }
        }
    })
})