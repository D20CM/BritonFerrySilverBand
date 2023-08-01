function dateScroll() {
  let gigsList = Array.from(document.getElementsByClassName("gig"));

  let gigDates = gigsList.map((gig) =>
    Date.parse(gig.getAttribute("data-date"))
  );

  console.log(gigDates);

  let comparisonDate = Date.now();
  // let comparisonDate = Date.parse("2023,1,16");
  console.log(new Date(comparisonDate));

  let sortedGigsList = gigsList.sort((a, b) => {
    if (
      Math.abs(comparisonDate - Date.parse(a.getAttribute("data-date"))) <
      Math.abs(comparisonDate - Date.parse(b.getAttribute("data-date")))
    )
      return -1;
    else if (
      Math.abs(comparisonDate - Date.parse(a.getAttribute("data-date"))) >
      Math.abs(comparisonDate - Date.parse(b.getAttribute("data-date")))
    )
      return 1;
  });

  console.log("Sorted gigs list: ", sortedGigsList);

  let closestGig = sortedGigsList[0];

  let targetGig = gigsList.filter(
    (gig) =>
      gig.getAttribute("data-date") == closestGig.getAttribute("data-date")
  );

  console.log("targetGig: ", targetGig[0].innerHTML);

  targetGig[0].scrollIntoView({ behavior: "smooth" });
}

setTimeout(dateScroll, 2000);
