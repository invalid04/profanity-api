import fs from 'fs'

interface Row {
    text: string
}

async function parseCSV(filePath: string): Promise<Row[]> {
    return new Promise((resolve, reject) => {
        const rows: Row[] = []

        fs.createReadStream(filePath)
    })
}