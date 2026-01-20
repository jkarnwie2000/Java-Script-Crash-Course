
function showRatings(ratings) {
let ratings = "";
for (let i = 0; i < 4; ++i) {
ratings = ratings + "*"
if (i !== ratings - 1) {
    ratings = ratings + "";
}
}
return ratings;
}
console.log(showRatings(4))