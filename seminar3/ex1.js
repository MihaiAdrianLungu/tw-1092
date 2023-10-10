const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

const year = new Date().getFullYear();

const ages = birthYears.map(el => {
    return year - el;
})

const filteredAges = ages.filter(el => el >= 18);

console.log(filteredAges);