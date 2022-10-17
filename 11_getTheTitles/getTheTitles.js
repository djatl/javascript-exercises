const getTheTitles = function(books) {
    
    // NOTE: This works, but is not the suggested solution.
    // let titles = [];
    // for (i=0; i< books.length; i++) {
    //     titles.push(books[i].title);
    // }

    const titles = books.map(({ title }) => title);

    // OFFICIAL SOLUTION
    // const getTheTitles = function(array) {
    //   return array.map(book => book.title);
    // };

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
