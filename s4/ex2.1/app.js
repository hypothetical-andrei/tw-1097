import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const fileName = uuidv4()

fs.writeFileSync(`${fileName}.txt`, 'this is a file')