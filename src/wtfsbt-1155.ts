import {
  TransferSingle as TransferEvent,
  WTFSBT1155 as WTFSBT1155Contract
} from "../generated/WTFSBT1155/WTFSBT1155"

import {
  Token, User
} from '../generated/schema'

export function handleTransferSingle(event: TransferEvent): void {
  let token = Token.load(event.params.id.toString())
  if (!token) {
    token = new Token(event.params.id.toString())
    token.creator = event.params.to.toHexString()
    token.id = event.params.id.toString()
    token.createdAtTimestamp = event.block.timestamp

    let tokenContract = WTFSBT1155Contract.bind(event.address)
    token.contentURI = tokenContract.uri(event.params.id)
  }
  token.owner = event.params.to.toHexString()
  token.save()

  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.save()
  }
}