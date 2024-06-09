import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  SBTMinted,
  SignerChanged
} from "../generated/test/test"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSBTMintedEvent(
  to: Address,
  soulId: BigInt,
  donation: BigInt
): SBTMinted {
  let sbtMintedEvent = changetype<SBTMinted>(newMockEvent())

  sbtMintedEvent.parameters = new Array()

  sbtMintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  sbtMintedEvent.parameters.push(
    new ethereum.EventParam("soulId", ethereum.Value.fromUnsignedBigInt(soulId))
  )
  sbtMintedEvent.parameters.push(
    new ethereum.EventParam(
      "donation",
      ethereum.Value.fromUnsignedBigInt(donation)
    )
  )

  return sbtMintedEvent
}

export function createSignerChangedEvent(
  oldSigner: Address,
  newSigner: Address
): SignerChanged {
  let signerChangedEvent = changetype<SignerChanged>(newMockEvent())

  signerChangedEvent.parameters = new Array()

  signerChangedEvent.parameters.push(
    new ethereum.EventParam("oldSigner", ethereum.Value.fromAddress(oldSigner))
  )
  signerChangedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return signerChangedEvent
}
