const heroSpan = document.querySelector("#hero");
const villainSpan = document.querySelector("#villain");
const resultSpan = document.querySelector("#result");
const launcherBtn = document.querySelector("button");

const heroes = ["Spiderman", "Jack Cooper", "Agent 3", "Sol Badguy", "Batman"];
const villains = ["Prowler", "Kuben Blisk", "Octavio", "Happy Chaos", "Joker"];
const weapon = ["a comically large spoon", "a banana gun", "a cartoon mallet", "an actual AK", "a butter knife"];

launcherBtn.addEventListener("click", () => {

const randomHeroIndex = Math.floor(Math.random() *heroes.length);
const randomHero = heroes[randomHeroIndex];
const randomHeroWeaponIndex = Math.floor(Math.random() *weapon.length);
const randomHeroWeapon = weapon[randomHeroWeaponIndex];


const randomVillainIndex = Math.floor(Math.random() *villains.length);
const randomVillain = villains[randomVillainIndex];
const randomVillainWeaponIndex = Math.floor(Math.random() *weapon.length);
const randomVillainWeapon = weapon[randomVillainWeaponIndex];

// console.log(`${randomHero} arms themselves with ${randomHeroWeapon}`);
// console.log(`${randomVillain} arms themselves with ${randomVillainWeapon}`);

heroSpan.innerHTML = `${randomHero} arms themselves with ${randomHeroWeapon}`;
villainSpan.innerHTML = `${randomVillain} arms themselves with ${randomVillainWeapon}`

const heroStrike = randomHero.length + randomHeroWeapon.length;
const villainStrike = randomVillain.length + randomVillainWeapon.length;

// console.log(`${randomHero} hit ${heroStrike}`);
// console.log(`${randomVillain} hit ${villainStrike}`);

let resultMessage = " ";

if(heroStrike === villainStrike) {
    resultMessage = "got a draw, both sides went home for the day!";
} else if(heroStrike > villainStrike) {
    resultMessage = `${randomVillain} reels back from the hit and escapes. ${randomHero} wins!`;
} else {
    resultMessage = `${randomHero} tries to fight back, but loses. ${randomVillain} wins and takes over the world!`;
}

resultSpan.innerHTML = resultMessage;

});


