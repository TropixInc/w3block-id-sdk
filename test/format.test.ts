import { BigNumber, ethers } from 'ethers';
import { Format } from '../src/format'

describe("Format", () => {
    it("is bignumber", () => {
        expect(Format.isBigNumber({
            "type": "BigNumber",
            "hex": "0x00"
        })).toBe(true);
    });
    it("it's not a bignumber", () => {
        expect(Format.isBigNumber("a")).toBe(false);
    });
    it("format null and undefined", () => {
        expect(Format.from(null)).toBe(null);
        expect(Format.from(undefined)).toBe(undefined);
    });
    it("format string", () => {
        expect(Format.from("string")).toBe("string");
    });
    it("format big number", () => {
        const data = {
            "type": "BigNumber",
            "hex": "0x00"
        }
        const response = Format.from(data) as BigNumber;
        expect(response.toNumber()).toBe(0);
    });
    it("format address", () => {
        expect(Format.from(ethers.constants.AddressZero)).toBe(ethers.constants.AddressZero);
    });
    it("format boolean", () => {
        expect(Format.from(true)).toBe(true);
        expect(Format.from("true")).toBe(true);
        expect(Format.from(false)).toBe(false);
        expect(Format.from("false")).toBe(false);
    });

    it("simple format array with basic types", () => {
        const data = [
            "string",
            0,
            {
                "type": "BigNumber",
                "hex": "0x00"
            },
            ethers.constants.AddressZero,
            true,
            null,
            undefined,
        ]
        const response = Format.from(data);
        expect(response[0]).toBe("string");
        expect(response[1]).toBe(0);
        expect(response[2].toNumber()).toBe(0);
        expect(response[3]).toBe(ethers.constants.AddressZero);
        expect(response[4]).toBe(true);
    });

    it("simple format object with basic types", () => {
        const data = {
            "string": "string",
            "number": 0,
            "bignumber":{
                "type": "BigNumber",
                "hex": "0x00"
            },
            "address": ethers.constants.AddressZero,
            "boolean":true,
            "null":null,
            "undefined":undefined,
        }
        const response = Format.from(data);
        expect(response.string).toBe("string");
        expect(response.number).toBe(0);
        expect(response.bignumber.toNumber()).toBe(0);
        expect(response.address).toBe(ethers.constants.AddressZero);
        expect(response.boolean).toBe(true);
    });

    it("format complex object", () => {
        const simpleObj = {
            "string": "string",
            "number": 0,
            "bignumber":{
                "type": "BigNumber",
                "hex": "0x00"
            },
            "address": ethers.constants.AddressZero,
            "boolean":true,
            "null":null,
            "undefined":undefined,
        }
        const data = {
            ...simpleObj,
            "array": [
                "string",
                0,
                {
                    "type": "BigNumber",
                    "hex": "0x00"
                },
                ethers.constants.AddressZero,
                true,
                null,
                undefined,
                {
                    ...simpleObj
                }
            ]
        }
        const response = Format.from(data);
        expect(response.string).toBe("string");
        expect(response.number).toBe(0);
        expect(response.bignumber.toNumber()).toBe(0);
        expect(response.address).toBe(ethers.constants.AddressZero);
        expect(response.boolean).toBe(true);
        expect(response.array.length).toBe(data.array.length);
    });
})
