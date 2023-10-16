function extractData(evmLog: any): { id: bigint, owner: string, displayName: string, imageUrl: string} {
if (evmLog.topics[0] === events.NewGravatar.topic) {
return events.NewGravatar.decode(evmLog)
}
if (evmLog.topics[0] === events.UpdatedGravatar.topic) {
return events.UpdatedGravatar.decode(evmLog)
}
import { TypeormDatabase } from '@subsquid/typeorm-store'
import { decodeHex } from '@subsquid/evm-processor'
import { events } from './abi/Gravity'
import { Gravatar } from './model'
import { processor, GRAVATAR_CONTRACT } from './processor'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
const gravatars: Map<string, Gravatar> = new 
