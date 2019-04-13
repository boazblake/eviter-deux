import { compose, join, split, trim, toLower } from 'ramda'

export const makeRoute = compose(
  join('-'),
  split(' '),
  trim(),
  toLower()
)
