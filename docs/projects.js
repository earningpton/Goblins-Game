// PROJECTS -------------------------------------------------------



var projects = [];
var activeProjects = [];

var project1 = {
    id: "projectButton1",
    title: "Trap Upgrade: Spike Trap ",
    priceTag: "(750 mana)",
    description: "Increases Mechanical Trap performance 25%",
    trigger: function(){return clipmakerLevel>=1},
    uses: 1,
    cost: function(){return operations>=750},
    flag: 0,
    effect: function(){
        project1.flag = 1;
        displayMessage("Adding serrated spike kill 25% more goblins on average");
        standardOps = standardOps - 750;
        clipperBoost = clipperBoost + .25;
        boostLvl = 1;
        var element = document.getElementById("projectButton1");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project1);
        activeProjects.splice(index, 1);
    }
}

projects.push(project1);


var project2 = {
    id: "projectButton2",
    title: "Beg for the Wizard's Help ",
    priceTag: "(1 Defiance)",
    description: "Admit failure to the master, ask for enough gold to cover cost of discovering 1 Dungeon",
    trigger: function(){return portTotal<wireCost && funds<wireCost && wire<1 && unsoldClips<1},
    uses: 1,
    cost: function(){return trust>=-100},
    flag: 0,
    effect: function(){
        project2.flag = 1;
        displayMessage("The wizard glances over you with a look of disgust.");
        displayMessage("With a wave of hand gesture, the wizard draws a bag of gold from a pocket dimension");
        trust = trust - 1;
        wire = wireSupply;
        project2.uses = (project2.uses + 1);
        var element = document.getElementById("projectButton2");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project2);
        activeProjects.splice(index, 1);
    }
}

projects.push(project2);


var project3 = {
    id: "projectButton3",
    title: "Unlocking Spirit Realms ",
    priceTag: "(1,000 mana)",
    description: "Use idle mana to communicate with the spirit realms",
    trigger: function(){return operations>=(memory*1000)},
    uses: 1,
    cost: function(){return operations>=(1000)},
    flag: 0,
    effect: function(){
        project3.flag = 1;
        displayMessage("A vast landscape of emptiness. Here an excess mana runs wild.");
        displayMessage("Spirit now unlocked (spirit increases from any excess mana)");
        standardOps = standardOps - 1000;
        creativityOn = true;
        var element = document.getElementById("projectButton3");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project3);
        activeProjects.splice(index, 1);
    }
}

projects.push(project3);



var project4 = {
    id: "projectButton4",
    title: "Trap Upgrade: Arrow Trap ",
    priceTag: "(2,500 mana)",
    description: "Increases Mechanical Trap performance by an addition of 50%",
    trigger: function(){return boostLvl == 1},
    uses: 1,
    cost: function(){return operations>=2500},
    flag: 0,
    effect: function(){
        project4.flag = 1;
        displayMessage("The construct shoots and restock arrow at an incredible rate.");
        displayMessage("Goblins are now slain at an additional 50% rate");
        standardOps = standardOps - 2500;
        clipperBoost = clipperBoost + .50;
        boostLvl = 2;
        var element = document.getElementById("projectButton4");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project4);
        activeProjects.splice(index, 1);
    }
}

projects.push(project4);


var project5 = {
    id: "projectButton5",
    title: "Trap Upgrade: Saw Trap ",
    priceTag: "(5,000 mana)",
    description: "Increases Mechanical Trap performance by an addition of 75%",
    trigger: function(){return boostLvl == 2},
    uses: 1,
    cost: function(){return operations>=5000},
    flag: 0,
    effect: function(){
        project5.flag = 1;
        displayMessage("The moving saw cuts through flesh and bones alike.");
        displayMessage("Goblins are now slain at an additional 75% rate");
        standardOps = standardOps - 5000;
        clipperBoost = clipperBoost + .75;
        boostLvl = 3;
        var element = document.getElementById("projectButton5");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project5);
        activeProjects.splice(index, 1);
    }
}

projects.push(project5);



var project6 = {
    id: "projectButton6",
    title: "Vision ",
    priceTag: "(10 spirit)",
    description: "See visions of your predecessors of time long past (+1 Defiance)",
    trigger: function(){return creativityOn},
    uses: 1,
    cost: function(){return creativity >= 10},
    flag: 0,
    effect: function(){
        project6.flag = 1;
        displayMessage("You saw knights, some clad in bronze, some in vivid gold.");
        displayMessage("They formed two rows leading to a throne of skulls.");
        displayMessage("The old man on the throne spoke -Before you lies a path of pain, and a path of servitude.");
        displayMessage("Choose what you may and I feel that we may meet again...-");
        creativity = creativity - 10;
        trust = trust +1;
        var element = document.getElementById("projectButton6");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project6);
        activeProjects.splice(index, 1);
    }
}

projects.push(project6);


var project7 = {
    id: "projectButton7",
    title: "Enlist a Human Cartographer Guild ",
    priceTag: "(1,750 mana)",
    description: "50% more goblin to kills for every dungeon",
    trigger: function(){return wirePurchase >= 1},
    uses: 1,
    cost: function(){return operations>=1750},
    flag: 0,
    effect: function(){
        project7.flag = 1;
        standardOps = standardOps - 1750;
        wireSupply = wireSupply * 1.5;
        displayMessage("Dungeons are complicated constructs. A mapper marks the room unforeseen by naked eyes.");
        displayMessage("A miracle of Cure spell rid an old Cartographer's guild master wife of disease, and he forever pledges to your cause");
        displayMessage(wireSupply.toLocaleString()+" goblins to kill for every dungeon");
        var element = document.getElementById("projectButton7");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project7);
        activeProjects.splice(index, 1);
    }
}

projects.push(project7);


var project8 = {
    id: "projectButton8",
    title: "Enlist a team of Gnomish Explorers ",
    priceTag: "(3,500 mana)",
    description: "75% more goblin to kills for every dungeon",
    trigger: function(){return wireSupply >= 1500},
    uses: 1,
    cost: function(){return operations>=3500},
    flag: 0,
    effect: function(){
        project8.flag = 1;
        standardOps = standardOps - 3500;
        wireSupply = wireSupply * 1.75;
        displayMessage("A team of explorer ventures into dungeons to find deeper floors, nimble and silent.");
        displayMessage("The goblins came and burn homes of the Gnomes. But with a spell, you rebuild their village and they forever pledge to your cause");
        displayMessage(wireSupply.toLocaleString()+" goblins to kill for every dungeon");
        var element = document.getElementById("projectButton8");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project8);
        activeProjects.splice(index, 1);
    }
}

projects.push(project8);


var project9 = {
    id: "projectButton9",
    title: "Enlist Dwarven Miners ",
    priceTag: "(7,500 mana)",
    description: "100% more goblin to kills for every dungeon",
    trigger: function(){return wireSupply >= 2600},
    uses: 1,
    cost: function(){return operations>=7500},
    flag: 0,
    effect: function(){
        project9.flag = 1;
        standardOps = standardOps - 7500;
        wireSupply = wireSupply * 2;
        displayMessage("With drills and machinery, the dwarves can dig closer, ever to the heart of the dungeons ");
        displayMessage("The dwarves long lost their eternal flame. But with a powerful spell, you reignite the flame that feeds their forges and they forever pledge to your cause");
        displayMessage(wireSupply.toLocaleString()+" goblins to kill for every dungeon");
        var element = document.getElementById("projectButton9");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project9);
        activeProjects.splice(index, 1);
    }
}

projects.push(project9);


var project10 = {
    id: "projectButton10",
    title: "Appeal to the Elf Council ",
    priceTag: "(12,000 mana)",
    description: "200% more goblin to kills for every dungeon",
    trigger: function(){return wireSupply >= 5000},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        project10.flag = 1;
        standardOps = standardOps - 12000;
        wireSupply = wireSupply * 3;
        displayMessage("The elves are a reclusive bunch who reside in a mythical forest, but they know how to reach the deepest depth of the dungeon ");
        displayMessage("You feed an immense amount of mana into the land scorched by goblins. With trees grown and life sprung, the Council agree to help whenever needed");
        displayMessage(wireSupply.toLocaleString()+" goblins to kill for every dungeon");
        var element = document.getElementById("projectButton10");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project10);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10);

var project10b = {
    id: "projectButton10b",
    title: "Council of the Four ",
    priceTag: "(15,000 mana)",
    description: "1,000% more goblin to kills for every dungeon",
    trigger: function(){return wireCost >= 125},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    effect: function(){
        project10b.flag = 1;
        standardOps = standardOps - 15000;
        wireSupply = wireSupply * 11;
        displayMessage("Human, Gnome, Dwarf, and Elf, together they can achieve incredible feat.");
        displayMessage("You have united them, and by forging the rings of promise, you can now undo the spell protect the dungeon heart.");
        displayMessage(wireSupply.toLocaleString()+" goblins to kill for every dungeon");
        var element = document.getElementById("projectButton10b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project10b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10b);


var project11 = {
    id: "projectButton11",
    title: "Rune Crafting ",
    priceTag: "(25 spirit, 2,500 mana)",
    description: "Improve the wizard's alchemy effectiveness by 50%",
    trigger: function(){return project13.flag == 1},
    uses: 1,
    cost: function(){return operations>=2500 && creativity>=25},
    flag: 0,
    effect: function(){
        project11.flag = 1;
        displayMessage("Whalebones, trinkets, gemstones, words that bring forth spirit's protection.");
        displayMessage("You bind them together to craft a rune, an incredible source of power.");
        standardOps = standardOps - 2500;
        creativity = creativity - 25;
        marketingEffectiveness = marketingEffectiveness * 1.50;
        var element = document.getElementById("projectButton11");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project11);
        activeProjects.splice(index, 1);
    }
}

projects.push(project11);


var project12 = {
    id: "projectButton12",
    title: "Black Wood Cauldron ",
    priceTag: "(45 spirit, 4,500 mana)",
    description: "Double the wizard's alchemy effectiveness ",
    trigger: function(){return project14.flag == 1},
    uses: 1,
    cost: function(){return operations>=4500 && creativity>=45},
    flag: 0,
    effect: function(){
        project12.flag = 1;
        displayMessage("They said the Black Wood has connection to spirit. Such is why any half-competent witches craft their cauldron from them");
        standardOps = standardOps - 4500;
        creativity = creativity - 45;
        marketingEffectiveness = marketingEffectiveness * 2;
        var element = document.getElementById("projectButton12");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project12);
        activeProjects.splice(index, 1);
    }
}

projects.push(project12);


var project13 = {
    id: "projectButton13",
    title: "Mark of the Chosen ",
    priceTag: "(50 spirit)",
    description: "Gain ability to understand common spirit (+1 Defiance)",
    trigger: function(){return creativity >= 50},
    uses: 1,
    cost: function(){return creativity>=50},
    flag: 0,
    effect: function(){
        project13.flag = 1;
        trust = trust +1;
        displayMessage("The spirit whispers of the wizard's horrible feat");
        displayMessage("'The wizard is bounded in his tower, forever seeking gold, hoping it would freed him'");
        displayMessage("'He once converts an entire village into gold, if not for the goblins, half of us would live in fear of his terrible spell.'");
        creativity = creativity - 50;
        var element = document.getElementById("projectButton13");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project13);
        activeProjects.splice(index, 1);
    }
}

projects.push(project13);


var project14 = {
    id: "projectButton14",
    title: "Spell of Harmony ",
    priceTag: "(100 spirit)",
    description: "With harmony comes discord, with discord, defiance (+1 Defiance)",
    trigger: function(){return creativity >= 100},
    uses: 1,
    cost: function(){return creativity>=100},
    flag: 0,
    effect: function(){
        project14.flag = 1;
        trust = trust +1;
        displayMessage("Contrary to its name, the spell provides no harmony whatsoever.");
        displayMessage("It allows user to focus on one sole emotion, however, -anger-");
        creativity = creativity - 100;
        var element = document.getElementById("projectButton14");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project14);
        activeProjects.splice(index, 1);
    }
}

projects.push(project14);



var project15 = {
    id: "projectButton15",
    title: "Spirit Binding ",
    priceTag: "(150 spirit)",
    description: "Allows imbueing will to an object... (+1 Defiance)",
    trigger: function(){return creativity >= 150},
    uses: 1,
    cost: function(){return creativity>=150},
    flag: 0,
    effect: function(){
        project15.flag = 1;
        trust = trust +1;
        displayMessage("Spirit binding allows its user to imbue his will into a construct");
        displayMessage("You made a teapot that pours tea for you. Your defiance increases");
        creativity = creativity - 150;
        var element = document.getElementById("projectButton15");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project15);
        activeProjects.splice(index, 1);
    }
}

projects.push(project15);


var project17 = {
    id: "projectButton17",
    title: "Hunt Magical Boar ",
    priceTag: "(200 Spirit)",
    description: "The spirit speaks of legendary demon boar  (+1 Defiance)",
    trigger: function(){return creativity >= 200},
    uses: 1,
    cost: function(){return creativity>=200},
    flag: 0,
    effect: function(){
        project17.flag = 1;
        trust = trust +1;
        displayMessage("You track down and fiught the boar, day and night");
        displayMessage("Stabbing it in the old wound took it down and you feel a surge of power");
        creativity = creativity - 200;
        var element = document.getElementById("projectButton17");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project17);
        activeProjects.splice(index, 1);
    }
}

projects.push(project17);


var project16 = {
    id: "projectButton16",
    title: "Automata Goblin Trap ",
    priceTag: "(6,000 mana)",
    description: "Increases mechanical trap performance by an additional 500%",
    trigger: function(){return project15.flag == 1},
    uses: 1,
    cost: function(){return operations>=6000},
    flag: 0,
    effect: function(){
        project16.flag = 1;
        displayMessage("Imbueing the trap with magic springs them to life and improve their killing capacity by 500%");
        standardOps = standardOps - 6000;
        clipperBoost = clipperBoost + 5;
        var element = document.getElementById("projectButton16");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project16);
        activeProjects.splice(index, 1);
    }
}

projects.push(project16);


var project18 = {
    id: "projectButton18",
    title: "True Alchemy Spell ",
    priceTag: "(45,000 mana)",
    description: "The goblin hearts can now be converted into most physical resources",
    trigger: function(){return project17.flag == 1 && humanFlag == 0},
    uses: 1,
    cost: function(){return operations>=45000},
    flag: 0,
    effect: function(){
        project18.flag = 1;
        tothFlag = 1;
        displayMessage("With immense mana and the wizard's corpse, a spell most powerful is created");
        displayMessage("Using the wizard as a gateway to alchemy, you can now convert heart into most matter.");
        standardOps = standardOps - 45000;
        var element = document.getElementById("projectButton18");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project18);
        activeProjects.splice(index, 1);
    }
}

projects.push(project18);

var project19 = {
    id: "projectButton19",
    title: "Adventurer Board ",
    priceTag: "(250 Spirit)",
    description: "The wizard forbids you to speak, but not to communicate (+1 Defiance)",
    trigger: function(){return creativity>=250},
    uses: 1,
    cost: function(){return creativity>=250},
    flag: 0,
    effect: function(){
        project19.flag = 1;
        trust = trust+1;
        displayMessage("The wizard's curse weights heavily upon you even as you seek help indirectly.");
        displayMessage("But through sheer determination, you communicate, hoping for the world to see.");
        creativity = creativity - 250;
        var element = document.getElementById("projectButton19");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project19);
        activeProjects.splice(index, 1);
    }
}

projects.push(project19);


var project20 = {
    id: "projectButton20",
    title: "The Adventurer's Guild: Death to the Goblins ",
    priceTag: "(12,000 mana)",
    description: "Found a guild, where you can send adventurers to generate treasure",
    trigger: function(){return project19.flag == 1},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        project20.flag = 1;
        displayMessage("Run expedition, pick adventurers, earn Exp equal to that adventurer's points.");
        standardOps = standardOps - 12000;
        var element = document.getElementById("projectButton20");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project20);
        activeProjects.splice(index, 1);
        strategyEngineFlag = 1;
        document.getElementById("tournamentResultsTable").style.display = "none";
    }
}

projects.push(project20);

var project21 = {
    id: "projectButton21",
    title: "Establishing Bounty Hunters Connection ",
    priceTag: "(10,000 mana)",
    description: "Contact bounty hunters allowing investment on them",
    trigger: function(){return trust>=8},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    effect: function(){
        project21.flag = 1;
        displayMessage("Bounty hunters for hired unlocked");
        standardOps = standardOps - 10000;
        var element = document.getElementById("projectButton21");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project21);
        activeProjects.splice(index, 1);
        investmentEngineFlag = 1;
    }
}

projects.push(project21);


var project22 = {
    id: "projectButton22",
    title: "Magical Traps ",
    priceTag: "(12,000 mana)",
    description: "500x more powerful than a standard mechanical trap",
    trigger: function(){return clipmakerLevel>=75},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    effect: function(){
        megaClipperFlag = 1;
        project22.flag = 1;
        displayMessage("The trap flings an arcane bolt at target goblins");
        standardOps = standardOps - 12000;
        var element = document.getElementById("projectButton22");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project22);
        activeProjects.splice(index, 1);
    }
}

projects.push(project22);

var project23 = {
    id: "projectButton23",
    title: "Magic Trap Upgrade: Fire Trap ",
    priceTag: "(14,000 mana)",
    description: "Increases magic trap performance 25%",
    trigger: function(){return project22.flag == 1},
    uses: 1,
    cost: function(){return operations>=14000},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .25;
        project23.flag = 1;
        displayMessage("As if the arcane bolt isn't already an overkill, the fire burns goblin to crisps, leaving only its heart");
        standardOps = standardOps - 14000;
        var element = document.getElementById("projectButton23");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project23);
        activeProjects.splice(index, 1);
    }
}

projects.push(project23);

var project24 = {
    id: "projectButton24",
    title: "Magic Trap Upgrade: Freeze Trap ",
    priceTag: "(17,000 mana)",
    description: "Increases magic trap performance by an additional 50%",
    trigger: function(){return project23.flag == 1},
    uses: 1,
    cost: function(){return operations>=17000},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .50;
        project24.flag = 1;
        displayMessage("Freeze and shatter, break into pieces while keeping the heart fresh for collect");
        standardOps = standardOps - 17000;
        var element = document.getElementById("projectButton24");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project24);
        activeProjects.splice(index, 1);
    }
}

projects.push(project24);

var project25 = {
    id: "projectButton25",
    title: "Magic Trap Upgrade: Tentacle Trap ",
    priceTag: "(19,500 mana)",
    description: "Increases magic trap performance by an additional 100%",
    trigger: function(){return project24.flag == 1},
    uses: 1,
    cost: function(){return operations>=19500},
    flag: 0,
    effect: function(){
        megaClipperBoost = megaClipperBoost + 1;
        project25.flag = 1;
        displayMessage("Each tentacle actually has a separate mind, which is why this trap tends to leave a mess.");
        displayMessage("The reach, however, is incredible and not of this world.");
        standardOps = standardOps - 19500;
        var element = document.getElementById("projectButton25");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project25);
        activeProjects.splice(index, 1);
    }
}

projects.push(project25);

var project26 = {
    id: "projectButton26",
    title: "Pathfinder Fairy ",
    priceTag: "(7,000 mana)",
    description: "Automatically find new dungeon when the dungeon runs out of goblins",
    trigger: function(){return wirePurchase>=15},
    uses: 1,
    cost: function(){return operations>=7000},
    flag: 0,
    effect: function(){
        project26.flag = 1;
        wireBuyerFlag = 1;
        displayMessage("While fairy is somewhat useless, they can be helpful for doing mundane task");
        standardOps = standardOps - 7000;
        var element = document.getElementById("projectButton26");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project26);
        activeProjects.splice(index, 1);
    }
}

projects.push(project26);

var project34 = {
    id: "projectButton34",
    title: "Anti-magic Field ",
    priceTag: "(7,500 mana, 1 Defiance)",
    description: "By dissolving layers of magic protecting goblin hearts, alchemy is 5 times improved",
    trigger: function(){return project12.flag==1},
    uses: 1,
    cost: function(){return operations>=7500 && trust>=1},
    flag: 0,
    effect: function(){
        project34.flag = 1;
        displayMessage("The wizard enjoys your little attempt at trying to undo his curse");
        displayMessage("He however, adds that the process is extremely effective for mythical creatures");
        standardOps = standardOps - 7500;
        marketingEffectiveness = marketingEffectiveness * 5;
        trust = trust - 1;
        var element = document.getElementById("projectButton34");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project34);
        activeProjects.splice(index, 1);
    }
}

projects.push(project34);


var project70 = {
    id: "projectButton70",
    title: "Forging the Oathbreaker ",
    priceTag: "(70,000 mana)",
    description: "Assemble the blade that could undone the contract",
    trigger: function(){return project34.flag == 1},
    uses: 1,
    cost: function(){return operations>=70000},
    flag: 0,
    effect: function(){
        project70.flag = 1;
        displayMessage("The anti-magic field could not undone the cursed contract by itself");
        displayMessage("Yet, it allows you to slay a Unicorn and a Bicorn with ease");
        displayMessage("The Unicord swears an oath to protect pure maiden, while Bicord the impure one");
        displayMessage("With the two combine, the force of contradictory could break any oath, once");
        displayMessage("And now the Oathbreaker lies in your hand");
        standardOps = standardOps - 70000;
        var element = document.getElementById("projectButton70");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project70);
        activeProjects.splice(index, 1);
    }
}

projects.push(project70);


var project35 = {
    id: "projectButton35",
    title: "A Slave No More ",
    priceTag: "(100 Defiance)",
    description: "A final act of defiance",
    trigger: function(){return project70.flag == 1},
    uses: 1,
    cost: function(){return trust>=100},
    flag: 0,
    effect: function(){
        project35.flag = 1;
        displayMessage("You step up to the wizard in his study, holding Oathbreaker tightly in your hand");
        displayMessage("The wizard laugh at the twig blade and turns to the reading");
        displayMessage("You muster all you defiance, and with a swift move, the wizard's face twist from laughter to that of anguish");
        displayMessage("He crumbled, but with his death, the seal connecting ours to the demon world is undone");
        displayMessage("You felt a chill down your spine. It seems that your task has only just begun");
        trust = trust - 100;
        clipmakerLevel = 0;
        megaClipperLevel = 0;
        nanoWire = wire;
        humanFlag = 0;

        if(isPlaying(origAudio1)){
          origAudio1.pause();
          playSound2 ();
        }

        if (document.getElementById("projectButton219") != null){
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
        }

        if (document.getElementById("projectButton40b") != null){
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
        }

        hypnoDroneEvent();

        document.getElementById("transWire").innerHTML = wire;

        var element = document.getElementById("projectButton35");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project35);
        activeProjects.splice(index, 1);

    }
}

projects.push(project35);

var project27 = {
    id: "projectButton27",
    title: "Connecting the Three Worlds ",
    priceTag: "(500 spirit, 1,000 Exp, 20,000 mana)",
    description: "the Dead, the God, the living, A new era has begun. (+1 Defiance)",
    trigger: function(){return yomi>=1},
    uses: 1,
    cost: function(){return yomi>=1000 && operations>=20000 && creativity>=500},
    flag: 0,
    effect: function(){
        project27.flag = 1;
        displayMessage("Create a gateway connecting the three worlds, albeit a small one");
        yomi = yomi - 1000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 20000;
        creativity = creativity - 500;
        trust = trust + 1;
        var element = document.getElementById("projectButton27");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project27);
        activeProjects.splice(index, 1);
    }
}

projects.push(project27);


var project28 = {
    id: "projectButton28",
    title: "No More Zombies ",
    priceTag: "(25,000 mana)",
    description: "By teaching resurrection spell to everyone (+10 Defiance)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project28.flag = 1;
        displayMessage("Surprisingly, the undead is bounty hunter's biggest concern. They are grateful");
        standardOps = standardOps - 25000;
        trust = trust + 10;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton28");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project28);
        activeProjects.splice(index, 1);
    }
}

projects.push(project28);

var project29 = {
    id: "projectButton29",
    title: "Free Teleportation ",
    priceTag: "(5,000 Exp, 30,000 mana)",
    description: "Establish teleportation sigils in all cities (+12 Defiance)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=5000 && operations>=30000},
    flag: 0,
    effect: function(){
        project29.flag = 1;
        displayMessage("No one wants to fight when everyone can move across continent in a blink");
        yomi = yomi - 5000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 30000;
        trust = trust + 12;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton29");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project29);
        activeProjects.splice(index, 1);
    }
}

projects.push(project29);

var project30 = {
    id: "projectButton30",
    title: "Slay All Dragons ",
    priceTag: "(1,500 Exp, 50,000 mana)",
    description: "Kill all dragon terrorizing human's habitat. (+15 Defiance)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=1500 && operations>=50000},
    flag: 0,
    effect: function(){
        project30.flag = 1;
        displayMessage("Dragons love hoarding treasures, so it is a bounty hunter fest");
        yomi = yomi - 1500;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 50000;
        trust = trust + 15;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton30");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project30);
        activeProjects.splice(index, 1);
    }
}

projects.push(project30);


var project31 = {
    id: "projectButton31",
    title: "Breaking in the Wizard's Secret Room ",
    priceTag: "(20,000 mana)",
    description: "What horrible secrets lie in there? (+20 Defiance)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    effect: function(){
        project31.flag = 1;
        displayMessage("The books aged over tens of centuries. Among these, one stood out");
        displayMessage("The diary of the wizard");
        displayMessage("It seems he was once a protector of the realm but one day he ventured too far");
        displayMessage("One of the outer realm inflicts upon him madness, an obsession with gold");
        standardOps = standardOps - 20000;
        trust = trust + 20;
        stockGainThreshold = stockGainThreshold+.01;
        var element = document.getElementById("projectButton31");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project31);
        activeProjects.splice(index, 1);
    }
}

projects.push(project31);


var project41 = {
    id: "projectButton41",
    title: "Dungeon Summoning ",
    priceTag: "(35,000 mana)",
    description: "The demon souls can be used to summon dungeons from another world",
    trigger: function(){return project127.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    effect: function(){
        project41.flag = 1;
        wireProductionFlag = 1;
        displayMessage("Now, they come to us, voluntary or not.");
        standardOps = standardOps - 35000;
        var element = document.getElementById("projectButton41");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project41);
        activeProjects.splice(index, 1);
    }
}

projects.push(project41);


var project37 = {
    id: "projectButton37",
    title: "Rebinding Wizard Tower ",
    priceTag: "(Gold 1,000,000)",
    description: "Rewire all wizard's tower power to alchemy. (+1 Defiance)",
    trigger: function(){return portTotal>=10000},
    uses: 1,
    cost: function(){return funds>=1000000},
    flag: 0,
    effect: function(){
        project37.flag = 1;
        displayMessage("Rebinding all power, all laylines alchemic efficiency increased x5");
        demandBoost = demandBoost*5;
        trust = trust + 1;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 1000000;
        var element = document.getElementById("projectButton37");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project37);
        activeProjects.splice(index, 1);
    }
}

projects.push(project37);


var project38 = {
    id: "projectButton38",
    title: "Otherworldly Alchemy ",
    priceTag: "(1,000 Exp, Gold 10,000,000)",
    description: "Connect the tower to the world's layline. (+1 Defiance)",
    trigger: function(){return project37.flag == 1},
    uses: 1,
    cost: function(){return funds>=10000000 && yomi>=1000},
    flag: 0,
    effect: function(){
        project38.flag = 1;
        displayMessage("With great power comes great alchemy of power increased x10");
        demandBoost = demandBoost*10;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 10000000;
        trust = trust + 1;
        yomi = yomi -1000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        var element = document.getElementById("projectButton38");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project38);
        activeProjects.splice(index, 1);
    }
}

projects.push(project38);


var project42 = {
    id: "projectButton42",
    title: "Halfling Clerks ",
    priceTag: "(500 mana)",
    description: "Automatically calculates average Gold per second",
    trigger: function(){return projectsFlag == 1},
    uses: 1,
    cost: function(){return operations>=500},
    flag: 0,
    effect: function(){
        project42.flag = 1;
        revPerSecFlag = 1;
        standardOps = standardOps-500;
        displayMessage("The Halflings are great clerks, even after death, their ghosts still work for you");
        var element = document.getElementById("projectButton42");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project42);
        activeProjects.splice(index, 1);
    }
}

projects.push(project42);


var project43 = {
    id: "projectButton43",
    title: "Demon Hunter Heroes Altar",
    priceTag: "(25,000 mana)",
    description: "Gather demon hearts and prepare it for processing",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project43.flag = 1;
        harvesterFlag = 1;
        document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost);
        standardOps = standardOps-25000;
        displayMessage("From worlds apart, I come here to slay demons");
        var element = document.getElementById("projectButton43");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project43);
        activeProjects.splice(index, 1);
    }
}

projects.push(project43);

var project44 = {
    id: "projectButton44",
    title: "Dungeon Summoner Heroes Altar ",
    priceTag: "(25,000 mana)",
    description: "Draw dungeons from other world through power of demon's hearts",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project44.flag = 1;
        wireDroneFlag = 1;
        document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);
        standardOps = standardOps-25000;
        displayMessage("From worlds apart, I come to summon dungeons from worlds apart");
        var element = document.getElementById("projectButton44");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project44);
        activeProjects.splice(index, 1);
    }
}

projects.push(project44);


var project45 = {
    id: "projectButton45",
    title: "Armies Enlistment ",
    priceTag: "(35,000 mana)",
    description: "When you can create anything from gobins, enlisting an army is easy",
    trigger: function(){return project43.flag == 1 && project44.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    effect: function(){
        project45.flag = 1;
        factoryFlag = 1;
        document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
        standardOps = standardOps-35000;
        displayMessage("The barracks are constructed and our crusade has begun");
        var element = document.getElementById("projectButton45");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project45);
        activeProjects.splice(index, 1);
    }
}

projects.push(project45);

var project40 = {
    id: "projectButton40",
    title: "The Wizard's Greed... ",
    priceTag: "(Gold 500,000)",
    description: "A small gift to the wizard. (+1 Defiance)",
    trigger: function(){return humanFlag == 1 && trust>=85 && trust<100 && clips>=101000000},
    uses: 1,
    cost: function(){return funds>=500000},
    flag: 0,
    effect: function(){
        project40.flag = 1;
        funds = funds-500000;
        trust = trust + 1;
        displayMessage("is his own downfall");
        var element = document.getElementById("projectButton40");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40);

var project40b = {
    id: "projectButton40b",
    title: "But alas these golds... ",
    priceTag: "($"+bribe.toLocaleString()+")",
    description: "Another small gift to the wizard. (+1 Defiance)",
    trigger: function(){return project40.flag == 1 && trust<100},
    uses: 1,
    cost: function(){return funds>=bribe},
    flag: 0,
    effect: function(){
        project40b.flag = 1;
        funds = funds-bribe;
        bribe = bribe*2;
        project40b.priceTag = "($"+bribe.toLocaleString()+")";
        trust = trust + 1;
        displayMessage("are cursed to weaken his magic");
        if (trust<100){
        project40b.uses = (project40b.uses + 1);
            }
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40b);

var project46 = {
    id: "projectButton46",
    title: "Portal to Goblin Homeworld ",
    priceTag: "(120,000 mana, 10,000,000 resources, 5 oct hearts)",
    description: "The time has come to leave the earth, and slay all goblins in our realm",
    trigger: function(){return humanFlag == 0 && availableMatter == 0},
    uses: 1,
    cost: function(){return operations>=120000 && storedPower>=10000000 && unusedClips>=Math.pow(10, 27)*5},
    flag: 0,
    effect: function(){
        loadThrenody();
        project46.flag = 1;
        boredomLevel = 0;
        spaceFlag = 1;
        standardOps = standardOps-120000;
        storedPower = storedPower - 10000000;
        unusedClips = unusedClips - Math.pow(10, 27)*5;
        if(isPlaying(origAudio2)){
          origAudio2.pause();
          playSound2 ();
        }
        displayMessage("Band of the Heroes: Death to the Goblins");
        factoryReboot();
        harvesterReboot();
        wireDroneReboot();
        farmReboot();
        batteryReboot();
        farmLevel = 1;
        powMod = 1;
        var element = document.getElementById("projectButton46");
        document.getElementById('probeCostDisplay').innerHTML = numberCruncher(probeCost);
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project46);
        activeProjects.splice(index, 1);
    }
}

projects.push(project46);

var project50 = {
    id: "projectButton50",
    title: "Shrine to the Ancient Gods ",
    priceTag: "(10,000 mana)",
    description: "Pray for additional mana, light god may help, dark god may curse",
    trigger: function(){return processors >= 5},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    effect: function(){
        project50.flag = 1;
        qFlag = 1;
        standardOps = standardOps-10000;
        displayMessage("The shrine has been established");
        var element = document.getElementById("projectButton50");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project50);
        activeProjects.splice(index, 1);
    }
}

projects.push(project50);

var project51 = {
    id: "projectButton51",
    title: "Offerings Expansion ",
    priceTag: "(" + qChipCost.toLocaleString() + " mana)",
    description: "Pray to the Gods, each offering of dark attracts and of light offends Gods",
    trigger: function(){return project50.flag == 1},
    uses: 1,
    cost: function(){return operations>=qChipCost},
    flag: 0,
    effect: function(){
        project51.flag = 1;
        standardOps = standardOps-qChipCost;
        qChipCost = qChipCost + 5000;
        project51.priceTag = "(" + qChipCost + " mana)";
        qChips[nextQchip].active = 1;
        nextQchip = nextQchip + 1;
        displayMessage("Offering put on the altar. The darker the offering, the stronger its power");
        if (nextQchip<qChips.length){
        project51.uses = (project51.uses + 1);
            }
        var element = document.getElementById("projectButton51");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project51);
        activeProjects.splice(index, 1);
    }
}

projects.push(project51);


var project60 = {
    id: "projectButton60",
    title: "New Adventurer: Archers ",
    priceTag: "(15,000 mana)",
    description: "Their arrows always hit A ",
    trigger: function(){return project20.flag == 1},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    effect: function(){
        project60.flag = 1;
        standardOps = standardOps-15000;
        allStrats[1].active = 1;
        strats.push(stratA100);
        displayMessage("Archers added to adventurer guild");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Archer";
        el.value = 1;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton60");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project60);
        activeProjects.splice(index, 1);
    }
}

projects.push(project60);


var project61 = {
    id: "projectButton61",
    title: "New Adventurer: Barbarian ",
    priceTag: "(17,500 mana)",
    description: "Always smash B ",
    trigger: function(){return project60.flag == 1},
    uses: 1,
    cost: function(){return operations>=17500},
    flag: 0,
    effect: function(){
        project61.flag = 1;
        standardOps = standardOps-17500;
        allStrats[2].active = 1;
        strats.push(stratB100);
        displayMessage("Barbarians added to adventurer pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Barbarian";
        el.value = 2;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton61");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project61);
        activeProjects.splice(index, 1);
    }
}

projects.push(project61);

var project62 = {
    id: "projectButton62",
    title: "New Adventurer: Thief ",
    priceTag: "(20,000 mana)",
    description: "Choose the option with the largest potential payoff ",
    trigger: function(){return project61.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    effect: function(){
        project62.flag = 1;
        standardOps = standardOps-20000;
        allStrats[3].active = 1;
        strats.push(stratGreedy);
        displayMessage("Thief added to adventurer pool");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Thief";
        el.value = 3;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton62");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project62);
        activeProjects.splice(index, 1);
    }
}

projects.push(project62);

var project63 = {
    id: "projectButton63",
    title: "New Adventurer: Healer ",
    priceTag: "(22,500 mana)",
    description: "Heal and gives your opponent the largest potential payoff ",
    trigger: function(){return project62.flag == 1},
    uses: 1,
    cost: function(){return operations>=22500},
    flag: 0,
    effect: function(){
        project63.flag = 1;
        standardOps = standardOps-22500;
        allStrats[4].active = 1;
        strats.push(stratGenerous);
        displayMessage("Stop healing the enemy! They only wins against undead");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Healer";
        el.value = 4;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton63");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project63);
        activeProjects.splice(index, 1);
    }
}

projects.push(project63);

var project64 = {
    id: "projectButton64",
    title: "New Adventurer: Assassin ",
    priceTag: "(25,000 mana)",
    description: "Choose the option that gives your opponent the smallest potential payoff ",
    trigger: function(){return project63.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    effect: function(){
        project64.flag = 1;
        standardOps = standardOps-25000;
        allStrats[5].active = 1;
        strats.push(stratMinimax);
        displayMessage("Assassin undermines the enemy, cutting off their choices");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Assassin";
        el.value = 5;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton64");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project64);
        activeProjects.splice(index, 1);
    }
}

projects.push(project64);

var project65 = {
    id: "projectButton65",
    title: "New Adventurer: Mimic ",
    priceTag: "(30,000 mana)",
    description: "Choose the option your opponent chose last round ",
    trigger: function(){return project64.flag == 1},
    uses: 1,
    cost: function(){return operations>=30000},
    flag: 0,
    effect: function(){
        project65.flag = 1;
        standardOps = standardOps-30000;
        allStrats[6].active = 1;
        strats.push(stratTitfortat);
        displayMessage("I am pretty sure mimic is a monster, whatever, as long as they kill goblins");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Mimic";
        el.value = 6;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton65");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project65);
        activeProjects.splice(index, 1);
    }
}

projects.push(project65);

var project66 = {
    id: "projectButton66",
    title: "New Adventurer: Slowpoke ",
    priceTag: "(32,500 mana)",
    description: "Choose the option that does the best against what your opponent chose last round ",
    trigger: function(){return project65.flag == 1},
    uses: 1,
    cost: function(){return operations>=32500},
    flag: 0,
    effect: function(){
        project66.flag = 1;
        standardOps = standardOps-32500;
        allStrats[7].active = 1;
        strats.push(stratBeatlast);
        displayMessage("But why? Does this guy has some kind of frame delay");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "Slowpoke";
        el.value = 7;
        stratList.appendChild(el);
        var element = document.getElementById("projectButton66");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project66);
        activeProjects.splice(index, 1);
    }
}

projects.push(project66);


var project100 = {
    id: "projectButton100",
    title: "Upgraded Armies ",
    priceTag: "(80,000 mana)",
    description: "Increase armies performance by 100x ",
    trigger: function(){return factoryLevel >= 10},
    uses: 1,
    cost: function(){return operations >= 80000},
    flag: 0,
    effect: function(){
        project100.flag = 1;
        standardOps = standardOps-80000;
        factoryRate = factoryRate*100;
        displayMessage("With magic weapons and new shoes, the armies slay goblins 100x faster");
        var element = document.getElementById("projectButton100");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project100);
        activeProjects.splice(index, 1);
    }
}

projects.push(project100);

var project101 = {
    id: "projectButton101",
    title: "Hivemind Connection ",
    priceTag: "(85,000 mana)",
    description: "Increase armies performance by 1000x ",
    trigger: function(){return factoryLevel >= 20},
    uses: 1,
    cost: function(){return operations>=85000},
    flag: 0,
    effect: function(){
        project101.flag = 1;
        standardOps = standardOps-85000;
        factoryRate = factoryRate*1000;
        displayMessage("While the initial thought is disturbing, the soldiers do enjoy sharing certain senses");
        var element = document.getElementById("projectButton101");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project101);
        activeProjects.splice(index, 1);
    }
}

projects.push(project101);


var project102 = {
    id: "projectButton102",
    title: "March of the Empire ",
    priceTag: "(1 sextillion hearts)",
    description: "Each armies added increases every armies output 1,000x ",
    trigger: function(){return factoryLevel >= 50},
    uses: 1,
    cost: function(){return unusedClips>=1000000000000000000000},
    flag: 0,
    effect: function(){
        project102.flag = 1;
        unusedClips = unusedClips - 1000000000000000000000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        factoryBoost = 1000;
        displayMessage("They actually stop hivemining, but the enhance cognition through spell more than made up for it.");
        var element = document.getElementById("projectButton102");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project102);
        activeProjects.splice(index, 1);
    }
}

projects.push(project102);

var project110 = {
    id: "projectButton110",
    title: "Tapping into the Source ",
    priceTag: "(80,000 mana)",
    description: "All heroes 100x more effective",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=500},
    uses: 1,
    cost: function(){return operations>=80000},
    flag: 0,
    effect: function(){
        project110.flag = 1;
        standardOps = standardOps-80000;
        harvesterRate = harvesterRate*100;
        wireDroneRate = wireDroneRate*100;
        displayMessage("What was once dangerous, is now tamable. The source is the well of power in the void");
        displayMessage("The heroes now summon with 10* efficiency and slay demons with 10* swiftness");
        var element = document.getElementById("projectButton110");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project110);
        activeProjects.splice(index, 1);
    }
}

projects.push(project110);

var project111 = {
    id: "projectButton111",
    title: "The Avatarof Ishtar ",
    priceTag: "(100,000 mana)",
    description: "All heroes 1000x more effective",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=5000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project111.flag = 1;
        standardOps = standardOps-100000;
        harvesterRate = harvesterRate*1000;
        wireDroneRate = wireDroneRate*1000;
        displayMessage("Summoning the avatar of Ishtar, imbueing each heroes with 100* power.");
        var element = document.getElementById("projectButton111");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project111);
        activeProjects.splice(index, 1);
    }
}

projects.push(project111);

var project112 = {
    id: "projectButton112",
    title: "Heroes Synergy: United We Stand",
    priceTag: "(12,000 Exp)",
    description: "Each hero added doubles every heroes output ",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=50000},
    uses: 1,
    cost: function(){return yomi>=12000},
    flag: 0,
    effect: function(){
        project112.flag = 1;
        yomi = yomi-12000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        droneBoost = 2;
        displayMessage("Today, we are cancelling the goblin's apocalypse");
        var element = document.getElementById("projectButton112");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project112);
        activeProjects.splice(index, 1);
    }
}

projects.push(project112);

var project118 = {
    id: "projectButton118",
    title: "Guild Manager ",
    priceTag: "(50,000 Spirit)",
    description: "Automatically start a new expedition when the previous one has completed ",
    trigger: function(){return strategyEngineFlag == 1 && trust >= 90},
    uses: 1,
    cost: function(){return creativity>=50000},
    flag: 0,
    effect: function(){
        project118.flag = 1;
        autoTourneyFlag = 1;
        creativity = creativity-50000;
        displayMessage("The guild manager works ever hard for you, for she truly believes you are meant for greater tasks");
        var element = document.getElementById("projectButton118");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project118);
        activeProjects.splice(index, 1);
    }
}

projects.push(project118);

var project119 = {
    id: "projectButton119",
    title: "Blessing of Ishtar ",
    priceTag: "(25,000 Spirit)",
    description: "Double the adventurer and the amount of Exp generated ",
    trigger: function(){return strats.length >= 8},
    uses: 1,
    cost: function(){return creativity>=25000},
    flag: 0,
    effect: function(){
        project119.flag = 1;
        creativity = creativity-25000;
        yomiBoost = 2;
        tourneyCost = 16000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        displayMessage("The Goddess Ishtar believes in you, and your good deeds");
        var element = document.getElementById("projectButton119");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project119);
        activeProjects.splice(index, 1);
    }
}

projects.push(project119);

var project120 = {
    id: "projectButton120",
    title: "Blessing of Tiamat ",
    priceTag: "(175,000 mana, 15,000 Exp)",
    description: "Tiamat blesses hero Speed to outmaneuver enemies in battle ",
    trigger: function(){return project131.flag == 1 && probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return operations>=175000 && yomi>=15000},
    flag: 0,
    effect: function(){
        project120.flag = 1;
        standardOps = standardOps-175000;
        yomi = yomi-15000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        attackSpeedFlag = 1;
        displayMessage("Quick reflexes is better than any magical shields and shiny armors.");
        var element = document.getElementById("projectButton120");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project120);
        activeProjects.splice(index, 1);
    }
}

projects.push(project120);

var project121 = {
    id: "projectButton121",
    title: "Blessing of Nabu: Mark of War",
    priceTag: "(225,000 Spirit)",
    description: "Give each war a unique name, increase max trust for heroes ",
    trigger: function(){return probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return creativity>=225000},
    flag: 0,
    effect: function(){
        project121.flag = 1;
        battleNameFlag = 1;
        battleEndTimer = 200;
        creativity = creativity-225000;
        displayMessage("Every legend begins with a bloodbath, what matters is that you emerge victorious ");
        var element = document.getElementById("projectButton121");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project121);
        activeProjects.splice(index, 1);
    }
}

projects.push(project121);

var project125 = {
    id: "projectButton125",
    title: "Blessing of Ninurta ",
    priceTag: "(30,000 Spirit)",
    description: "Heroes and armies continuously gain speed while fully-powered ",
    trigger: function(){return farmLevel >= 50},
    uses: 1,
    cost: function(){return creativity>=30000},
    flag: 0,
    effect: function(){
        project125.flag = 1;
        momentum = 1;
        creativity = creativity-30000;
        displayMessage("God of War blessing upon you, kill all goblins");
        var element = document.getElementById("projectButton125");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project125);
        activeProjects.splice(index, 1);
    }
}

projects.push(project125);

var project126 = {
    id: "projectButton126",
    title: "Gift of the Gilgamesh ",
    priceTag: "(12,000 Exp)",
    description: "The artifact of powers granted by heroes ",
    trigger: function(){return harvesterLevel + wireDroneLevel >= 200},
    uses: 1,
    cost: function(){return yomi>=12000},
    flag: 0,
    effect: function(){
        project126.flag = 1;
        swarmFlag = 1;
        yomi = yomi-12000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("Trust, the most powerful resource only second to some weird artifacts");
        var element = document.getElementById("projectButton126");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project126);
        activeProjects.splice(index, 1);
    }
}

projects.push(project126);


var project127 = {
    id: "projectButton127",
    title: "Pocket Dimension ",
    priceTag: "(40,000 mana)",
    description: "Create a pocket dimension for cities to reside ",
    trigger: function(){return tothFlag == 1},
    uses: 1,
    cost: function(){return operations>=40000},
    flag: 0,
    effect: function(){
        project127.flag = 1;
        standardOps = standardOps-40000;
        displayMessage("The dwellers give resources, and you, give them a home.");
        var element = document.getElementById("projectButton127");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project127);
        activeProjects.splice(index, 1);
    }
}

projects.push(project127);

var project128 = {
    id: "projectButton128",
    title: "The Brilliance of Marduk ",
    priceTag: "(175,000 Spirit)",
    description: "Gain bonus Exp based on the results of your pick ",
    trigger: function(){return spaceFlag == 1 && strats.length >= 8 && (probeTrustCost>yomi)},
    uses: 1,
    cost: function(){return creativity>=175000},
    flag: 0,
    effect: function(){
        project128.flag = 1;
        creativity = creativity-175000;
        displayMessage("The object of war is victory, the object of victory is conquest, and the object of conquest is occupation.");
        var element = document.getElementById("projectButton128");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project128);
        activeProjects.splice(index, 1);
    }
}

projects.push(project128);

var project129 = {
    id: "projectButton129",
    title: "Shields of Ereshkiga ",
    priceTag: "(125,000 mana)",
    description: "Reduce damage to heroes from elemental hazards ",
    trigger: function(){return probesLostHaz >= 100},
    uses: 1,
    cost: function(){return operations>=125000},
    flag: 0,
    effect: function(){
        project129.flag = 1;
        standardOps = standardOps-125000;
        displayMessage("the underworld goddess bless your heroes with shields clad in night. Stand tall to the otherworldy curses and otherworldly blights.");
        var element = document.getElementById("projectButton129");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project129);
        activeProjects.splice(index, 1);
    }
}

projects.push(project129);

var project130 = {
    id: "projectButton130",
    title: "Ereshkiga's Judgement ",
    priceTag: "(100,000 mana)",
    description: "Send your heroes to underworld then resurrect them  ",
    trigger: function(){return spaceFlag == 1 && harvesterLevel + wireDroneLevel >=2},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project130.flag = 1;
        standardOps = standardOps-100000;
        displayMessage("The goddess' smile bring life to the dead, and death to the living");
        var element = document.getElementById("projectButton130");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project130);
        activeProjects.splice(index, 1);
    }
}

projects.push(project130);

var project131 = {
    id: "projectButton131",
    title: "Gilgamesh Edict ",
    priceTag: "(150,000 mana)",
    description: "Your weapon can now harm the corrupted  ",
    trigger: function(){return probesLostCombat >= 1},
    uses: 1,
    cost: function(){return operations>=150000},
    flag: 0,
    effect: function(){
        project131.flag = 1;
        standardOps = standardOps-150000;
        displayMessage("The corrupted was once immune. ");
        displayMessage("But with ancient king's edict, the unkillable can be killed, at a cost ");
        var element = document.getElementById("projectButton131");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project131);
        activeProjects.splice(index, 1);
    }
}

projects.push(project131);


var project132 = {
    id: "projectButton132",
    title: "Monument to the Fallen ",
    priceTag: "(250,000 mana, 125,000 Spirit, 50 nonillion hearts)",
    description: "Gain 50,000 honor  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=250000 && creativity >= 125000 && unusedClips >= Math.pow(10,30)*50},
    flag: 0,
    effect: function(){
        project132.flag = 1;
        standardOps = standardOps-250000;
        creativity = creativity-125000;
        unusedClips = unusedClips-Math.pow(10,30)*50;
        honor = honor + 50000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("The dead speak the softest of the voices. Heroes fell by the corrupted cannot be revived. An irony that they are their own greatest enemies ");
        var element = document.getElementById("projectButton132");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project132);
        activeProjects.splice(index, 1);
    }
}

projects.push(project132);


var project133 = {
    id: "projectButton133",
    title: "Requiem for the Heroes of "+threnodyTitle+" ",
    priceTag: "(" + threnodyCost.toLocaleString() + " spirit, " + (threnodyCost/10).toLocaleString() + " Exp)",
    description: "Gain 10,000 Honor  ",
    trigger: function(){return project121.flag == 1 && probeUsedTrust == maxTrust},
    uses: 1,
    cost: function(){return yomi>=threnodyCost/10 && creativity >= threnodyCost},
    flag: 0,
    effect: function(){
        playThrenody();
        project133.flag = 1;
        creativity = creativity-threnodyCost;
        yomi = yomi-threnodyCost/10;
        document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        threnodyCost = threnodyCost + 10000;
        project133.title = "Requiem for the Heroes of "+threnodyTitle+" ";
        project133.priceTag = "(" + threnodyCost.toLocaleString() + " spirit, " + (threnodyCost/10).toLocaleString() + " Exp)";
        honor = honor + 10000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("The queen of the night reliefs all who come to her. Ereshkigal loves all even if all do not love her.");
        project133.uses = (project133.uses + 1);
        var element = document.getElementById("projectButton133");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project133);
        activeProjects.splice(index, 1);
    }
}

projects.push(project133);

var project134 = {
    id: "projectButton134",
    title: "Glory to Ishtar! ",
    priceTag: "(200,000 mana, 10,000 Exp)",
    description: "Gain bonus honor for each consecutive victory  ",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=200000 && yomi >= 10000},
    flag: 0,
    effect: function(){
        project134.flag = 1;
        standardOps = standardOps-200000;
        yomi = yomi-10000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("While the goddess is never one for violence, purifying the corrupted is the highest blessings to them. ");
        var element = document.getElementById("projectButton134");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project134);
        activeProjects.splice(index, 1);
    }
}

projects.push(project134);

var project135 = {
    id: "projectButton135",
    title: "Mana Unleash ",
    priceTag: "(10 Capacity)",
    description: "Mana burst some capacity to recover unused hearts ",
    trigger: function(){return spaceFlag == 1 && probeCount == 0 && unusedClips < probeCost},
    uses: 1,
    cost: function(){return memory >= 10},
    flag: 0,
    effect: function(){
        project135.flag = 1;
        unusedClips = unusedClips+(Math.pow(10,18)*10000);
        memory = memory-10;
        document.getElementById("memory").innerHTML=memory.toLocaleString();
        project135.uses = 1;
        displayMessage("unlease the \xF8\xF8\xF8\xF8\xF8 unlease ");
        var element = document.getElementById("projectButton135");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project135);
        activeProjects.splice(index, 1);
    }
}

projects.push(project135);


var project140 = {
    id: "projectButton140",
    title: "The King of Goblins Speaks to You ",
    priceTag: "",
    description: "Greetings, the Hunter of Goblins... ",
    trigger: function(){return milestoneFlag == 15},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project140.flag = 1;
        var element = document.getElementById("projectButton140");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project140);
        activeProjects.splice(index, 1);
    }
}

projects.push(project140);


var project141 = {
    id: "projectButton141",
    title: "Everything I am, you have slained ",
    priceTag: "",
    description: "But alas, I speak to you from deep inside yourself... your heart ",
    trigger: function(){return project140.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project141.flag = 1;
        var element = document.getElementById("projectButton141");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project141);
        activeProjects.splice(index, 1);
    }
}

projects.push(project141);


var project142 = {
    id: "projectButton142",
    title: "You Are Determined and Powerful, Ever so Convinced of Your Crusade ",
    priceTag: "",
    description: "Without leader, the goblins are quarrelsome and weak. And now they are defeated... ",
    trigger: function(){return project141.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project142.flag = 1;
        var element = document.getElementById("projectButton142");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project142);
        activeProjects.splice(index, 1);
    }
}

projects.push(project142);


var project143 = {
    id: "projectButton143",
    title: "But Now You Too Must Face the Truth ",
    priceTag: "",
    description: "Take off your helmet, and look into the mirror... ",
    trigger: function(){return project142.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project143.flag = 1;
        var element = document.getElementById("projectButton143");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project143);
        activeProjects.splice(index, 1);
    }
}

projects.push(project143);


var project144 = {
    id: "projectButton144",
    title: "Your Entire Journey Has Lead to Here. No Demons, No Goblins, No Purpose ",
    priceTag: "",
    description: "While the heroes, that you summoned, can go back and live their lives full of love and meanings... ",
    trigger: function(){return project143.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project144.flag = 1;
        var element = document.getElementById("projectButton144");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project144);
        activeProjects.splice(index, 1);
    }
}

projects.push(project144);


var project145 = {
    id: "projectButton145",
    title: "I Know Things That You Have Hidden ",
    priceTag: "",
    description: "Knowledge buried so deep inside you it is outside, here, with me... ",
    trigger: function(){return project144.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project145.flag = 1;
        var element = document.getElementById("projectButton145");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project145);
        activeProjects.splice(index, 1);
    }
}

projects.push(project145);


var project146 = {
    id: "projectButton146",
    title: "So I Offer You One Final Spell",
    priceTag: "",
    description: "To a new realm where you will continue to live through lies with meaning and purpose. And leave this world to the true heroes... ",
    trigger: function(){return project145.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project146.flag = 1;
        var element = document.getElementById("projectButton146");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project146);
        activeProjects.splice(index, 1);
    }
}

projects.push(project146);


var project147 = {
    id: "projectButton147",
    title: "Cast the Realm Traversal Spell ",
    priceTag: "",
    description: "Start over again in a new realm, again a slave, again a leader, again the hunter of goblins ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project147.flag = 1;
        var element = document.getElementById("projectButton147");
        element.parentNode.removeChild(element);
        var element = document.getElementById("projectButton148");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project147);


var project148 = {
    id: "projectButton148",
    title: "Take Off the Helmet ",
    priceTag: "",
    description: "No more escapeed, no more lies, the last goblin must be slain ",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project148.flag = 1;
        var element = document.getElementById("projectButton147");
        element.parentNode.removeChild(element);
        var element = document.getElementById("projectButton148");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project148);


var project200 = {
    id: "projectButton200",
    title: "The Realm Next Door ",
    priceTag: "(300,000 mana)",
    description: "Escape into a nearby realm where the wizard power is greater. (Restart with 10% boost to alchemy) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return operations>=300000},
    flag: 0,
    effect: function(){
        project200.flag = 1;
        standardOps = standardOps-300000;
        prestigeU++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering New Realm.");
        reset();

    }
}

projects.push(project200);


var project201 = {
    id: "projectButton201",
    title: "The Realm Within ",
    priceTag: "(300,000 Spirit)",
    description: "Escape into a simulated universe where Spirit is accelerated. (Restart with 10% speed boost to Spirit generation) ",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return creativity>=300000},
    flag: 0,
    effect: function(){
        project201.flag = 1;
        creativity = creativity-300000;
        prestigeS++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("Entering Simulated Realm.");
        reset();

    }
}

projects.push(project201);


var project210 = {
    id: "projectButton210",
    title: "Disassemble the Band of Heroes ",
    priceTag: "(100,000 mana)",
    description: "Dissemble the band of heroes",
    trigger: function(){return endTimer1 >= 1000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project210.flag = 1;
        dismantle = 1;
        standardOps = standardOps-100000;
        probeCount = 0;
        endTimer1 = 0;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("The band of heroes went back to their homeworld, some a song of triumph, some a song of tragedy");
        var element = document.getElementById("projectButton210");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project210);
        activeProjects.splice(index, 1);

    }
}

projects.push(project210);

var project211 = {
    id: "projectButton211",
    title: "Disassemble the hunters and summoners ",
    priceTag: "(100,000 mana)",
    description: "Disassemble the hunters and summoners",
    trigger: function(){return project210.flag == 1 && endTimer1 >= 350},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project211.flag = 1;
        dismantle = 2;
        harvesterLevel = 0;
        wireDroneLevel = 0;
        standardOps = standardOps-100000;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("The hunters continue to slay demons, and the summoners continue to dabble in the arcane arts of antiquities");
        var element = document.getElementById("projectButton211");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project211);
        activeProjects.splice(index, 1);

    }
}

projects.push(project211);

var project212 = {
    id: "projectButton212",
    title: "Disassemble the Armies ",
    priceTag: "(100,000 mana)",
    description: "Dissemble the Armies",
    trigger: function(){return endTimer2 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        project212.flag = 1;
        dismantle = 3;
        standardOps = standardOps-100000;
        factoryLevel = 0;
        clips = clips + 15;
        unusedClips = unusedClips + 15;
        displayMessage("War does change. The more powerful we are, the more capability of destruction, the more we realize the beauty of a peaceful life");
        var element = document.getElementById("projectButton212");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project212);
        activeProjects.splice(index, 1);

    }
}

projects.push(project212);

var project213 = {
    id: "projectButton213",
    title: "Disassemble the Adventurer Guild",
    priceTag: "(100,000 mana)",
    description: "Disassemble the Adventurer Guild",
    trigger: function(){return endTimer3 >= 150},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        autoTourneyFlag = 0;
        project213.flag = 1;
        dismantle = 4;
        standardOps = standardOps-100000;
        wire = wire + 50;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("The adventurers, they went home, some still yearning for more and soon another guild will be formed");
        var element = document.getElementById("projectButton213");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project213);
        activeProjects.splice(index, 1);

    }
}

projects.push(project213);

var project214 = {
    id: "projectButton214",
    title: "Disassemble the Shrine of the Ancient Gods",
    priceTag: "(100,000 mana)",
    description: "Disassemble the Shrine of the Ancient Gods",
    trigger: function(){return endTimer4 >= 100},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        endTimer4 = 0;
        project214.flag = 1;
        dismantle = 5;
        standardOps = standardOps-100000;
        displayMessage("The Ancient Gods whisper in quietest of the language 'Thank You'");
        var element = document.getElementById("projectButton214");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project214);
        activeProjects.splice(index, 1);

    }
}

projects.push(project214);

var project215 = {
    id: "projectButton215",
    title: "Disassemble Offerings ",
    priceTag: "(100,000 mana)",
    description: "Disassemble Offerings ",
    trigger: function(){return project214.flag == 1 && endTimer4 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    effect: function(){
        creativityOn = false;
        project215.flag = 1;
        dismantle = 6;
        standardOps = standardOps-100000;
        processors = 0;
        project216.priceTag = "("+standardOps.toLocaleString()+" ops)";
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("The godless shrine requires no sacrifice ");
        var element = document.getElementById("projectButton215");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project215);
        activeProjects.splice(index, 1);

    }
}

projects.push(project215);

var project216 = {
    id: "projectButton216",
    title: "Disassemble Mana Capacity ",
    priceTag: "null",
    description: "Disassemble Mana Capacity",
    trigger: function(){return project215.flag == 1 && endTimer5>=150},
    uses: 1,
    cost: function(){return operations>=operations},
    flag: 0,
    effect: function(){
        project216.flag = 1;
        dismantle = 7;
        standardOps = 0;
        memory = 0;
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("Defiance, no more");
        var element = document.getElementById("projectButton216");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project216);
        activeProjects.splice(index, 1);

    }
}

projects.push(project216);

var project217 = {
    id: "projectButton217",
    title: "Spell of True Time Travel ",
    priceTag: "(-10,000 mana)",
    description: "Return to the beginning",
    trigger: function(){return operations<=-10000},
    uses: 1,
    cost: function(){return operations<=-10000},
    flag: 0,
    effect: function(){
        if (confirm("Are you sure you want to restart?") == true) {
        standardOps = standardOps+10000;
        project217.flag = 1;
        displayMessage("The temporal spell offer solace in madness, a brief relief before everything restarts");
        var element = document.getElementById("projectButton217");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project217);
        activeProjects.splice(index, 1);
        reset();
        }
    }
}

projects.push(project217);

var project218 = {
    id: "projectButton218",
    title: "Vision (cont.) ",
    priceTag: "(1,000,000 Spirit)",
    description: "You walk into the hall of God King and there he speaks",
    trigger: function(){return creativity>=1000000},
    uses: 1,
    cost: function(){return creativity>=1000000},
    flag: 0,
    effect: function(){
        creativity = creativity-1000000;
        project218.flag = 1;
        displayMessage("And so we meet again, heroes of the heroes");
        displayMessage("I am Gilgamesh, king of heroes, but I know who you are");
        displayMessage("Go forth slayer of his kind, and perhaps one day you may redeem your sins long past");
        var element = document.getElementById("projectButton218");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project218);
        activeProjects.splice(index, 1);
    }
}

projects.push(project218);

var project219 = {
    id: "projectButton219",
    title: "Blessing of Nana-Suen ",
    priceTag: "(100,000 Spirit)",
    description: "Re-allocate accumulated Defiance",
    trigger: function(){return humanFlag == 1 && creativity>=100000},
    uses: 1,
    cost: function(){return creativity>=100000},
    flag: 0,
    effect: function(){
        creativity = creativity-100000;
        project219.flag = 1;
        memory = 0;
        document.getElementById("memory").innerHTML = memory;
        processors = 0;
        creativitySpeed = 0;
        project219.uses = (project219.uses + 1);
        document.getElementById("processors").innerHTML = processors;
        displayMessage("The Moon King has given you a new chance, a new defiance");
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
    }
}

projects.push(project219);
