const _ = require("lodash");

exports.Search = (query, response) => {
  const len = Object.keys(query).length;

  var ToBeSearched = ["Privacy"];

  if (len !== 0) {
    ToBeSearched = Object.values(query);
  }

  const blogs = response.data.blogs;
  var longestTitle;
  var size = -1;
  var UniqueTitle = {};
  var counts = [];
  _.filter(blogs, function (items) {
    const Title = items.title;
    if (Title.length > size) {
      longestTitle = items.title;
      size = Title.length;
    }
    UniqueTitle[`${items.title}`] = Title;
    ToBeSearched.forEach((element) => {
      if (Title.indexOf(element) > -1) counts.push(Title);
    });
  });

  var UserData;
  if (len !== 0) {
    UserData = {
      TotlNumberOfQuery: counts,
    };
  } else {
    UserData = {
      ArrayOfUniqueTitle: UniqueTitle,
      TheTitleOfTheLongestBlog: longestTitle,
      TotalNumberOfBlogs: blogs.length,
      Total_Number_of_Privacy: counts.length,
    };
  }

  return UserData;
};
