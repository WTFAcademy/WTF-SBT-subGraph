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

export class SBTMinted extends ethereum.Event {
  get params(): SBTMinted__Params {
    return new SBTMinted__Params(this);
  }
}

export class SBTMinted__Params {
  _event: SBTMinted;

  constructor(event: SBTMinted) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get soulId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SignerChanged extends ethereum.Event {
  get params(): SignerChanged__Params {
    return new SignerChanged__Params(this);
  }
}

export class SignerChanged__Params {
  _event: SignerChanged;

  constructor(event: SignerChanged) {
    this._event = event;
  }

  get oldSigner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newSigner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WTFSBT1155Minter extends ethereum.SmartContract {
  static bind(address: Address): WTFSBT1155Minter {
    return new WTFSBT1155Minter("WTFSBT1155Minter", address);
  }

  getMessageHash(account: Address, soulId: BigInt): Bytes {
    let result = super.call(
      "getMessageHash",
      "getMessageHash(address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(soulId)
      ]
    );

    return result[0].toBytes();
  }

  try_getMessageHash(
    account: Address,
    soulId: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getMessageHash",
      "getMessageHash(address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(soulId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  mintedAddress(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "mintedAddress",
      "mintedAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBoolean();
  }

  try_mintedAddress(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "mintedAddress",
      "mintedAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  signer(): Address {
    let result = super.call("signer", "signer():(address)", []);

    return result[0].toAddress();
  }

  try_signer(): ethereum.CallResult<Address> {
    let result = super.tryCall("signer", "signer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verify(ethSignedMessageHash: Bytes, signature: Bytes): boolean {
    let result = super.call("verify", "verify(bytes32,bytes):(bool)", [
      ethereum.Value.fromFixedBytes(ethSignedMessageHash),
      ethereum.Value.fromBytes(signature)
    ]);

    return result[0].toBoolean();
  }

  try_verify(
    ethSignedMessageHash: Bytes,
    signature: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("verify", "verify(bytes32,bytes):(bool)", [
      ethereum.Value.fromFixedBytes(ethSignedMessageHash),
      ethereum.Value.fromBytes(signature)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  wtfsbt(): Address {
    let result = super.call("wtfsbt", "wtfsbt():(address)", []);

    return result[0].toAddress();
  }

  try_wtfsbt(): ethereum.CallResult<Address> {
    let result = super.tryCall("wtfsbt", "wtfsbt():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get sbtAddr_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get signer_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
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

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get soulId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class SetSignerCall extends ethereum.Call {
  get inputs(): SetSignerCall__Inputs {
    return new SetSignerCall__Inputs(this);
  }

  get outputs(): SetSignerCall__Outputs {
    return new SetSignerCall__Outputs(this);
  }
}

export class SetSignerCall__Inputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }

  get newSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerCall__Outputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
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
