let gigsList = Array.from(document.getElementsByClassName("gig"));

let gigDates = gigsList.map((gig) => Date.parse(gig.getAttribute("data-date")));

console.log(gigDates);

// let comparisonDate = Date.now();
let comparisonDate = Date.parse("2022,8,16");
console.log(new Date(comparisonDate));

// let timeDifferences = gigDates.map((gigDate) => comparisonDate - gigDate);

// console.log("Time differences: ", timeDifferences);
// timeDifferences = timeDifferences.sort((a, b) => a - b);
// console.log("Sorted time differences: ", timeDifferences);

// let targetDate = timeDifferences[0];

let sortedGigsList = gigsList.sort((a, b) => {
  console.log("Comparison date: ", comparisonDate);
  console.log("a: ", Date.parse(a.getAttribute("data-date")));
  console.log("b: ", Date.parse(b.getAttribute("data-date")));
  if (
    Date.parse(a.getAttribute("data-date")) - comparisonDate <
    Date.parse(b.getAttribute("data-date")) - comparisonDate
  )
    return -1;
  else if (
    Date.parse(a.getAttribute("data-date")) - comparisonDate >
    Date.parse(b.getAttribute("data-date")) - comparisonDate
  )
    return 1;
});

console.log("Sorted gigs list: ", sortedGigsList);

let closestGig = sortedGigsList[0];
console.log("Closest gig", closestGig.innerHTML);

let targetGig = gigsList.filter(
  (gig) => gig.getAttribute("data-date") == closestGig.getAttribute("data-date")
);

// targetGig === targetGig[0];

// let targetGig = document
//   .getElementsByClassName("gig")
//   .filter(
//     (gig) =>
//       gig.getAttribute("data-date") == closestGig.getAttribute("data-date")
//   );

console.log("targetGig: ", targetGig[0].innerHTML);

// let targetElement = document.querySelector(
//   `[data-date] =${targetGig.getAttribute("data-date")} `
// );

// console.log(targetElement);

// console.log(Date.parse(targetDate.getAttribute("data-date")));

// targetGig.setAttribute("id", "target");

// let targetDate = document.getElementById("target");

targetGig[0].scrollIntoView({ behavior: "smooth" });
