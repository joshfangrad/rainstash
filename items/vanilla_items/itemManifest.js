let items = {
    "Barbed_Wire": {
        "name": "Barbed Wire",
        "description": "Touching enemies deals 50% damage/sec.",
        "stack": "+20% larger radius, +17% damage/sec. Deminishing returns on damage/sec increase.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Bitter_Root": {
        "name": "Bitter Root",
        "description": "Gain 8% max HP.",
        "stack": "Further gain 8% max HP, up to 38 stacks (300% extra HP).",
        "unlock": "Reach 650 health.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Bundle_Of_Fireworks": {
        "name": "Bundle of Fireworks",
        "description": "Upon opening/activating an object, fire 8 fireworks that deal 300% damage.",
        "stack": "+2 Fireworks launched.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Bustling_Fungus": {
        "name": "Bustling Fungus",
        "description": "After 2 seconds, heal for 4.5% of your health every second.",
        "stack": "4.5% More Healing.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Crowbar": {
        "name": "Crowbar",
        "description": "On Hit: Deal +50% damage to enemies above 80% health.",
        "stack": "+30% damage.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Fire_Shield": {
        "name": "Fire Shield",
        "description": "After being hit for 10% of your maximum health in one hit: explode, dealing 400% damage and knocking back enemies.",
        "stack": "Increases explosion damage by 200%, and increases knockback by 20%.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "First_Aid_Kit": {
        "name": "First Aid Kit",
        "description": "Heal for 10 health after 1.1 seconds of getting hit.",
        "stack": "Each additional First Aid Kit increases the heal by 10.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Gasoline": {
        "name": "Gasoline",
        "description": "On kill: Killing enemies burns the ground for 60% damage for 2 seconds.",
        "stack": "+40% damage.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Headstompers": {
        "name": "Headstompers",
        "description": "Hurt enemies by falling for up to 507% damage.",
        "stack": "Increases damage by 30%.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Hermits_Scarf": {
        "name": "Hermit's Scarf",
        "description": "10% chance to evade attacks.",
        "stack": "Increases dodge chance +5%, up to a maximum of 35% at 6 stacks.",
        "unlock": "Huntress: Achieve 200% attack speed.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Lens_Makers_Glasses": {
        "name": "Lens Maker's Glasses",
        "description": "On Hit: your attacks have a 7% chance to critically strike, dealing double damage.",
        "stack": "+7% crit chance. 100% chance to crit on 14 stacks.",
        "itemClass": "white"
    },

    "Life_Savings": {
        "name": "Life Savings",
        "description": "Generate $1 every 3 seconds.",
        "stack": "+1 gold generation rate.",
        "itemClass": "white"
    },

    "Meat_Nugget": {
        "name": "Meat Nugget",
        "description": "On Hit: 8% chance to drop 2 meat nuggets that heals for 2x6 health.",
        "stack": "+6 health per meat nugget.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Monster_Tooth": {
        "name": "Monster Tooth",
        "description": "On kill: Killing an enemy heals you for 10 health.",
        "stack": "+5 more health after kill.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Mortar_Tube": {
        "name": "Mortar Tube",
        "description": "On Hit: 9% chance to fire a mortar for 170% damage",
        "stack": "+170% damage.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Mysterious_Vial": {
        "name": "Mysterious Vial",
        "description": "Increase health regeneration by 1.2 per second.",
        "stack": "+1.2 health per second.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Pauls_Goat_Hoof": {
        "name": "Paul's Goat Hoof",
        "description": "+20% movement speed.",
        "stack": "Further increases movement speed by 20%, caps at around 35.",
        "unlock": "Fail a shrine 3 times in a row.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Rusty_Blade": {
        "name": "Rusty Blade",
        "description": "On Hit: 15% chance to bleed an enemy for 4x35% damage.",
        "stack": "15% extra chance to bleed.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Snake_Eyes": {
        "name": "Snake Eyes",
        "description": "Failing a shrine increases crit chance by 5%.",
        "stack": "Further increases crit chance by 3% for each shrine fail.",
        "unlock": "Pass a shrine 4 times in a row.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Soldiers_Syringe": {
        "name": "Soldier's Syringe",
        "description": "Increases attack speed by 15%.",
        "stack": "adds another 15% increase up to 13 times, maxing at +195%",
        "unlock": "Commando: Dodge 7 lethal attacks.",
        "itemClass": "white"
    },

    "Spikestrip": {
        "name": "Spikestrip",
        "description": "When hit, drops spikestrips (lasts for 2 seconds) that slow enemies by 20%",
        "stack": "Increases the duration of spikestrips by 1 second per stack.",
        "unlock": "Enforcer: Block 2000 damage total with your shield.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Sprouting_Egg": {
        "name": "Sprouting Egg",
        "description": "After not being hit for 7 seconds, increase health regen by 2.4 health per second.",
        "stack": "+2.4 heath per second out of combat.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Sticky_Bomb": {
        "name": "Sticky Bomb",
        "description": "On Hit: 8% chance to attach a bomb to an enemy, detonating for 140% damage.",
        "stack": "+40% damage.",
        "unlock": "Engineer: Detonate 15 \"Bounding Mines\" within 5 seconds.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Taser": {
        "name": "Taser",
        "description": "On Hit: 7% chance to snare enemies for 1.5 seconds.",
        "stack": "	Increases snare duration by 0.5 seconds.",
        "unlock": "Loader: Travel for 20,000 feet using the Hydraulic Gauntlet.",
        "hasVideo": true,
        "itemClass": "white"
    },

    "Warbanner": {
        "name": "Warbanner",
        "description": "On level up drop a banner. Raise attack/move speed by 30% and damage by 4.",
        "stack": "area of effect.",
        "hasVideo": true,
        "itemClass": "white"
    },






    "56_Leaf_Clover": {
        "name": "56 Leaf Clover",
        "description": "Elite mobs have a 4% chance to drop items.",
        "stack": "+1.5% item drop chance, up to a maximum of 100% at 65 stacks.",
        "unlock": "Kill the Scavenger.",
        "itemClass": "green"
    },

    "Arms_Race": {
        "name": "Arms Race",
        "description": "On drone action: 9% chance for drones to fire missiles and mortars.",
        "stack": "+10% chance to fire missles, +170% more mortar damage",
        "unlock": "	HAN-D: Kill 10 enemies with FORCED-REASSEMBLY simultaneously.",
        "itemClass": "green"
    },

    "AtG_Missile_Mk_1": {
        "name": "AtG Missle Mk. 1",
        "description": "On Hit: 10% chance of firing a missile that deals 300% damage.",
        "stack": "+10% chance to fire missiles.",
        "itemClass": "green"
    },

    "Boxing_Gloves": {
        "name": "Boxing Gloves",
        "description": "On Hit: hitting enemies have a 15% chance to knock them back.",
        "stack": "6% multiplicatively increase in knockback chance.",
        "itemClass": "green"
    },

    "Chargefield_Generator": {
        "name": "Chargefield Generator",
        "description": "On kill: generate a lightning ring, dealing 100% damage/sec for 6 seconds. Subsequent kills will expland the ring.",
        "stack": "+10% damage/sec.",
        "unlock": "Mercenary: Eviscerate 50 enemies.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Concussion_Grenade": {
        "name": "Concussion Grenade",
        "description": "On Hit: 6% chance to stun enemies for two seconds.",
        "stack": "+6% increased stun chance, stacks multiplicatively.",
        "unlock": "Engineer: Kill a Boss in 15 seconds or less.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Dead_Mans_Foot": {
        "name": "Dead Man's Foot",
        "description": "Drop a poison mine at low health for 4x150% damage.",
        "stack": "+1 poison tick.",
        "unlock": "Find the Bloated Survivor.",
        "itemClass": "green"
    },

    "Energy_Cell": {
        "name": "Energy Cell",
        "description": "Increased attack speed by up to 40% based on how much HP you have lost.",
        "stack": "+20% increased maximum attack speed, caps at 90% increase with 4 cells.",
        "itemClass": "green"
    },

    "Filial_Imprinting": {
        "name": "Filial Imprinting",
        "description": "Hatch a creature who drops attack speed/health regen/move speed buffs every 20 seconds.",
        "stack": "+1 hatched creature.",
        "unlock": "Drown 20 Whorls.",
        "itemClass": "green"
    },

    "Frost_Relic": {
        "name": "Frost Relic",
        "description": "On kill: Killing an enemy surrounds you with 3 icicles that deal 3x33% damage.",
        "stack": "+1 additional icicle.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Golden_Gun": {
        "name": "Golden Gun",
        "description": "Deals bonus damage per gold, up to 40% damage at 700 gold. Scales with time.",
        "stack": "Halves the gold required for max damage.",
        "unlock": "Bank 20,000 gold.",
        "itemClass": "green"
    },

    "Guardians_Heart": {
        "name": "Guardian's Heart",
        "description": "Gain a 60 health shield. Recharges in 7 seconds.",
        "stack": "+60 Shield.",
        "itemClass": "green"
    },

    "Harvesters_Scythe": {
        "name": "Harvester's Scythe",
        "description": "On crit: heal for 8 health. Gain 5% critical chance.",
        "stack": "+5% critical chance and +2 health on a critical strike.",
        "unlock": "Use a health shrine that drops you below 5% health.",
        "itemClass": "green"
    },

    "Hopoo_Feather": {
        "name": "Hopoo Feather",
        "description": "Gain another jump.",
        "stack": "Adds an additional jump.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Infusion": {
        "name": "Infusion",
        "description": "On kill: killing an enemy increases your health permanently by 1.",
        "stack": "+0.5 health on kill.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Leeching_Seed": {
        "name": "Leeching Seed",
        "description": "On Hit: Dealing damage heals you for 2 health. If the shot pierces and hits mutiple enemies, there will be diminishing returns for each subsequent enemy hit.",
        "stack": "+1 health on hit.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Panic_Mines": {
        "name": "Panic Mines",
        "description": "Drop a mine at low health for 500% damage.",
        "stack": "+1 mines dropped.",
        "unlock": "Miner: Survive the teleporter event without falling below 50% health.",
        "itemClass": "green"
    },

    "Predatory_Instincts": {
        "name": "Predatory Instincts",
        "description": "On crit: increase attack speed by 10%. Stacks up to 30%.",
        "stack": "+5% crit chance. Further increase 1% attack speed increment on crit strikes.",
        "unlock": "Huntress: Defeat the Legendary Wisp without taking damage.",
        "itemClass": "green"
    },

    "Prison_Shackles": {
        "name": "Prison Shackles",
        "description": "On Hit: Slow enemies by 20% on every attack.",
        "stack": "+0.5s slowing duration.",
        "itemClass": "green"
    },

    "Red_Whip": {
        "name": "Red Whip",
        "description": "Leaving combat for 1.5 seconds boosts your movement speed by 80%.",
        "stack": "None.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Rusty_Jetpack": {
        "name": "Rusty Jetpack",
        "description": "Decrease gravity by 50% and increase jump height by 10%.",
        "stack": "+10% jump height.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Smart_Shopper": {
        "name": "Smart Shopper",
        "description": "+25% enemy gold drops.",
        "stack": "+25% more enemy gold drops.",
        "itemClass": "green"
    },

    "Time_Keepers_Secret": {
        "name": "Time Keeper's Secret",
        "description": "Falling to low health stops time for 3 seconds.",
        "stack": "+1s time stop duration, up to a maximum of 10 seconds at 8 stacks.",
        "itemClass": "green"
    },

    "Tough_Times": {
        "name": "Tough Times",
        "description": "Increase armor by 14.",
        "stack": "+14 armor.",
        "itemClass": "green"
    },

    "Toxic_Worm": {
        "name": "Toxic Worm",
        "description": "Infect enemies, dealing 50% damage/sec. Bounces to other enemies on death.",
        "stack": "Allows infection on multiple targets.",
        "unlock": "Acrid: Spread 10,000 feet of \"Caustic Sludge\".",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Ukulele": {
        "name": "Ukulele",
        "description": "On Hit: 20% chance to fire chain lighting for 4x33% damage.",
        "stack": "+33% damage per bounce.",
        "hasVideo": true,
        "itemClass": "green"
    },

    "Will-O-The-Wisp": {
        "name": "Will-o'-the-Wisp",
        "description": "On kill: 33% chance to create a lava pillar from the enemy's corpse for 250% damage.",
        "stack": "Further increases lava pillar damage by +100%.",
        "itemClass": "green"
    },




    "Alien_Head": {
        "name": "Alien Head",
        "description": "Decreases your cooldowns by 25%.",
        "stack": "Stacks multiplicatively up to 3 times. (60% reduction).",
        "unlock": "	Obtain 7 Monster Teeth and 1 Guardian's Heart.",
        "itemClass": "red"
    },

    "Ancient_Scepter": {
        "name": "Ancient Scepter",
        "description": "Upgrade your fourth ability; this is unique to each character class. Full list of effects <span class='link' onclick=\'openInTab(\"http://riskofrain.wikia.com/wiki/Ancient_Scepter\")\'>here.</span>",
        "stack": "Does not stack.",
        "unlock": "Mercenary: Beat the game on Monsoon difficulty.",
        "itemClass": "red"
    },

    "AtG_Missile_Mk_2": {
        "name": "AtG Missle Mk. 2",
        "description": "On Hit: 7% chance to fire three missiles that deal 3x300% damage.",
        "stack": "+7% chance to fire missiles.",
        "itemClass": "red"
    },

    "Beating_Embryo": {
        "name": "Beating Embryo",
        "description": "Use items have a 30% chance to deal double the effect.",
        "stack": "Increases duplication chance by 30%.",
        "itemClass": "red"
    },

    "Brilliant_Behemoth": {
        "name": "Brilliant Behemoth",
        "description": "On Hit: your projectiles explode for a bonus 20% damage to nearby enemies.",
        "stack": "+20% damage.",
        "hasVideo": true,
        "itemClass": "red"
    },

    "Ceremonial_Dagger": {
        "name": "Ceremonial Dagger",
        "description": "On kill: fire out 4 heat-seeking bolts that deal 100% damage.",
        "stack": "Fires +2 additional bolts.",
        "itemClass": "red"
    },

    "Dios_Friend": {
        "name": "Dio's friend",
        "description": "Taking fatal damage revives you to 40% health. Invincible for 2 seconds.",
        "stack": "Can not be stacked for multiple revives, but if the revive effect has been used picking up another will reset it.",
        "unlock": "Die 50 times.",
        "itemClass": "red"
    },

    "Firemans_Boots": {
        "name": "Fireman's Boots",
        "description": "Walking leaves behind a fire trail that burns for 35% damage.",
        "stack": "+20% damage.",
        "unlock": "Survive in lava for 1 minute straight.",
        "itemClass": "red"
    },

    "Happiest_Mask": {
        "name": "Happiest Mask",
        "description": "On kill: spawn a ghost of the killed enemy with 70% health and 50% damage for 15 seconds.",
        "stack": "Increases ghost damage and durability.",
        "itemClass": "red"
    },

    "Heaven_Cracker": {
        "name": "Heaven Cracker",
        "description": "Every 4 basic attacks pierce through enemies for 100% damage.",
        "stack": "Reduce attacks required by 1 per additional Heaven Cracker. Pierces every attack at 4 stacks.",
        "itemClass": "red"
    },

    "Hyper-Threader": {
        "name": "Hyper-Threader",
        "description": "On Hit: Every attack fires a laser, dealing 40% damage and bouncing to 2 enemies.",
        "stack": "+1 additional bounce.",
        "unlock": "Commando: Activate the third teleporter without being hit once.",
        "itemClass": "red"
    },

    "Interstellar_Desk_Plant": {
        "name": "Interstellar Desk Plant",
        "description": "On kill: spawn an alien plant that heals you for 8 HP.",
        "stack": "+3 health per fruit.",
        "unlock": "CHEF: SEAR/FLAMBE 20 Sand Crabs.",
        "itemClass": "red"
    },

    "Laser_Turbine": {
        "name": "Laser Turbine",
        "description": "All your attacks charge the generator. At full power, fire a laser for 2000% damage.",
        "stack": "Increases charge amount per ability use.",
        "unlock": "CHEF: Have 20 cleavers in the air simultaneously.",
        "itemClass": "red"
    },

    "Old_Box": {
        "name": "Old Box",
        "description": "Drop a jack-in-the-box at low health, fearing enemies for 2 seconds.",
        "stack": "Widens the health range.",
        "itemClass": "red"
    },

    "Permafrost": {
        "name": "Permafrost",
        "description": "On Hit: Chance to stun enemies for 1.5 seconds and slow enemies by 60% for three seconds.",
        "stack": "Further increases chance by 6%.",
        "itemClass": "red"
    },

    "Photon_Jetpack": {
        "name": "Photon Jetpack",
        "description": "Allows the player to fly for up to 1.6 seconds nonstop; the jetpack's fuel tank quickly refills when not in use.",
        "stack": "+0.8 sec maximum flight duration.",
        "unlock": "End a teleporter timer with 0 enemies on the map.",
        "itemClass": "red"
    },

    "Plasma_Chain": {
        "name": "Plasma Chain",
        "description": "On Hit: Chance to tether onto enemies dealing 60% damage per second.",
        "stack": "Max tethers increased.",
        "itemClass": "red"
    },

    "Rapid_Mitosis": {
        "name": "Rapid Mitosis",
        "description": "Reduce the cooldown of use items by 25%.",
        "stack": "Further reduces item cooldowns by 25%, multiplicatively. Soft caps at around 30 stacks.",
        "itemClass": "red"
    },

    "Repulsion_Armor": {
        "name": "Repulsion Armor",
        "description": "After 6 hits reduce and reflect incoming damage by 83% for 3 seconds.",
        "stack": "Increases length of reflection by 1 second to a cap of 8 seconds.",
        "itemClass": "red"
    },

    "Shattering_Justice": {
        "name": "Shattering Justice",
        "description": "Attacks reduce enemy armor by 5. Reduction stacks up to 25.",
        "stack": "Increases debuff length by 0.5 seconds.",
        "unlock": "Miner: Reach level 10 without getting hurt more than once.",
        "itemClass": "red"
    },

    "Telescopic_Sight": {
        "name": "Telescopic Sight",
        "description": "On Hit: 1% chance to instantly kill an enemy.",
        "stack": "+0.5% proc chance up to a maximum of 3%.",
        "unlock": "Sniper: 1-shot kill 10 enemies consecutively.",
        "itemClass": "red"
    },

    "Tesla_Coil": {
        "name": "Tesla Coil",
        "description": "Shock nearby enemies for 150% damage.",
        "stack": "+50% damage.",
        "itemClass": "red"
    },

    "Thallium": {
        "name": "Thallium",
        "description": "On Hit: damage/slow by 500 enemy damage% and 100% speed over 3 seconds.",
        "stack": "Does not stack.",
        "itemClass": "red"
    },

    "The_Hit_List": {
        "name": "The Hit List",
        "description": "On kill: killing a marked enemy permanently increases damage by 0.5, up to a maximum of 20.",
        "stack": "Increase amount of markable enemies.",
        "unlock": "Bandit: Reset your cooldown 15 times consecutively.",
        "itemClass": "red"
    },

    "The_Ol_Lopper": {
        "name": "The Ol' Lopper",
        "description": "100% critical chance on enemies below 9% health.",
        "stack": "+4% health threshold, up to a cap of 35% health at 8 stacks",
        "unlock": "Survive 40 minutes.",
        "itemClass": "red"
    },

    "Wicked_Ring": {
        "name": "Wicked Ring",
        "description": "On crit: reduce cooldowns by 1 second.",
        "stack": "+1s cooldown reduction on crit, +6% critical chance.",
        "unlock": "Collect 4 Keycards.",
        "itemClass": "red"
    },




    "Burning_Witness": {
        "name": "Burning Witness",
        "description": "On kill: Grants a firetrail, 5% movement speed, and 1 damage for 6 seconds.",
        "stack": "+5% movement speed, increases duration",
        "drop": "Dropped by the Magma Worm.",
        "itemClass": "yellow"
    },

    "Colossal_Knurl": {
        "name": "Colossal Knurl",
        "description": "Increase health by 40, health regeneration by 1.2/second, and armor by 6.",
        "stack": "+40 health, +1.2 health regen, +6 armor.",
        "drop": "Dropped by the Colossus.",
        "itemClass": "yellow"
    },

    "Ifrits_Horn": {
        "name": "Ifrit's Horn",
        "description": "On Hit: 8% chance to incinerate enemies for 220% damage.",
        "stack": "+30% damage.",
        "drop": "Dropped by Ifrit.",
        "itemClass": "yellow"
    },

    "Imp_Overlords_Tentacle": {
        "name": "Imp Overlord's Tentacle",
        "description": "Summon an Imp bodyguard that revives every 60 seconds.",
        "stack": "Increase his health, damage, and speed, and change his color.",
        "drop": "Dropped by the Imp Overlord.",
        "itemClass": "yellow"
    },

    "Legendary_Spark": {
        "name": "Legendary Spark",
        "description": "On Hit: 8% chance to smite enemies for 200% damage.",
        "stack": "+1 spark.",
        "drop": "Dropped by the Ancient Wisp.",
        "itemClass": "yellow"
    },

    "Nematocyst_Nozzle": {
        "name": "Nematocyst Nozzle",
        "description": "Shoot out 6 nematocysts that deal 200% damage.",
        "cooldown": 22.5,
        "embryo": "Shoot 12 nematocysts instead of 6.",
        "drop": "Dropped by the Wandering Vagrant.",
        "itemClass": "yellow"
    },




    "Captains_Brooch": {
        "name": "Captain's Brooch",
        "description": "Call down a chest nearby.",
        "cooldown": 135,
        "embryo": "Calls down an additional chest.",
        "unlock": "Unlock a Golden Chest with the Skeleton Key.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Carrara_Marble": {
        "name": "Carrara Marble",
        "description": "Place a marble gate. Teleport back to the gate by activating again.",
        "cooldown": 45,
        "embryo": "None.",
        "itemClass": "orange"
    },

    "Crudely_Drawn_Buddy": {
        "name": "Crudely Drawn Buddy",
        "description": "Blow up a decoy, attracting enemies for 8 seconds. Looks just like you.",
        "cooldown": 45,
        "embryo": "Doubles duration of decoy to 16 seconds.",
        "unlock": "Sniper: Achieve 20 consecutive perfect reloads",
        "itemClass": "orange"
    },

    "Disposable_Missile_Launcher": {
        "name": "Disposable Missile Launcher",
        "description": "Fire a swarm of 12 missiles.",
        "cooldown": 45,
        "embryo": "Doubles the amount of missiles to 24.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Drone_Repair_Kit": {
        "name": "Drone Repair Kit",
        "description": "Repairs all drones to full health.",
        "cooldown": 45,
        "embryo": "None.",
        "itemClass": "orange"
    },

    "Dynamite_Plunger": {
        "name": "Dynamite Plunger",
        "description": "Hitting an enemy drops dynamite. Use to detonate for 400% damage.",
        "cooldown": 45,
        "embryo": "Throws two dynamite at once.",
        "itemClass": "orange"
    },

    "Foreign_Fruit": {
        "name": "Foreign Fruit",
        "description": "Heal yourself for 50% of your health.",
        "cooldown": 45,
        "embryo": "Recover all of your health.",
        "itemClass": "orange"
    },

    "Gigantic_Amethyst": {
        "name": "Gigantic Amethyst",
        "description": "Reset all your cooldowns.",
        "cooldown": 8,
        "embryo": "None.",
        "unlock": "Loader: Kill the Overloading Magma Worm.",
        "itemClass": "orange"
    },

    "Glowing_Meteorite": {
        "name": "Glowing Meteorite",
        "description": "Meteors fall from the sky, damaging enemies and friends for 220% damage. Lasts 8 seconds.",
        "cooldown": 70,
        "embryo": "Doubled active duration.",
        "unlock": "Deal 5000 damage in one shot.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Gold-plated_Bomb": {
        "name": "Gold-plated Bomb",
        "description": "Use 50% of your gold to create a bomb, dealing 1 damage per gold spent.",
        "cooldown": 45,
        "embryo": "2 damage per gold spent.",
        "itemClass": "orange"
    },

    "Minefield": {
        "name": "Minefield",
        "description": "Drop 7 mines at your feet, each dealing 400% damage.",
        "cooldown": 45,
        "embryo": "Drop 6 additional mines, for a total of 13.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Jar_Of_Souls": {
        "name": "Jar of Souls",
        "description": "Duplicate every enemy as a ghost to fight on your side.",
        "cooldown": 45,
        "embryo": "Summons an additional ghost per enemy.",
        "itemClass": "orange"
    },

    "Lost_Doll": {
        "name": "Lost Doll",
        "description": "Sacrifice 25% health to damage an enemy for 500% of your maximum health.",
        "cooldown": 45,
        "embryo": "None.",
        "unlock": "Survive a boss with less than 20% health.",
        "itemClass": "orange"
    },

    "Massive_Leech": {
        "name": "Massive Leech",
        "description": "For 10 seconds, every hit heals you for 10 health.",
        "cooldown": 45,
        "embryo": "Each hit heals 9 more health",
        "unlock": " Acrid: Spread Epidemic to 25 enemies.",
        "itemClass": "orange"
    },

    "Pillaged_Gold": {
        "name": "Pillaged Gold",
        "description": "For 14 seconds, every monster will drop 1 gold on hit.",
        "cooldown": 45,
        "embryo": "None.",
        "unlock": "Bandit: Kill a boss with \"Lights Out\"",
        "itemClass": "orange"
    },

    "Prescriptions": {
        "name": "Prescriptions",
        "description": "Increase damage by 10 and attack speed by %40 for 8 seconds.",
        "cooldown": 45,
        "embryo": "Doubles the attack speed increment to +80%",
        "unlock": "Enforcer: Stay in \"Shield Mode\" for 5 minutes straight (in combat).",
        "itemClass": "orange"
    },

    "Rotten_Brain": {
        "name": "Rotten Brain",
        "description": "Throw a brain that bounces in place, damaging/slowing enemies for 6x200%.",
        "cooldown": 45,
        "embryo": "Throw an additional brain.",
        "itemClass": "orange"
    },

    "Safeguard_Lantern": {
        "name": "Safeguard Lantern",
        "description": "Drop a lantern for 10 seconds. Fears and damages enemies for 20% damage.",
        "cooldown": 45,
        "embryo": "Doubles duration to 20 seconds.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Sawmerang": {
        "name": "Sawmerang",
        "description": "Throw out a sawmerang for 500% damage and bleed for 4*100%.",
        "cooldown": 45,
        "embryo": "Launches an identical Sawmerang behind the player.",
        "itemClass": "orange"
    },

    "Shattered_Mirror": {
        "name": "Shattered Mirror",
        "description": "For 15 seconds, double all of your abilities' damage and effects.",
        "cooldown": 75,
        "embryo": "Damage and effects are tripled instead.",
        "itemClass": "orange"
    },

    "Shield_Generator": {
        "name": "Shield Generator",
        "description": "Become invincible for 8 seconds.",
        "cooldown": 45,
        "embryo": "Doubles invincibility duration.",
        "unlock": "HAN-D: Stay above 70% health for 25 minutes.",
        "itemClass": "orange"
    },

    "Explorers_Key": {
        "name": "Explorer's Key",
        "description": "Open all the chests in view.",
        "cooldown": 90,
        "embryo": "None.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Snowglobe": {
        "name": "Snowglobe",
        "description": "Summon a snowstorm that freezes monsters at a 30% chance over 7 seconds.",
        "cooldown": 45,
        "embryo": "Doubles the duration of the snowstorm.",
        "itemClass": "orange"
    },

    "The_Back-up": {
        "name": "The Back-up",
        "description": "Create 4 drones to fight for you for 10 seconds.",
        "cooldown": 45,
        "embryo": "+2 Drones.",
        "unlock": "Have 4 drone helpers at once.",
        "hasVideo": true,
        "itemClass": "orange"
    },

    "Thqwib": {
        "name": "Thqwib",
        "description": "Release a bloom of 30 thqwibs, detonating on impact for 200%.",
        "cooldown": 45,
        "embryo": "Releases twice as many Thqwibs.",
        "itemClass": "orange"
    },

    "Unstable_Watch": {
        "name": "Unstable Watch",
        "description": "Stop time for 7 seconds.",
        "cooldown": 67.5,
        "embryo": "Doubles duration to 14 seconds.",
        "unlock": "Complete the first stage in under 5 minutes.",
        "itemClass": "orange"
    },




    "Honor": {
        "name": "Honor",
        "description": "Enemies always spawn as elites.",
        "unlock": "Found in the Desolate Forest.",
        "itemClass": "purple"
    },

    "Kin": {
        "name": "Kin",
        "description": "Only one enemy type will spawn per stage.",
        "unlock": "Found in Dried Lake.",
        "itemClass": "purple"
    },

    "Distortion": {
        "name": "Distortion",
        "description": "Locks a random skill every minute, but gives you 25% cooldown reduction.",
        "unlock": "Found in the Damp Caverns.",
        "itemClass": "purple"
    },

    "Spite": {
        "name": "Spite",
        "description": "Enemies release small bouncing explosives. These explosives only hurt the player.",
        "unlock": "Found in the Sky Meadow.",
        "itemClass": "purple"
    },

    "Glass": {
        "name": "Glass",
        "description": "You start with 500% more damage, but have 10% of your normal HP.",
        "unlock": "Found in the Ancient Valley.",
        "itemClass": "purple"
    },

    "Enigma": {
        "name": "Enigma",
        "description": "Enigma will replace your active item. Using enigma will trigger a random use item effect. When Enigma is active, <span class='purple'>Small Enigma</span>s will drop instead of use items.",
        "unlock": "Found in the Sunken Tomb.",
        "itemClass": "purple"
    },

    "Sacrifice": {
        "name": "Sacrifice",
        "description": "Enemies have a chance to drop items, but chests no longer spawn. Stacks with <span class='green'>56 Leaf Clover</span>.",
        "unlock": "Found in the Magma Barracks.",
        "itemClass": "purple"
    },

    "Command": {
        "name": "Command",
        "description": "Items are replaced with boxes that allow the player to choose the dropped item.",
        "unlock": "Found in the Hive Cluster.",
        "itemClass": "purple"
    },

    "Spirit": {
        "name": "Spirit",
        "description": "Run faster when at lower HP. Applies to monsters as well as the player.",
        "unlock": "Found in the Temple of the Elders.",
        "itemClass": "purple"
    },

    "Origin": {
        "name": "Origin",
        "description": "Every 10 minutes, a portal materializes and summons 3-5 Purple imps, and 1 Imp Vanguard.",
        "unlock": "Defeat <span class='red'>Providence</span> with all other artifacts activated.",
        "itemClass": "purple"
    },



    
    "Keycard": {
        "name": "Keycard",
        "description": "Opens locked doors on the UES Contact Light (Final Level).",
        "stack": "Each key unlocks one door. (Maximum of four keys)",
        "drop": "Dropped by enemies or found in golden containers on the UES Contact Light (Final Level).",
        "hasVideo": true,
        "itemClass": "misc"
    },
    
    "Small_Enigma": {
        "name": "Small Enigma",
        "description": "Reduces the cooldown of <span class='orange'>use</span> items by 5%.",
        "stack": "Further decreases cooldown by 5%.",
        "unlock": "Can be obtained when the <span class='purple'>Enigma</span> artifact is enabled.",
        "itemClass": "misc"
    },

    "White_Undershirt_(M)": {
        "name": "White Undershirt (M)",
        "description": "Increases armor by 3.",
        "drop": "Dropped by the Armored Boar on the level Boar Beach.",
        "itemClass": "misc"
    }

}

let commandSort = [
    "Mysterious_Vial",
    "Lens_Makers_Glasses",
    "Monster_Tooth",
    "Soldiers_Syringe",
    "Pauls_Goat_Hoof",
    "Barbed_Wire",
    "Sprouting_Egg",
    "Life_Savings",
    "Rusty_Blade",
    "Fire_Shield",
    "Bustling_Fungus",
    "Gasoline",
    "Bitter_Root",
    "Headstompers",
    "First_Aid_Kit",
    "Spikestrip",
    "Mortar_Tube",
    "Snake_Eyes",
    "Warbanner",
    "Meat_Nugget",
    "Crowbar",
    "Hermits_Scarf",
    "Sticky_Bomb",
    "Bundle_Of_Fireworks",
    "Taser",

    "Prison_Shackles",
    "Rusty_Jetpack",
    "Leeching_Seed",
    "Ukulele",
    "Golden_Gun",
    "AtG_Missile_Mk_1",
    "Concussion_Grenade",
    "Toxic_Worm",
    "Panic_Mines",
    "Guardians_Heart",
    "Infusion",
    "Smart_Shopper",
    "Boxing_Gloves",
    "Harvesters_Scythe",
    "Tough_Times",
    "56_Leaf_Clover",
    "Energy_Cell",
    "Dead_Mans_Foot",
    "Arms_Race",
    "Will-O-The-Wisp",
    "Time_Keepers_Secret",
    "Chargefield_Generator",
    "Predatory_Instincts",
    "Filial_Imprinting",
    "Hopoo_Feather",
    "Red_Whip",
    "Frost_Relic",

    "Firemans_Boots",
    "Brilliant_Behemoth",
    "AtG_Missile_Mk_2",
    "Wicked_Ring",
    "Heaven_Cracker",
    "Beating_Embryo",
    "Rapid_Mitosis",
    "Alien_Head",
    "Old_Box",
    "Happiest_Mask",
    "The_Hit_List",
    "Ceremonial_Dagger",
    "Plasma_Chain",
    "Permafrost",
    "The_Ol_Lopper",
    "Telescopic_Sight",
    "Repulsion_Armor",
    "Tesla_Coil",
    "Photon_Jetpack",
    "Thallium",
    "Dios_Friend",
    "Shattering_Justice",
    "Ancient_Scepter",
    "Hyper-Threader",
    "Interstellar_Desk_Plant",
    "Laser_Turbine",

    "Explorers_Key",
    "Foreign_Fruit",
    "Lost_Doll",
    "Pillaged_Gold",
    "Disposable_Missile_Launcher",
    "Minefield",
    "Massive_Leech",
    "Prescriptions",
    "Shield_Generator",
    "Shattered_Mirror",
    "Unstable_Watch",
    "Safeguard_Lantern",
    "Jar_Of_Souls",
    "The_Back-up",
    "Drone_Repair_Kit",
    "Captains_Brooch",
    "Sawmerang",
    "Snowglobe",
    "Gold-plated_Bomb",
    "Rotten_Brain",
    "Crudely_Drawn_Buddy",
    "Carrara_Marble",
    "Glowing_Meteorite",
    "Gigantic_Amethyst",
    "Dynamite_Plunger",
    "Thqwib",

    "Keycard",
    "Small_Enigma",
    "White_Undershirt_(M)"
];