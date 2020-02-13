export const containsUpvote = (votes, target) => {
  let value = false
  if (votes.map(v => (
    v.babies_name_id === target && v.upvote === true
  )).length > 0) {
    value = true
  }
  return value
}
export const containsDownvote = (votes, target) => {
  let value = false
  if (votes.map(v => (
    v.babies_name_id === target && v.downvote === true
  )).length > 0 ) {
    value = true
  }
  return value
}
export const exists = (votes, target) => {
  if (votes.filter(v => (
    v.babies_name_id === target
  )).length > 0) {
    return true
  } else {
    return false
  }
}
