// Iteration 1: Names and Input
// 

const hacker1 = "Jimmy";
console.log (`"The driver's name is ${hacker1}"`)
const hacker2 = "Bobbett";
console.log (`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
}
else {
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
}

// Iteration 3: Loops

let driversName = '';
for (let i = 0; i < hacker1.length; i++) {
    driversName = driversName + hacker1[i] + ' ';
}
console.log(driversName.toUpperCase());

let navigatorsName = '';
for (let i = hacker2.length -1; i >= 0; i--) {
    navigatorsName = navigatorsName + hacker2[i];
}
console.log(navigatorsName);

for (let i = 0; i < hacker1.length; i++) {
    for (let x = 0; x < hacker2.length; x++) {
        if (hacker1[i] < hacker2[x]) {
            console.log('The driver\'s name goes first');
            break;
        }
        else if (hacker1[i] > hacker2[x]) {
            console.log('Yo, the navigator goes first definitely.')
            break;
        }
        else {
            console.log('What?! You both have the same name?')
            break;
        }
    }
}

// Bonus 1

let latinText = 'Quisque scelerisque semper et quam, ullamcorper ullamcorper felis efficitur eu. Phasellus non nulla a arcu fermentum convallis. Nam pulvinar, velit eu laoreet imperdiet, enim ante eleifend lectus, at faucibus erat magna vel nulla. Nunc eu justo interdum, condimentum mauris id, vestibulum lacus. Vestibulum dignissim posuere mauris, ac bibendum sem laoreet nec. Proin porta ultrices erat, id lacinia eros ultricies quis. In ut ex eu ipsum ullamcorper sagittis. Donec pulvinar diam sed tortor pharetra efficitur. Nulla accumsan ullamcorper sollicitudin. Nam vulputate ornare velit, a pretium justo posuere nec. Fusce eget vulputate purus. Nulla facilisi. Donec mollis, velit id facilisis tempus, metus nisi ornare enim, a ultricies est magna id leo. Donec auctor fringilla nulla, in aliquam tortor rutrum sit amet. Etiam facilisis volutpat elit sed iaculis. Nulla elementum lacus placerat, mattis ipsum in, suscipit nisl. Nulla facilisi. Nullam odio leo, porta sed volutpat nec, posuere eu metus. Sed id libero sagittis enim posuere accumsan id in sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In blandit neque eget magna ornare, viverra ullamcorper ante mollis. Vivamus id fermentum urna, vel dignissim purus. Curabitur gravida convallis risus maximus aliquam. Quisque arcu ligula, sollicitudin eu felis eget, porta vestibulum massa. Nullam rhoncus mi sed justo blandit maximus. Vestibulum gravida arcu vitae neque consectetur, sed tempor sem scelerisque. Duis diam nisl, mattis sit amet viverra vel, tristique a diam. Nulla dictum viverra congue. Etiam posuere vehicula nulla bibendum faucibus. Etiam rhoncus urna sed metus rhoncus sollicitudin. Nulla pulvinar tristique nibh, ut pellentesque nisl eleifend quis. Suspendisse erat neque, gravida ac augue sit amet, finibus placerat nulla. Sed ac purus quis neque semper tempus. Suspendisse placerat justo odio, nec feugiat quam maximus in. Nulla elementum purus ut mollis pellentesque. Integer accumsan est arcu. Praesent aliquet diam eu leo elementum, nec egestas elit ultricies. Quisque fringilla purus odio, vel auctor est aliquet ac. In ut tincidunt mauris, eu auctor turpis.'

let spaceCount = 0;
for (let i = 0; i < latinText.length; i++) {
    if (latinText[i] === ' ') {
        spaceCount = spaceCount+1
    }
}
console.log(`Wordcount is ${spaceCount + 1}.`)

let etCount = 0;
for (let i = 0; i < latinText.length; i++) {
    if (latinText[i] === ' ' && latinText[i+1] === 'e' && latinText[i+2] === 't' && latinText[i+3] === ' ') {
        etCount = etCount+1
    }
}
console.log(`Et count is ${etCount}.`)



