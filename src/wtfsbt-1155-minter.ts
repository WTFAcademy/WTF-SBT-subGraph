import {
  SBTMinted as TransferEvent,
  WTFSBT1155Minter as WTFSBT1155MinterContract
} from "../generated/WTFSBT1155Minter/WTFSBT1155Minter"

import {
  Token, User
} from '../generated/schema'

export function handleSBTMinted(event: TransferEvent): void {
  let token = Token.load(event.params.soulId.toString())
  if (!token) {
    token = new Token(event.params.soulId.toString())
    token.creator = event.params.account.toHexString()
    token.id = event.params.soulId.toString()
    token.createdAtTimestamp = event.block.timestamp

    let tokenContract = WTFSBT1155MinterContract.bind(event.address)
  }
  token.save()

  let user = User.load(event.params.account.toHexString())
  if (!user) {
    user = new User(event.params.account.toHexString())
    user.id = event.params.account.toHexString()
    user.amount = event.transaction.value
  }
  user.save()

}

