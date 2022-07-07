let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
d`

const regexp = new RegExp('the', 'gi') // 생성자 방식
const regexp2 = /the/gi // 리터럴방식
console.log(str.match(regexp))
console.log(str.match(regexp2))


const regexp3 = /fox/gi
console.log(regexp3.test(str)) // test
console.log(str.replace(regexp3, 'AAA')) // replace
console.log(str)
// str = str.replace(regexp3, 'AAA')
// console.log(str)


console.log(str.match(/\.$/gim)) // g i m

console.log(str.match(/d$/gm)) // ab$
console.log(str.match(/^T/gm)) // *ab

console.log(str.match(/./g)) // . 모든 한 문자 별로 잘림
console.log(str.match(/h..p/g))
console.log(str.match(/dog|fox/)) // a|b
console.log(str.match(/https?/g)) // ab?

console.log(str.match(/d{2}/g)) // {n}
console.log(str.match(/d{2,}/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/[fox]/g)) // [abc]
console.log(str.match(/[0-9]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log(str.match(/\w/g)) // \w
console.log(str.match(/\bf\w{1,}\b/g)) // \b
console.log(str.match(/\d{1,}/g)) // \d
console.log(str.match(/\s/g)) // \s

const h = `  the hello  world   !

`
console.log(h.replace(/\s/g, ''))



const str2 = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(str2.match(/.{1,}(?=@)/g)) // (?=)
console.log(str2.match(/(?<=@).{1,}/g)) // (?<=)

