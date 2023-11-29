const name = "Deepak"
const RepoCount = 50



console.log(`Hell my name is ${name} and my repo count is ${RepoCount}`);

const gameName = new String ('Deepak');
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('e'))
console.log(name);
console.log(gameName)

const newString = gameName.substring(0,4);
console.log(newString)
const anotherString = gameName.slice(-5,5)
console.log(anotherString)

const newStringone = "    Deepak     "
console.log(newStringone)

console.log(newStringone.trim())

const url ="https://Deepak.com/deep%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('Deepak'))

const newSplite= 'this is my first page'

const words= newSplite.split('');
console.log(words[5]);





