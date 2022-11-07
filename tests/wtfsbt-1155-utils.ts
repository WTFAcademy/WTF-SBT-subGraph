import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  Bound,
  CreatedSoul,
  MinterAdded,
  MinterRemoved,
  OwnershipTransferred,
  Paused,
  Recover,
  TransferBatch,
  TransferSingle,
  URI,
  Unbound,
  Unpaused
} from "../generated/WTFSBT1155/WTFSBT1155"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBoundEvent(sbtId: BigInt): Bound {
  let boundEvent = changetype<Bound>(newMockEvent())

  boundEvent.parameters = new Array()

  boundEvent.parameters.push(
    new ethereum.EventParam("sbtId", ethereum.Value.fromUnsignedBigInt(sbtId))
  )

  return boundEvent
}

export function createCreatedSoulEvent(
  creator: Address,
  tokenId: BigInt,
  soulName: string
): CreatedSoul {
  let createdSoulEvent = changetype<CreatedSoul>(newMockEvent())

  createdSoulEvent.parameters = new Array()

  createdSoulEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  createdSoulEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  createdSoulEvent.parameters.push(
    new ethereum.EventParam("soulName", ethereum.Value.fromString(soulName))
  )

  return createdSoulEvent
}

export function createMinterAddedEvent(newMinter: Address): MinterAdded {
  let minterAddedEvent = changetype<MinterAdded>(newMockEvent())

  minterAddedEvent.parameters = new Array()

  minterAddedEvent.parameters.push(
    new ethereum.EventParam("newMinter", ethereum.Value.fromAddress(newMinter))
  )

  return minterAddedEvent
}

export function createMinterRemovedEvent(oldMinter: Address): MinterRemoved {
  let minterRemovedEvent = changetype<MinterRemoved>(newMockEvent())

  minterRemovedEvent.parameters = new Array()

  minterRemovedEvent.parameters.push(
    new ethereum.EventParam("oldMinter", ethereum.Value.fromAddress(oldMinter))
  )

  return minterRemovedEvent
}

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

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRecoverEvent(
  oldOwner: Address,
  newOwner: Address
): Recover {
  let recoverEvent = changetype<Recover>(newMockEvent())

  recoverEvent.parameters = new Array()

  recoverEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  recoverEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return recoverEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUnboundEvent(sbtId: BigInt): Unbound {
  let unboundEvent = changetype<Unbound>(newMockEvent())

  unboundEvent.parameters = new Array()

  unboundEvent.parameters.push(
    new ethereum.EventParam("sbtId", ethereum.Value.fromUnsignedBigInt(sbtId))
  )

  return unboundEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
