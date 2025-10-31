      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

// Toggle dark/light theme
$(".tdnn").click(function () {
  $("body").toggleClass("light");
  $(".moon").toggleClass("sun");
  $(".tdnn").toggleClass("day");
});

// Display live stats with the dynamic year
document.getElementById(
  "stats"
).innerHTML = `You guys are awesome, we have again passed the GitHub rate limit this hour. <a href="https://github.com/fineanmol/Hacktoberfest" target="_blank">Here</a> is a link to check out our repo's live stats.`;

// ============================================================
// Contributor Sort Functionality - Issue #8533
// ============================================================
// TODO: Implement alphabetical sorting for contributor cards
// This function will be triggered by a sort button in the UI
// to reorder contributors alphabetically by name

/**
 * Sorts contributor cards alphabetically by name
 * @param {string} order - Sort order: 'asc' for ascending, 'desc' for descending
 * @returns {void}
 */
function sortContributorsAlphabetically(order = 'asc') {
  // TODO: Select all contributor card elements from the DOM
  // TODO: Extract contributor names and sort them
  // TODO: Reorder the DOM elements based on sorted order
  // TODO: Apply animation or transition effects if needed
  
  console.log(`Sorting contributors in ${order} order - functionality to be implemented`);
}
