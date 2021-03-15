/**
 * Sends a vote.
 * @param {*} socket
 * @param {*} vote an object representing a vote.
 */
export function vote(socket, vote) {
  socket.emit('vote', vote);
}
