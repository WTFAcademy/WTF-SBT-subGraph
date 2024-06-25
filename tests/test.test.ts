import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  newMockEvent
} from "matchstick-as/assembly/index"
import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts"
import { handleSBTMinted } from "../src/base-sbt"


describe("SBTMinted entity assertions", () => {
  beforeAll(() => {
    let to = Address.fromString("0x0000000000000000000000000000000000000002")
    let soulId = BigInt.fromString("1")
    let donation = BigInt.fromString("1000")
  })

  afterAll(() => {
    clearStore()
  })

  test("SBTMinted created and stored correctly", () => {
    console.log("Running test");
    
    assert.entityCount("SBTMinted", 1)

    assert.fieldEquals(
      "SBTMinted",
      "0x0000000000000000000000000000000000000002-1", // Corrected ID format to match the expected format in entity storage
      "to",
      "0x0000000000000000000000000000000000000002"
    )
    assert.fieldEquals(
      "SBTMinted",
      "0x0000000000000000000000000000000000000002-1", // Corrected ID format
      "soulId",
      "1"
    )
    assert.fieldEquals(
      "SBTMinted",
      "0x0000000000000000000000000000000000000002-1", // Corrected ID format
      "donation",
      "1000"
    )
  })
})

