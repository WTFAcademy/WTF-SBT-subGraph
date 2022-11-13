// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Bound extends ethereum.Event {
  get params(): Bound__Params {
    return new Bound__Params(this);
  }
}

export class Bound__Params {
  _event: Bound;

  constructor(event: Bound) {
    this._event = event;
  }

  get sbtId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class CreatedSoul extends ethereum.Event {
  get params(): CreatedSoul__Params {
    return new CreatedSoul__Params(this);
  }
}

export class CreatedSoul__Params {
  _event: CreatedSoul;

  constructor(event: CreatedSoul) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get soulName(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Donate extends ethereum.Event {
  get params(): Donate__Params {
    return new Donate__Params(this);
  }
}

export class Donate__Params {
  _event: Donate;

  constructor(event: Donate) {
    this._event = event;
  }

  get donator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MinterAdded extends ethereum.Event {
  get params(): MinterAdded__Params {
    return new MinterAdded__Params(this);
  }
}

export class MinterAdded__Params {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get newMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get oldMinter(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Recover extends ethereum.Event {
  get params(): Recover__Params {
    return new Recover__Params(this);
  }
}

export class Recover__Params {
  _event: Recover;

  constructor(event: Recover) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TreasuryTransferred extends ethereum.Event {
  get params(): TreasuryTransferred__Params {
    return new TreasuryTransferred__Params(this);
  }
}

export class TreasuryTransferred__Params {
  _event: TreasuryTransferred;

  constructor(event: TreasuryTransferred) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newTreasury(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unbound extends ethereum.Event {
  get params(): Unbound__Params {
    return new Unbound__Params(this);
  }
}

export class Unbound__Params {
  _event: Unbound;

  constructor(event: Unbound) {
    this._event = event;
  }

  get sbtId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WTFSBT1155__soulIdToSoulContainerResult {
  value0: string;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getSoulName(): string {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }

  getCreator(): Address {
    return this.value2;
  }

  getRegisteredTimestamp(): BigInt {
    return this.value3;
  }

  getStartDateTimestamp(): BigInt {
    return this.value4;
  }

  getEndDateTimestamp(): BigInt {
    return this.value5;
  }
}

export class WTFSBT1155 extends ethereum.SmartContract {
  static bind(address: Address): WTFSBT1155 {
    return new WTFSBT1155("WTFSBT1155", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  exists(id: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_exists(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getSoulDescription(soulId: BigInt): string {
    let result = super.call(
      "getSoulDescription",
      "getSoulDescription(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );

    return result[0].toString();
  }

  try_getSoulDescription(soulId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getSoulDescription",
      "getSoulDescription(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getSoulEndDateTimestamp(soulId: BigInt): BigInt {
    let result = super.call(
      "getSoulEndDateTimestamp",
      "getSoulEndDateTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );

    return result[0].toBigInt();
  }

  try_getSoulEndDateTimestamp(soulId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSoulEndDateTimestamp",
      "getSoulEndDateTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSoulName(soulId: BigInt): string {
    let result = super.call("getSoulName", "getSoulName(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);

    return result[0].toString();
  }

  try_getSoulName(soulId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("getSoulName", "getSoulName(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getSoulRegisteredTimestamp(soulId: BigInt): BigInt {
    let result = super.call(
      "getSoulRegisteredTimestamp",
      "getSoulRegisteredTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );

    return result[0].toBigInt();
  }

  try_getSoulRegisteredTimestamp(soulId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSoulRegisteredTimestamp",
      "getSoulRegisteredTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSoulStartDateTimestamp(soulId: BigInt): BigInt {
    let result = super.call(
      "getSoulStartDateTimestamp",
      "getSoulStartDateTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );

    return result[0].toBigInt();
  }

  try_getSoulStartDateTimestamp(soulId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSoulStartDateTimestamp",
      "getSoulStartDateTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(soulId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCreated(soulId: BigInt): boolean {
    let result = super.call("isCreated", "isCreated(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);

    return result[0].toBoolean();
  }

  try_isCreated(soulId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isCreated", "isCreated(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(minter_: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(minter_)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(minter_: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(minter_)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSoulbound(sbtId: BigInt): boolean {
    let result = super.call("isSoulbound", "isSoulbound(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(sbtId)
    ]);

    return result[0].toBoolean();
  }

  try_isSoulbound(sbtId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSoulbound", "isSoulbound(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(sbtId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  latestUnusedTokenId(): BigInt {
    let result = super.call(
      "latestUnusedTokenId",
      "latestUnusedTokenId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_latestUnusedTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "latestUnusedTokenId",
      "latestUnusedTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  soulIdToSoulContainer(
    param0: BigInt
  ): WTFSBT1155__soulIdToSoulContainerResult {
    let result = super.call(
      "soulIdToSoulContainer",
      "soulIdToSoulContainer(uint256):(string,string,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new WTFSBT1155__soulIdToSoulContainerResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_soulIdToSoulContainer(
    param0: BigInt
  ): ethereum.CallResult<WTFSBT1155__soulIdToSoulContainerResult> {
    let result = super.tryCall(
      "soulIdToSoulContainer",
      "soulIdToSoulContainer(uint256):(string,string,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new WTFSBT1155__soulIdToSoulContainerResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  soulURI(soulId: BigInt): string {
    let result = super.call("soulURI", "soulURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);

    return result[0].toString();
  }

  try_soulURI(soulId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("soulURI", "soulURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  uri(soulId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);

    return result[0].toString();
  }

  try_uri(soulId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(soulId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get name_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get baseURI_(): string {
    return this._call.inputValues[2].value.toString();
  }

  get treasury_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get minter_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class CreateSoulCall extends ethereum.Call {
  get inputs(): CreateSoulCall__Inputs {
    return new CreateSoulCall__Inputs(this);
  }

  get outputs(): CreateSoulCall__Outputs {
    return new CreateSoulCall__Outputs(this);
  }
}

export class CreateSoulCall__Inputs {
  _call: CreateSoulCall;

  constructor(call: CreateSoulCall) {
    this._call = call;
  }

  get soulName_(): string {
    return this._call.inputValues[0].value.toString();
  }

  get description_(): string {
    return this._call.inputValues[1].value.toString();
  }

  get startDateTimestamp_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get endDateTimestamp_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateSoulCall__Outputs {
  _call: CreateSoulCall;

  constructor(call: CreateSoulCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get soulId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RecoverCall extends ethereum.Call {
  get inputs(): RecoverCall__Inputs {
    return new RecoverCall__Inputs(this);
  }

  get outputs(): RecoverCall__Outputs {
    return new RecoverCall__Outputs(this);
  }
}

export class RecoverCall__Inputs {
  _call: RecoverCall;

  constructor(call: RecoverCall) {
    this._call = call;
  }

  get oldOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RecoverCall__Outputs {
  _call: RecoverCall;

  constructor(call: RecoverCall) {
    this._call = call;
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get minter_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetbaseURICall extends ethereum.Call {
  get inputs(): SetbaseURICall__Inputs {
    return new SetbaseURICall__Inputs(this);
  }

  get outputs(): SetbaseURICall__Outputs {
    return new SetbaseURICall__Outputs(this);
  }
}

export class SetbaseURICall__Inputs {
  _call: SetbaseURICall;

  constructor(call: SetbaseURICall) {
    this._call = call;
  }

  get baseURI_(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetbaseURICall__Outputs {
  _call: SetbaseURICall;

  constructor(call: SetbaseURICall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferTreasuryCall extends ethereum.Call {
  get inputs(): TransferTreasuryCall__Inputs {
    return new TransferTreasuryCall__Inputs(this);
  }

  get outputs(): TransferTreasuryCall__Outputs {
    return new TransferTreasuryCall__Outputs(this);
  }
}

export class TransferTreasuryCall__Inputs {
  _call: TransferTreasuryCall;

  constructor(call: TransferTreasuryCall) {
    this._call = call;
  }

  get treasury_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferTreasuryCall__Outputs {
  _call: TransferTreasuryCall;

  constructor(call: TransferTreasuryCall) {
    this._call = call;
  }
}
