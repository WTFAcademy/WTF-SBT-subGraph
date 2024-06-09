import {
  SBTMinted as TransferEvent,
  test as WTFSBT1155MinterContract
} from "../generated/test/test"
import {
  Token, User
} from "../generated/schema"

export function handleSBTMinted(event: TransferEvent): void {
  let token = Token.load(event.params.soulId.toString())
  if (!token) {
    token = new Token(event.params.soulId.toString())
    token.creator = event.params.to.toHexString()
    token.id = event.params.soulId.toString()
    token.createdAtTimestamp = event.block.timestamp

    let tokenContract = WTFSBT1155MinterContract.bind(event.address)
  }
  token.save()

  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.id = event.params.to.toHexString()
    user.amount = event.transaction.value
  }
  user.save()

}
