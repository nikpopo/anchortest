import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Bank } from "../target/types/bank";

describe("anchor-counter", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)

  const program = anchor.workspace.Bank as Program<Bank>

  const counter = anchor.web3.Keypair.generate()

  it("Is initialized!", async () => {})

  it("Incremented the count", async () => {})
})
