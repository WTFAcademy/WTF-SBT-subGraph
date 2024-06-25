import { BigInt } from "@graphprotocol/graph-ts"
import {
  SBTMinted as TransferEvent,
  base_sbt as SBTContract
} from "../generated/base-sbt/base_sbt"
import {
  Token, User
} from "../generated/schema"

export function handleSBTMinted(event: TransferEvent): void {

  let token = Token.load(event.params.to.toHexString() + "_" +event.params.soulId.toString())

  if (!token) {
    token = new Token(event.params.soulId.toString())
    token.soulId = event.params.soulId
    token.creator = event.params.to.toHexString()
    token.id = token.creator + "_" + event.params.soulId.toString()
    token.createdAtTimestamp = event.block.timestamp
    token.owner = event.params.to.toHexString()

    let tokenContract = SBTContract.bind(event.address)
    

  }
  token.save()



  let user = User.load(event.params.to.toHexString())
  if (!user) {
    user = new User(event.params.to.toHexString())
    user.id = event.params.to.toHexString()
    // Fix: Initialize user.amount with BigInt zero before adding transaction value
    user.amount = new BigInt(0).plus(event.transaction.value)
  } else {
    // Fix: If user exists, increment the amount instead of setting it
    user.amount = user.amount.plus(event.transaction.value)
  }
  user.save()

  

}