
const Helpers = {

  containsUpvote(votes, target) {
    if (votes.filter(v => (
      v.babies_name_id === target && v.upvote === true
    )).length > 0) {
      return true
    } else {
      return false
    }
  },
  containsDownvote(votes, target) {
    if (votes.filter(v => (
      v.babies_name_id === target && v.downvote === true
    )).length > 0 ) {
      return true
    } else {
      return false
    }
  },
  exists(votes, target) {
    if (votes.filter(v => (
      v.babies_name_id === target
    )).length > 0) {
      return true
    } else {
      return false
    }
  }
}

export default Helpers
