import { compose, join, split, trim, toLower } from 'ramda'

export const makeRoute = compose(
  join('-'),
  split(' '),
  trim(),
  toLower()
)

// function scrollToAnchor(anchorName) {
//   let is = (el) => {
//     return el !== undefined && el !== null
//   }
//   //if you pass an undefined anchor it will scroll to the top of the body
//   let targetEl = is(anchor)
//     ? document.querySelector('a[name=' + anchor + ']')
//     : document.body
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop
//   let target = is(targetEl) ? targetEl.getBoundingClientRect().top : 0
//   window.scroll({
//     top: target + scrollTop - 70,
//     left: 0,
//     behavior: 'smooth',
//   })
// }

// onclick: (e) => {
//   let anchor = "contact-me";
//   m.route.set("/home", { "a": anchor });
//   scrollToAnchor(anchor);
// }
// https://dev.to/weirdmayo/anchor-links-in-mithriljs-277l
